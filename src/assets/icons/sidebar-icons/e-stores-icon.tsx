import type { IconType } from "../types";

export const ElectronicStoresIcon: React.FC<IconType> = ({
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
        d="M7 14.5V25C7 26.3807 8.11929 27.5 9.5 27.5H22.5C23.8807 27.5 25 26.3807 25 25V14.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M6 5.5H26L27.5 12C27.5 13.3807 26.3807 14.5 25 14.5C23.6193 14.5 22.5 13.3807 22.5 12C22.5 13.3807 21.3807 14.5 20 14.5C18.6193 14.5 17.5 13.3807 17.5 12C17.5 13.3807 16.3807 14.5 15 14.5C13.6193 14.5 12.5 13.3807 12.5 12C12.5 13.3807 11.3807 14.5 10 14.5C8.61929 14.5 7.5 13.3807 7.5 12L6 5.5Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M12 27.5V20.5C12 19.6716 12.6716 19 13.5 19H18.5C19.3284 19 20 19.6716 20 20.5V27.5"
        stroke="currentColor"
        strokeWidth="2.2"
      />
    </svg>
  );
};
