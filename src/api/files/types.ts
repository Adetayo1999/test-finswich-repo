export type FileUploadData = {
  message: string;
  job_id: string;
};

export type FileUploadResponse = {
  status: boolean;
  message: string;
  data: FileUploadData;
};

export type FileUploadJobStatus = "done" | "failed" | "error" | string;

export type FileUploadStatusData = {
  jobId: string;
  status: FileUploadJobStatus;
  percent: number;
  url?: string;
  fileName?: string;
  fileType?: string;
  fileSize?: number;
};

export type FileUploadStatusResponse = {
  status: boolean;
  message: string;
  data: FileUploadStatusData;
};
