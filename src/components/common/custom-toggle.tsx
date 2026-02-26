import clsx from "clsx";

type ToggleProps = {
  checked?: boolean;
  onChange: (next: boolean) => void;
  disabled?: boolean;
  className?: string;
};

export function Toggle({
  checked = false,
  onChange,
  disabled,
  className,
}: ToggleProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      aria-pressed={checked}
      onClick={() => onChange(!checked)}
      className={[
        "relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-200",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        className ?? "",
      ].join(" ")}
      style={{
        backgroundColor: checked ? "#5B26EF" : "#CD2C2C",
      }}
    >
      {/* knob */}
      <span
        className={clsx(
          "absolute h-5 w-5 rounded-full transition-transform duration-200 bg-[#F8F8F8]",
          checked ? "left-0.5" : "right-0.5",
        )}
        style={{
          backgroundColor: "#F8F8F8",
        }}
      />
    </button>
  );
}
