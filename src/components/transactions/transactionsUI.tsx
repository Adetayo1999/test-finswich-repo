import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa6";
import clsx from "clsx";
import { CustomTable } from "../common/custom-table";
import { mockTransactionHistory, transactionsColumns } from "./data";

export type FilterDropdownOption = {
  value: string;
  label: string;
};

type FilterDropdownProps = {
  value: string;
  options: FilterDropdownOption[];
  onValueChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  value,
  options,
  onValueChange,
  placeholder = "Select...",
  className,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((o) => o.value === value);
  const displayLabel = selectedOption?.label ?? placeholder;

  return (
    <div ref={ref} className={clsx("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 bg-white border border-[#E4E7EC] rounded-full pl-4 pr-3 py-2.5 text-[#555] text-sm font-medium min-w-40 justify-between hover:border-[#767680]/40 transition-colors"
      >
        <span className="truncate">{displayLabel}</span>
        <FaChevronDown
          className={clsx(
            "w-3.5 h-3.5 text-[#767680] shrink-0 transition-transform",
            open && "rotate-180",
          )}
        />
      </button>
      {open && (
        <ul className="absolute top-full left-0 mt-1.5 bg-white border border-[#E4E7EC] rounded-lg shadow-lg py-1 z-10 min-w-40 max-h-60 overflow-auto">
          {options.map((opt) => (
            <li key={opt.value}>
              <button
                type="button"
                onClick={() => {
                  onValueChange?.(opt.value);
                  setOpen(false);
                }}
                className={clsx(
                  "w-full text-left px-4 py-2.5 text-sm hover:bg-[#F7F9FB]",
                  opt.value === value
                    ? "text-[#712EEB] font-medium bg-[#F7F9FB]"
                    : "text-[#555]",
                )}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const WalletBalanceView: React.FC<{ title: string; amount: number }> = (
  props,
) => {
  return (
    <div className="flex flex-col gap-y-1.5">
      <h3 className="text-[#0F0F0F] text-3xl font-bold">
        ${props.amount.toFixed(2)}
      </h3>
      <p className="text-sm text-[#606060]"> {props.title}</p>
    </div>
  );
};

export const TransactionsInformation = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex  gap-x-6">
        <div className="">
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect
              width="33"
              height="32"
              rx="4"
              fill="url(#pattern0_34965_7164)"
            />
            <defs>
              <pattern
                id="pattern0_34965_7164"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_34965_7164"
                  transform="matrix(0.00195312 0 0 0.00201416 0 -0.015625)"
                />
              </pattern>
              <image
                id="image0_34965_7164"
                width="512"
                height="512"
                preserveAspectRatio="none"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACAKADAAQAAAABAAACAAAAAAAL+LWFAAAtYElEQVR4Ae3dDbBtV10Y8IQ8wkcSiAmYQBgggAkfY1OwIp8CMWKghikSsENFB5Bp6RTL1NYWsJXpVEptham2DlqRIozIFCFTDUlkACEEEAQqMAIBwfCVBCWQLyCBJP0v5t3Dfe++e++5+66919dvz/zfO/fcs9f6r9/a96z/Pnefc486ykaAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBPYscPSe97ADAQIECBCoW+CESO/hEfeMSLevifhsxIcibomwESBAgAABAh0JnBNjuSjiWxG3HSG+Gve9OuL+ETYCBAgQIECgcYFTI/+LI4606B/pvpvjsf8l4pgIGwECBAgQINCgwN+PnD8fcaSFfrf7Lon97tLgmKVMgAABAgSGFnhYjD69rL/bQr/T99MrB14JGPowMngCBAgQaEkgXeT3tYidFvd1v/fLLQ1crgQIECBAYFSBHGf+m4uDGwLylFExjZsAAQIECLQgkPPMf3MR8KstDF6OBAgQIEBgRIHcZ/6bC4CPjQhqzAQIECBAoHaBuc78NxcBfg1Q+1EgPwIECBAYSmDOM//NBUDqZ5jtdsOM1EAJECBAoEWBdOb/9oiTFkh+iT4WGIYuCBAgQIBA2wJLnflvvApwVttcsidAgAABAu0LpDP/r0dsLM5z/39r9HVy+2xGQIAAAQIE2hVY+sw/FRfpLwUO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U9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIEGhdQADQ+gdInQIAAAQJTBBQAU9TsQ4AAAQIE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"
              />
            </defs>
          </svg>
        </div>
        <div className="">
          <h2 className="text-xl font-semibold text-[#0F0F0F] mb-1">
            All Transactions
          </h2>
          <p className="text-sm text-[#0F0F0F] mb-5">
            See records of the transactions from your customers.
          </p>
          <div className="flex gap-x-20 items-center">
            <WalletBalanceView amount={0.0} title="Total Pay-in" />
            <WalletBalanceView amount={0.0} title="Total Payout" />
            <WalletBalanceView amount={0.0} title="Today's Transaction" />
          </div>
        </div>
      </div>
      <div className="">
        <FilterDropdown options={[]} value="" placeholder="Select Country" />
      </div>
    </div>
  );
};

export const TransactionHistory = () => {
  return (
    <div className="">
      <div className="mb-10">
        <h1 className="text-[#606060] font-bold text-xl mb-1">
          Transaction history
        </h1>
        <p className="text-sm text-[#606060] mb-6 ">
          Highlights of your settlement balance across multiple countries
        </p>
        <div className="flex justify-between items-center">
          <div className="w-[20rem] h-10 relative">
            <button className="absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-5 ">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3501 14.3563C14.2568 14.4483 14.1311 14.4999 14.0001 14.5001C13.8673 14.4995 13.7398 14.4481 13.6438 14.3563L10.9438 11.6501C9.80671 12.6052 8.34474 13.0845 6.86285 12.9879C5.38095 12.8913 3.99355 12.2264 2.99 11.1317C1.98645 10.0371 1.44424 8.59729 1.47645 7.1126C1.50867 5.62791 2.11282 4.21298 3.1629 3.1629C4.21298 2.11282 5.62791 1.50867 7.1126 1.47645C8.59729 1.44424 10.0371 1.98645 11.1317 2.99C12.2264 3.99355 12.8913 5.38095 12.9879 6.86285C13.0845 8.34474 12.6052 9.80671 11.6501 10.9438L14.3501 13.6438C14.3973 13.6904 14.4349 13.7458 14.4605 13.807C14.4861 13.8681 14.4993 13.9338 14.4993 14.0001C14.4993 14.0664 14.4861 14.132 14.4605 14.1932C14.4349 14.2544 14.3973 14.3098 14.3501 14.3563ZM7.2501 12.0001C8.18956 12.0001 9.10792 11.7215 9.88906 11.1996C10.6702 10.6776 11.279 9.93579 11.6385 9.06784C11.998 8.19989 12.0921 7.24483 11.9088 6.32342C11.7255 5.40201 11.2732 4.55564 10.6089 3.89134C9.94455 3.22704 9.09819 2.77465 8.17678 2.59137C7.25537 2.40809 6.3003 2.50215 5.43235 2.86167C4.5644 3.22119 3.82255 3.83 3.30062 4.61114C2.77868 5.39227 2.5001 6.31064 2.5001 7.2501C2.50175 8.50937 3.00273 9.71659 3.89317 10.607C4.78361 11.4975 5.99083 11.9984 7.2501 12.0001Z"
                  fill="#1C1C1C"
                  fillOpacity="0.2"
                />
              </svg>
            </button>
            <input
              type="text"
              name=""
              className="border border-[#1C1C1C1A] text-[#1C1C1C33] w-full h-full rounded-lg pl-8"
              placeholder="Search..."
              id=""
            />
          </div>
          <div className="flex items-center gap-x-6">
            <FilterDropdown
              options={[]}
              value=""
              placeholder="All transaction"
            />
            <FilterDropdown options={[]} value="" placeholder="From" />
            <FilterDropdown options={[]} value="" placeholder="To" />
          </div>
        </div>
      </div>

      <CustomTable
        columns={transactionsColumns}
        data={mockTransactionHistory}
      />
    </div>
  );
};
