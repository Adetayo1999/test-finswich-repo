import clsx from "clsx";
import { FaTrash } from "react-icons/fa6";

type DeleteAppButtonProps = {
  appName: string;
  isDeleting?: boolean;
  onClick: () => void;
};

export function DeleteAppButton({
  appName,
  isDeleting,
  onClick,
}: DeleteAppButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDeleting}
      aria-label={`Delete ${appName}`}
      title={`Delete ${appName}`}
      className={clsx(
        "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-transparent text-[#DC2626] transition-colors",
        "hover:border-[#FECACA] hover:bg-[#FEF2F2] hover:text-[#B91C1C]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626]/30",
        isDeleting && "cursor-not-allowed opacity-50",
      )}
    >
      {isDeleting ? (
        <span
          className="h-5 w-5 animate-spin rounded-full border-2 border-[#DC2626] border-t-transparent"
          aria-hidden
        />
      ) : (
        <FaTrash className="h-5 w-5" />
      )}
    </button>
  );
}
