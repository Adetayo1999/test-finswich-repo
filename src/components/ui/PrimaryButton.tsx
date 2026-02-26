import clsx from "clsx";
import type React from "react";

export interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  loading?: boolean;
  loadingText?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className,
  fullWidth,
  loading,
  loadingText = "Loading...",
  disabled,
  ...rest
}) => {
  return (
    <button
      {...rest}
      disabled={disabled || loading}
      className={clsx(
        "inline-flex items-center justify-center rounded-lg bg-[#712EEB] min-w-[167px] h-[49px] px-[103px] py-3 text-base font-medium text-white transition-colors duration-150 hover:bg-[#5F21CF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#712EEB] disabled:opacity-60 disabled:cursor-not-allowed",
        fullWidth && "w-full px-6",
        className,
      )}
    >
      {loading ? loadingText : children}
    </button>
  );
};

