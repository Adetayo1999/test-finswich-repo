import { useState, useRef, useEffect } from "react";
import tronImage from "@/assets/tron-image.png";
import settlementImage from "@/assets/settlement-wallet-img.png";
import { CopyableText } from "../common/copyable-text";
import { FaChevronDown } from "react-icons/fa6";
import clsx from "clsx";
import { CustomTable } from "../common/custom-table";
import {
  billingsColumn,
  mockBillingWalletHistory,
  mockSettlementHistory,
  settlementColumns,
} from "./data";

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
    <div className="flex flex-col gap-y-1">
      <h3 className="text-[#0F0F0F] text-2xl font-bold">
        ${props.amount.toFixed(2)}
      </h3>
      <p className="text-sm text-[#606060]"> {props.title}</p>
    </div>
  );
};

export const BillingWalletInformation = () => {
  return (
    <div className="">
      <div className="border-b border-[#E3E3E3] flex items-center gap-x-10 pb-3.5 mb-6">
        <div className="shrink-0">
          <img src={tronImage} alt="" />
        </div>
        <div className="flex-1">
          <div className="">
            <div className="flex justify-between mb-8">
              <div className="">
                <h2 className="text-[#0F0F0F] text-xl font-bold">
                  Billing Wallet
                </h2>
                <p className="text-sm text-[#0F0F0F]">
                  You can swap from other currency into your global wallet and
                  send it to any country of your choice.
                </p>
              </div>
              <div className="">
                <CopyableText
                  text="Wallet ID: W9034XHHS4340s"
                  className="text-xs text-[#333333]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-x-20 items-center">
                <WalletBalanceView amount={0.0} title="Wallet Balance" />
                <WalletBalanceView amount={0.0} title="Upcoming Billing" />
                <WalletBalanceView amount={0.0} title="Total Billing" />
              </div>
              <div className="flex items-center gap-x-8">
                <button className="bg-white shadow-[0px_1px_2px_0px_#1018280D] rounded-xl text-sm text-[#4F4F4F] px-8 py-2.5 font-medium border border-gray-100">
                  Global Transfer
                </button>
                <button className="bg-[#141428] shadow-[0px_1px_2px_0px_#1018280D] rounded-xl text-sm text-white px-8 py-2.5 font-medium ">
                  Swap
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-20">
          <div className="">
            <p className="text-sm text-[#44444E]">Wallet Address</p>
            <CopyableText
              text="GSJFe9skfhisfhifkdfopiuhyskssxx"
              className="text-base text-[#767680] font-semibold"
            />
          </div>
          <div className="">
            <p className="text-sm text-[#44444E]">Network</p>
            <h4 className="text-base text-[#767680] font-semibold">TRON</h4>
          </div>
          <div className="">
            <p className="text-sm text-[#44444E]">Asset</p>
            <h4 className="text-base text-[#767680] font-semibold">USDT</h4>
          </div>
        </div>
        <div className="">
          <button className="bg-[#141428] shadow-[0px_1px_2px_0px_#1018280D] rounded-xl text-sm text-white px-8 py-3.5 font-medium ">
            Fund Via Payment Link
          </button>
        </div>
      </div>
    </div>
  );
};

export const BilliingTransactionHistory = () => {
  return (
    <div className="">
      <div className="mb-10">
        <h1 className="text-[#606060] font-bold text-xl mb-1">
          Transaction history
        </h1>
        <p className="text-sm text-[#606060] mb-6 ">
          Highlights of your settlement wallet transaction records
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
        columns={billingsColumn}
        data={mockBillingWalletHistory}
        placeholderText="You currently don’t have any account creation under processing."
      />
    </div>
  );
};

export const SettlementWalletInformation = () => {
  return (
    <div className="">
      <div className="border-b border-[#E3E3E3] flex items-center gap-x-10 pb-3.5 mb-6">
        <div className="shrink-0">
          <img src={settlementImage} alt="" />
        </div>
        <div className="flex-1">
          <div className="">
            <div className="flex justify-between mb-4">
              <div className="">
                <h2 className="text-[#0F0F0F] text-xl font-bold">
                  Global Wallet
                </h2>
                <p className="text-sm text-[#0F0F0F]">
                  You can swap from other currency into your global wallet and
                  send it to any country of your choice.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-x-20 items-center">
                <WalletBalanceView amount={0.0} title="Wallet Balance" />
              </div>
              <div className="flex items-center gap-x-8">
                <button className="bg-white shadow-[0px_1px_2px_0px_#1018280D] rounded-xl text-sm text-[#4F4F4F] px-8 py-2.5 font-medium border border-gray-100">
                  Global Transfer
                </button>
                <button className="bg-[#141428] shadow-[0px_1px_2px_0px_#1018280D] rounded-xl text-sm text-white px-8 py-2.5 font-medium ">
                  Swap
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-20">
          <div className="">
            <p className="text-sm text-[#44444E]">Wallet Address</p>
            <CopyableText
              text="GSJFe9skfhisfhifkdfopiuhyskssxx"
              className="text-base text-[#767680] font-semibold"
            />
          </div>
          <div className="">
            <p className="text-sm text-[#44444E]">Network</p>
            <h4 className="text-base text-[#767680] font-semibold">TRON</h4>
          </div>
          <div className="">
            <p className="text-sm text-[#44444E]">Asset</p>
            <h4 className="text-base text-[#767680] font-semibold">USDT</h4>
          </div>
        </div>
        <div className="">
          <CopyableText
            text="Wallet ID: W9034XHHS4340s"
            className="text-xs text-[#333333]"
          />
        </div>
      </div>
    </div>
  );
};

export const SettlementTransactionHistory = () => {
  return (
    <div className="">
      <div className="mb-10 flex justify-between items-center">
        <div className="">
          <h1 className="text-[#606060] font-bold text-xl mb-1">
            All Settlement Wallets
          </h1>
          <p className="text-sm text-[#606060] mb-6 ">
            Highlights of your settlement balance across multiple countries
          </p>
        </div>
        <button className="bg-[#141428] text-white rounded-xl py-2 px-8">
          Add Wallet
        </button>
      </div>

      <CustomTable
        columns={settlementColumns}
        data={mockSettlementHistory}
        placeholderText="You currently don’t have any account creation under processing."
      />
    </div>
  );
};

export const KYCWalletInformation = () => {
  return (
    <div className="">
      <div className="border-b border-[#E3E3E3] flex items-center gap-x-10 pb-3.5 mb-6">
        <div className="shrink-0">
          <img src={tronImage} alt="" />
        </div>
        <div className="flex-1">
          <div className="">
            <div className="flex justify-between mb-8">
              <div className="">
                <h2 className="text-[#0F0F0F] text-xl font-bold">KYC Wallet</h2>
                <p className="text-sm text-[#0F0F0F]">
                  You can swap from other currency into your global wallet and
                  send it to any country of your choice.
                </p>
              </div>
              <div className="">
                <CopyableText
                  text="Wallet ID: W9034XHHS4340s"
                  className="text-xs text-[#333333]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-x-20 items-center">
                <WalletBalanceView amount={0.0} title="Wallet Balance" />
                <WalletBalanceView amount={0.0} title="Upcoming Billing" />
                <WalletBalanceView amount={0.0} title="Total Billing" />
              </div>
              <div className="flex items-center gap-x-8">
                <button className="bg-white shadow-[0px_1px_2px_0px_#1018280D] rounded-xl text-sm text-[#4F4F4F] px-8 py-2.5 font-medium border border-gray-100">
                  Global Transfer
                </button>
                <button className="bg-[#141428] shadow-[0px_1px_2px_0px_#1018280D] rounded-xl text-sm text-white px-8 py-2.5 font-medium ">
                  Swap
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-20">
          <div className="">
            <p className="text-sm text-[#44444E]">Wallet Address</p>
            <CopyableText
              text="GSJFe9skfhisfhifkdfopiuhyskssxx"
              className="text-base text-[#767680] font-semibold"
            />
          </div>
          <div className="">
            <p className="text-sm text-[#44444E]">Network</p>
            <h4 className="text-base text-[#767680] font-semibold">TRON</h4>
          </div>
          <div className="">
            <p className="text-sm text-[#44444E]">Asset</p>
            <h4 className="text-base text-[#767680] font-semibold">USDT</h4>
          </div>
        </div>
        <div className="">
          <button className="bg-[#141428] shadow-[0px_1px_2px_0px_#1018280D] rounded-xl text-sm text-white px-8 py-3.5 font-medium ">
            Fund Via Payment Link
          </button>
        </div>
      </div>
    </div>
  );
};

export const KYCTransactionHistory = () => {
  return (
    <div className="">
      <div className="mb-10">
        <h1 className="text-[#606060] font-bold text-xl mb-1">
          Transaction history
        </h1>
        <p className="text-sm text-[#606060] mb-6 ">
          Highlights of your settlement wallet transaction records
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
        columns={billingsColumn}
        data={mockBillingWalletHistory}
        placeholderText="You currently don’t have any account creation under processing."
      />
    </div>
  );
};
