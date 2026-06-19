import { uploadFileAndWait } from "@/api/files";
import { useCallback, useState } from "react";

export function useFileUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const upload = useCallback(async (file: File): Promise<string> => {
    setIsUploading(true);
    setProgress(0);

    try {
      const result = await uploadFileAndWait(file, setProgress);

      if (!result.url) {
        throw new Error("Upload completed without a file URL");
      }

      return result.url;
    } finally {
      setIsUploading(false);
      setProgress(0);
    }
  }, []);

  return { upload, isUploading, progress };
}
