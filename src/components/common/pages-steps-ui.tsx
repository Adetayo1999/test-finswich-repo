import clsx from "clsx";

interface PageButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "dark" | "light";
}

export const PageStepButton: React.FC<PageButtonProps> = ({
  variant,
  children,
  ...rest
}) => {
  if (variant === "dark") {
    return (
      <button
        {...rest}
        className="bg-[#23232B] border border-[#23232B] shadow-[0px_1px_2px_0px_#1018280D] text-white text-sm font-bold rounded-xl py-2 px-3.5"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      {...rest}
      className="border border-[#D0D5DD] shadow-[0px_1px_2px_0px_#1018280D] bg-white min-w-32 md:min-w-44 text-sm text-[#344054] flex items-center gap-x-2 md:gap-x-4 rounded-xl py-2 px-3 md:px-3.5 justify-center cursor-pointer"
    >
      <span className="font-bold">{children}</span>
      <span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 15L12.5 10L7.5 5"
            stroke="#344054"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
};

interface PageStepHeaderProps {
  title: string;
  description: string;
  button?: React.ReactNode;
}

export const PageStepHeader: React.FC<PageStepHeaderProps> = (props) => {
  return (
    <div className="border-[#C0C0C0] border-b flex flex-col gap-4 md:flex-row md:justify-between md:items-center pb-6">
      <div>
        <h1 className="text-[#4F4F4F] font-bold text-xl md:text-3xl mb-1">
          {props.title}
        </h1>
        <p className="text-xs md:text-sm text-[#2B2B3D]">{props.description}</p>
      </div>
      <div className="shrink-0">{props.button && props.button}</div>
    </div>
  );
};

interface StepProps {
  index: number;
  title: string;
  status: "completed" | "pending";
  isActive?: boolean;
  onClick?: VoidFunction;
}

export const Step: React.FC<StepProps> = (props) => {
  return (
    <div
      className={clsx(
        "rounded-xl py-2.5 px-3 md:px-3.5 flex items-center gap-x-2 hover:bg-[#F2F4F7] cursor-pointer shrink-0 md:shrink",
        props.isActive ? "bg-[#F2F4F7]" : "bg-transparent",
      )}
      onClick={props.onClick}
    >
      <span
        className={clsx(
          "h-6 w-6 rounded-full flex justify-center items-center",
          props.status === "completed"
            ? "bg-[#039855]"
            : "text-[#667085] border border-[#EAECF0]",
        )}
      >
        {props.status === "completed" ? (
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.33366 2.5L3.75033 7.08333L1.66699 5"
              stroke="white"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          props.index
        )}
      </span>
      <span
        className={clsx(
          props.isActive ? "text-[#0075E2] font-bold" : "text-[#667085]",
        )}
      >
        {props.title}
      </span>
    </div>
  );
};

export const PageStepsLeftComponent: React.FC<{ children: React.ReactNode }> = (
  props,
) => {
  return (
    <div className="bg-white col-span-12 md:col-span-3 px-4 py-4 md:px-8 md:py-6 flex flex-row md:flex-col gap-2 md:gap-y-4 overflow-x-auto md:overflow-visible border-b md:border-b-0 border-[#EAECF0] md:border-none">
      {props.children}
    </div>
  );
};

export const PageStepsRightComponent: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = (props) => {
  return (
    <div className={clsx("col-span-12 md:col-span-9 px-4 py-4 md:px-8 md:py-6", props.className)}>
      {props.children}
    </div>
  );
};

export const PageStepsContainer: React.FC<{ children: React.ReactNode }> = (
  props,
) => {
  return (
    <div className="bg-[#F2F4F7] border-[#EAECF0] shadow-[0px_1px_2px_0px_#1018280D] rounded-2xl min-h-[280px] md:min-h-120 grid grid-cols-12 overflow-hidden">
      {props.children}
    </div>
  );
};

export const PageComponentTitle: React.FC<{
  text: string;
  classname?: string;
}> = ({ text, classname }) => (
  <h1 className={clsx("text-[#101828] text-sm md:text-base font-bold", classname)}>
    {text}
  </h1>
);

export const PageComponentDescription: React.FC<{
  text: string;
  classname?: string;
}> = ({ text, classname }) => (
  <p className={clsx("text-[#475467] text-sm md:text-base max-w-full md:max-w-70", classname)}>
    {text}
  </p>
);
