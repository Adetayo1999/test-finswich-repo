import type { IconType } from "../types";

export const CustomerIcon: React.FC<IconType> = ({
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
        d="M16 16.5C19.0376 16.5 21.5 14.0376 21.5 11C21.5 7.96243 19.0376 5.5 16 5.5C12.9624 5.5 10.5 7.96243 10.5 11C10.5 14.0376 12.9624 16.5 16 16.5Z"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <path
        d="M7 26.5C8.25453 21.9492 11.4367 19.5 16 19.5C20.5633 19.5 23.7455 21.9492 25 26.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M6.5 15C8.433 15 10 13.433 10 11.5C10 9.567 8.433 8 6.5 8M25.5 15C23.567 15 22 13.433 22 11.5C22 9.567 23.567 8 25.5 8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M3.5 23.5C4.14306 21.5086 5.40315 20.2164 7.25 19.625M28.5 23.5C27.8569 21.5086 26.5969 20.2164 24.75 19.625"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
};
