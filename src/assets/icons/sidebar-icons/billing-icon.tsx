import type { IconType } from "../types";

export const BillingIcon: React.FC<IconType> = ({
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
        d="M8 4.5H24C25.1046 4.5 26 5.39543 26 6.5V27L22.5 25L19 27L15.5 25L12 27L8 24.7V6.5C8 5.39543 8.89543 4.5 10 4.5H24"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 11H20.5M12.5 16H19M12.5 21H16.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M22 19.25C22 20.4926 20.9926 21.5 19.75 21.5C18.5074 21.5 17.5 20.4926 17.5 19.25C17.5 18.0074 18.5074 17 19.75 17C20.9926 17 22 18.0074 22 19.25Z"
        fill="currentColor"
      />
    </svg>
  );
};
