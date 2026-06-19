import type { IconType } from "../types";

export const AppBuilderIcon: React.FC<IconType> = ({
  scale = 1,
  className = "",
}) => {
  return (
    <svg
      width={32 * scale}
      height={32 * scale}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 4.5H20C21.3807 4.5 22.5 5.61929 22.5 7V25C22.5 26.3807 21.3807 27.5 20 27.5H12C10.6193 27.5 9.5 26.3807 9.5 25V7C9.5 5.61929 10.6193 4.5 12 4.5Z"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <path
        d="M14 8H18M14.5 24H17.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M13.5 12.5H18.5V17.5H13.5V12.5Z"
        fill="currentColor"
      />
      <path
        d="M6 12H8.5M23.5 12H26M6 20H8.5M23.5 20H26"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
};
