import clsx from "clsx";

interface ModalInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const ModalInput: React.FC<ModalInputProps> = ({
  label,
  className,
  ...rest
}) => {
  return (
    <div className="">
      <label htmlFor="" className="text-[#5C5C60] font-bold text-sm block mb-2">
        {label}
      </label>

      <input
        {...rest}
        className={clsx(
          "border border-[#C4C4C4] text-[#3F3F3F] rounded-md h-12 text-sm p-2.5 w-full bg-[#FFFFFF6B]",
          className,
        )}
      />
    </div>
  );
};

interface ModalSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

export const ModalSelect: React.FC<ModalSelectProps> = ({ label, ...rest }) => {
  return (
    <div className="">
      <label htmlFor="" className="text-[#5C5C60] font-bold text-sm block mb-2">
        {label}
      </label>
      <select
        className="border border-[#C4C4C4] text-[#3F3F3F] rounded-md h-12 text-sm p-2.5 w-full bg-[#FFFFFF6B]"
        {...rest}
      ></select>
    </div>
  );
};
