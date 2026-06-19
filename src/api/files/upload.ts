import { api } from "@/lib/api";
import { assertApiSuccess, getApiErrorMessage } from "@/lib/api-response";
import type {
  FileUploadResponse,
  FileUploadStatusData,
  FileUploadStatusResponse,
} from "./types";

const POLL_INTERVAL_MS = 1500;
const MAX_POLL_ATTEMPTS = 60;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function uploadFile(file: File): Promise<FileUploadResponse> {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const { data } = await api.post<FileUploadResponse>("files/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return assertApiSuccess<FileUploadResponse>(
      data,
      (response) => Boolean(response.data?.job_id),
      "File upload failed",
    );
  } catch (error) {
    throw new Error(getApiErrorMessage(error, "File upload failed"));
  }
}

export async function getFileUploadStatus(
  jobId: string,
): Promise<FileUploadStatusResponse> {
  try {
    const { data } = await api.get<FileUploadStatusResponse>(
      `files/status/${jobId}`,
    );

    return assertApiSuccess<FileUploadStatusResponse>(
      data,
      (response) => Boolean(response.data?.jobId),
      "Failed to fetch upload status",
    );
  } catch (error) {
    throw new Error(getApiErrorMessage(error, "Failed to fetch upload status"));
  }
}

export async function uploadFileAndWait(
  file: File,
  onProgress?: (percent: number) => void,
): Promise<FileUploadStatusData> {
  const uploadResponse = await uploadFile(file);
  const jobId = uploadResponse.data.job_id;

  for (let attempt = 0; attempt < MAX_POLL_ATTEMPTS; attempt += 1) {
    const statusResponse = await getFileUploadStatus(jobId);
    const { data } = statusResponse;

    onProgress?.(data.percent);

    if (data.status === "done") {
      if (!data.url) {
        throw new Error("Upload completed without a file URL");
      }
      return data;
    }

    if (data.status === "failed" || data.status === "error") {
      throw new Error("File upload failed");
    }

    await sleep(POLL_INTERVAL_MS);
  }

  throw new Error("File upload timed out");
}
