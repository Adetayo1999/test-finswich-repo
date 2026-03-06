import clsx from "clsx";
import { FiCheck } from "react-icons/fi";

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

export const ModalSelect: React.FC<ModalSelectProps> = ({
  label,
  className,
  ...rest
}) => {
  return (
    <div className="">
      <label htmlFor="" className="text-[#5C5C60] font-bold text-sm block mb-2">
        {label}
      </label>
      <select
        className={clsx(
          "border border-[#C4C4C4] text-[#3F3F3F] rounded-md h-12 text-sm p-2.5 w-full bg-[#FFFFFF6B]",
          className,
        )}
        {...rest}
      />
    </div>
  );
};

interface ModalCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const ModalCheckbox: React.FC<ModalCheckboxProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="inline-flex items-center gap-2 text-sm text-[#3F3F3F]"
    >
      <span
        className={clsx(
          "h-5 w-5 rounded border flex items-center justify-center transition-colors",
          checked
            ? "bg-[#712EEB] border-[#712EEB] text-white"
            : "bg-transparent border-[#C4C4C4]",
        )}
      >
        {checked && <FiCheck className="h-4 w-4" />}
      </span>
      <span>{label}</span>
    </button>
  );
};
