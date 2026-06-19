import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaTriangleExclamation } from "react-icons/fa6";

type DeleteAppModalProps = {
  appName: string;
  isDeleting?: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export function DeleteAppModal({
  appName,
  isDeleting,
  onClose,
  onConfirm,
}: DeleteAppModalProps) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000066] px-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-app-title"
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.18)]"
        initial={{ scale: 0.95, opacity: 0, y: 12 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 12 }}
        transition={{ duration: 0.2 }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FEE2E2] text-[#DC2626]">
          <FaTriangleExclamation className="h-6 w-6" />
        </div>

        <h2
          id="delete-app-title"
          className="text-xl font-bold text-[#111827]"
        >
          Delete &ldquo;{appName}&rdquo;?
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
          Deleting this app is permanent and cannot be undone. This will remove:
        </p>

        <ul className="mt-3 space-y-2 text-sm text-[#374151]">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#DC2626]" />
            All configuration data for this app
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#DC2626]" />
            All users associated with this app
          </li>
        </ul>

        <p className="mt-4 text-sm font-medium text-[#DC2626]">
          Please confirm you want to permanently delete this app.
        </p>

        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            disabled={isDeleting}
            className="rounded-xl border border-[#E5E7EB] px-5 py-2.5 text-sm font-semibold text-[#374151] transition-colors hover:bg-[#F9FAFB] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isDeleting}
            className="inline-flex min-w-[120px] items-center justify-center rounded-xl bg-[#DC2626] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#B91C1C] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isDeleting ? (
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
              "Delete app"
            )}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
