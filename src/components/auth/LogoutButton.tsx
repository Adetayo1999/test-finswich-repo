import { useLogout } from "@/hooks/useLogout";
import clsx from "clsx";
import { FiLogOut } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa6";
import { useState } from "react";

type LogoutButtonProps = {
  className?: string;
  variant?: "default" | "ghost" | "sidebar";
};

export function LogoutButton({
  className,
  variant = "default",
}: LogoutButtonProps) {
  const logout = useLogout();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    if (isLoggingOut) return;

    setIsLoggingOut(true);
    await logout();
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={isLoggingOut}
      aria-busy={isLoggingOut}
      className={clsx(
        "cursor-pointer text-sm font-medium transition-colors disabled:cursor-wait disabled:opacity-75",
        variant === "default" &&
          "rounded-lg border border-[#e0e0e6] bg-white px-4 py-2 text-[#23232B] hover:bg-[#f7f7f9]",
        variant === "ghost" &&
          "text-[#767680] hover:text-[#23232B]",
        variant === "sidebar" &&
          "flex w-full items-center justify-center gap-2 rounded-xl bg-[#E53935] px-4 py-3.5 text-sm font-semibold text-white hover:bg-[#c62828]",
        className,
      )}
    >
      {variant === "sidebar" ? (
        <>
          {isLoggingOut ? (
            <FaSpinner className="h-5 w-5 shrink-0 animate-spin" aria-hidden />
          ) : (
            <FiLogOut className="h-5 w-5 shrink-0" aria-hidden />
          )}
          {isLoggingOut ? "Logging out..." : "Log out"}
        </>
      ) : (
        <span className="inline-flex items-center gap-2">
          {isLoggingOut && (
            <FaSpinner className="h-4 w-4 animate-spin" aria-hidden />
          )}
          {isLoggingOut ? "Logging out..." : "Log out"}
        </span>
      )}
    </button>
  );
}
