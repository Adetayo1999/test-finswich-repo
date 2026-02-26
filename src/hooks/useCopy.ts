import toast from "react-hot-toast";

export const useCopy = () => {
  const copyToClipboard = (text: string) =>
    toast.promise(navigator.clipboard.writeText(text), {
      loading: "copying text...",
      success: "text copied",
      error: "unable to copy text",
    });

  return { copyToClipboard };
};
