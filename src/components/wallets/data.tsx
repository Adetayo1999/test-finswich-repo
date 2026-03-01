import { createColumnHelper } from "@tanstack/react-table";
import tronImage from "@/assets/tron-image.png";
import { CopyableText } from "../common/copyable-text";

export const mockSettlementHistory = [
  {
    country: "Ghana",
    balance: 134.33,
    currency: "GHS",
    total_settlement: 0.0,
    pending_settlement: 0.0,
  },
  {
    country: "Ghana",
    balance: 134.33,
    currency: "GHS",
    total_settlement: 0.0,
    pending_settlement: 0.0,
  },
  {
    country: "Ghana",
    balance: 134.33,
    currency: "GHS",
    total_settlement: 0.0,
    pending_settlement: 0.0,
  },
  {
    country: "Ghana",
    balance: 134.33,
    currency: "GHS",
    total_settlement: 0.0,
    pending_settlement: 0.0,
  },
  {
    country: "Ghana",
    balance: 134.33,
    currency: "GHS",
    total_settlement: 0.0,
    pending_settlement: 0.0,
  },
  {
    country: "Ghana",
    balance: 134.33,
    currency: "GHS",
    total_settlement: 0.0,
    pending_settlement: 0.0,
  },
  {
    country: "Ghana",
    balance: 134.33,
    currency: "GHS",
    total_settlement: 0.0,
    pending_settlement: 0.0,
  },
  {
    country: "Ghana",
    balance: 134.33,
    currency: "GHS",
    total_settlement: 0.0,
    pending_settlement: 0.0,
  },
];

export const mockBillingWalletHistory = [
  {
    id: "erhrfhfhfhfhhrhr",
    transaction_reference: "Txn-0334Tsif3K300",
    amount: 132.0,
    currency: "GHS",
    fee: 0.0,
    amount_credited: 0.0,
    created_at: "1 Sept 2026-10:00am",
  },
  {
    id: "erhrfhfhfhfhhrhr",
    transaction_reference: "Txn-0334Tsif3K300",
    amount: 132.0,
    currency: "GHS",
    fee: 0.0,
    amount_credited: 0.0,
    created_at: "1 Sept 2026-10:00am",
  },
  {
    id: "erhrfhfhfhfhhrhr",
    transaction_reference: "Txn-0334Tsif3K300",
    amount: 132.0,
    currency: "GHS",
    fee: 0.0,
    amount_credited: 0.0,
    created_at: "1 Sept 2026-10:00am",
  },
  {
    id: "erhrfhfhfhfhhrhr",
    transaction_reference: "Txn-0334Tsif3K300",
    amount: 132.0,
    currency: "GHS",
    fee: 0.0,
    amount_credited: 0.0,
    created_at: "1 Sept 2026-10:00am",
  },
  {
    id: "erhrfhfhfhfhhrhr",
    transaction_reference: "Txn-0334Tsif3K300",
    amount: 132.0,
    currency: "GHS",
    fee: 0.0,
    amount_credited: 0.0,
    created_at: "1 Sept 2026-10:00am",
  },
  {
    id: "erhrfhfhfhfhhrhr",
    transaction_reference: "Txn-0334Tsif3K300",
    amount: 132.0,
    currency: "GHS",
    fee: 0.0,
    amount_credited: 0.0,
    created_at: "1 Sept 2026-10:00am",
  },
  {
    id: "erhrfhfhfhfhhrhr",
    transaction_reference: "Txn-0334Tsif3K300",
    amount: 132.0,
    currency: "GHS",
    fee: 0.0,
    amount_credited: 0.0,
    created_at: "1 Sept 2026-10:00am",
  },
  {
    id: "erhrfhfhfhfhhrhr",
    transaction_reference: "Txn-0334Tsif3K300",
    amount: 132.0,
    currency: "GHS",
    fee: 0.0,
    amount_credited: 0.0,
    created_at: "1 Sept 2026-10:00am",
  },
  {
    id: "erhrfhfhfhfhhrhr",
    transaction_reference: "Txn-0334Tsif3K300",
    amount: 132.0,
    currency: "GHS",
    fee: 0.0,
    amount_credited: 0.0,
    created_at: "1 Sept 2026-10:00am",
  },
  {
    id: "erhrfhfhfhfhhrhr",
    transaction_reference: "Txn-0334Tsif3K300",
    amount: 132.0,
    currency: "GHS",
    fee: 0.0,
    amount_credited: 0.0,
    created_at: "1 Sept 2026-10:00am",
  },
];

const billingWalletColumnHelper =
  createColumnHelper<(typeof mockBillingWalletHistory)[0]>();

export const billingsColumn = [
  billingWalletColumnHelper.accessor("id", {
    header: "Icon",
    cell: () => <img src={tronImage} alt="" />,
  }),
  billingWalletColumnHelper.accessor("transaction_reference", {
    header: "Transaction Ref",
    cell: (info) => <CopyableText text={info.getValue()} />,
  }),
  billingWalletColumnHelper.accessor("amount", {
    header: "Amount",
    cell: (info) => <p>{info.getValue().toFixed(2)}</p>,
  }),
  billingWalletColumnHelper.accessor("currency", {
    header: "Currency",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
  billingWalletColumnHelper.accessor("fee", {
    header: "Fee",
    cell: (info) => <p>{info.getValue().toFixed(2)}</p>,
  }),
  billingWalletColumnHelper.accessor("amount_credited", {
    header: "Amount Credited",
    cell: (info) => <p>{info.getValue().toFixed(2)}</p>,
  }),
  billingWalletColumnHelper.accessor("created_at", {
    header: "Date/Time",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
  billingWalletColumnHelper.accessor(() => "records", {
    header: "Records",
    cell: () => (
      <button className=" bg-[#179E2B42] text-xs shadow-[0px_0.35px_0.7px_0px_#1018280D] font-semibold text-[#219653] rounded px-6 py-1.5">
        Open
      </button>
    ),
  }),
  billingWalletColumnHelper.accessor(() => "actions", {
    header: "Actions",
    cell: () => (
      <div className="flex gap-x-5">
        <button className="bg-[#23232B] text-white font-semibold shadow-[0px_0.35px_0.7px_0px_#1018280D] text-xs px-6 py-2 rounded">
          Swap
        </button>
        <button className="bg-white border border-gray-100 text-[#141428] font-semibold shadow-[0px_1px_2px_0px_#1018280D] text-xs px-6 py-2 rounded">
          Transfer
        </button>
      </div>
    ),
  }),
];

const settlementWalletColumnHelper =
  createColumnHelper<(typeof mockSettlementHistory)[0]>();

export const settlementColumns = [
  settlementWalletColumnHelper.accessor(() => "flag", {
    header: "Flag",
    cell: () => <p>🇬🇭</p>,
  }),
  settlementWalletColumnHelper.accessor("country", {
    header: "Country Name",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
  settlementWalletColumnHelper.accessor("balance", {
    header: "Wallet Balance",
    cell: (info) => <p>{info.getValue().toFixed(2)}</p>,
  }),
  settlementWalletColumnHelper.accessor("currency", {
    header: "Currency",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
  settlementWalletColumnHelper.accessor("total_settlement", {
    header: "Total Settlement",
    cell: (info) => <p>{info.getValue().toFixed(2)}</p>,
  }),
  settlementWalletColumnHelper.accessor("pending_settlement", {
    header: "Pending Settlement",
    cell: (info) => <p>{info.getValue().toFixed(2)}</p>,
  }),
  settlementWalletColumnHelper.accessor(() => "records", {
    header: "Records",
    cell: () => (
      <button className=" bg-[#179E2B42] text-xs shadow-[0px_0.35px_0.7px_0px_#1018280D] font-semibold text-[#219653] rounded px-6 py-1.5">
        Open
      </button>
    ),
  }),
  settlementWalletColumnHelper.accessor(() => "actions", {
    header: "User Phone",
    cell: () => (
      <div className="flex gap-x-5">
        <button className="bg-[#23232B] text-white font-semibold shadow-[0px_0.35px_0.7px_0px_#1018280D] text-xs px-6 py-2 rounded">
          Swap
        </button>
        <button className="bg-white border border-gray-100 text-[#141428] font-semibold shadow-[0px_1px_2px_0px_#1018280D] text-xs px-6 py-2 rounded">
          Transfer
        </button>
      </div>
    ),
  }),
];
