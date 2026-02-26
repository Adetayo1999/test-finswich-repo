import { useCopy } from "@/hooks/useCopy";
import clsx from "clsx";
import { IoCopyOutline } from "react-icons/io5";

export const CopyableText: React.FC<{
  text: string;
  className?: string;
  truncate?: boolean;
}> = ({ truncate = true, ...rest }) => {
  const { copyToClipboard } = useCopy();

  return (
    <div className="flex gap-x-1.5 items-center">
      <p
        className={clsx(
          truncate && "truncate",
          rest.className || "w-[7.313rem]",
        )}
      >
        {rest.text}
      </p>
      <button
        onClick={() => copyToClipboard(rest.text)}
        className="cursor-pointer"
      >
        <IoCopyOutline />
        {/* <svg
          width="17"
          height="14"
          viewBox="0 0 17 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.1923 0H5.67692C4.63615 0 3.78462 0.621 3.78462 1.38V9.66C3.78462 10.419 4.63615 11.04 5.67692 11.04H14.1923C15.2331 11.04 16.0846 10.419 16.0846 9.66V1.38C16.0846 0.621 15.2331 0 14.1923 0ZM14.1923 9.66H5.67692V1.38H14.1923V9.66ZM0 8.97V7.59H1.89231V8.97H0ZM0 5.175H1.89231V6.555H0V5.175ZM6.62308 12.42H8.51538V13.8H6.62308V12.42ZM0 11.385V10.005H1.89231V11.385H0ZM1.89231 13.8C0.851538 13.8 0 13.179 0 12.42H1.89231V13.8ZM5.20385 13.8H3.31154V12.42H5.20385V13.8ZM9.93461 13.8V12.42H11.8269C11.8269 13.179 10.9754 13.8 9.93461 13.8ZM1.89231 2.76V4.14H0C0 3.381 0.851538 2.76 1.89231 2.76Z"
            fill="#767680"
          />
        </svg> */}
      </button>
    </div>
  );
};
