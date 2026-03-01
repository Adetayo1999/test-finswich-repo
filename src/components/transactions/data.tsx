import { createColumnHelper } from "@tanstack/react-table";
import { CopyableText } from "../common/copyable-text";

export const mockTransactionHistory = [
  {
    amount: 132.0,
    transaction_ref: "Txn-0334Tsif3K...",
    provider_ref: "SCT-0334Tsi...",
    currency: "GHS",
    fee: 0.0,
    end_value: 1302.5,
    commision: 2.5,
    created_at: "1 Sept 2026-10:00am",
  },
  {
    amount: 132.0,
    transaction_ref: "Txn-0334Tsif3K...",
    provider_ref: "SCT-0334Tsi...",
    currency: "GHS",
    fee: 0.0,
    end_value: 1302.5,
    commision: 2.5,
    created_at: "1 Sept 2026-10:00am",
  },
  {
    amount: 132.0,
    transaction_ref: "Txn-0334Tsif3K...",
    provider_ref: "SCT-0334Tsi...",
    currency: "GHS",
    fee: 0.0,
    end_value: 1302.5,
    commision: 2.5,
    created_at: "1 Sept 2026-10:00am",
  },
  {
    amount: 132.0,
    transaction_ref: "Txn-0334Tsif3K...",
    provider_ref: "SCT-0334Tsi...",
    currency: "GHS",
    fee: 0.0,
    end_value: 1302.5,
    commision: 2.5,
    created_at: "1 Sept 2026-10:00am",
  },
  {
    amount: 132.0,
    transaction_ref: "Txn-0334Tsif3K...",
    provider_ref: "SCT-0334Tsi...",
    currency: "GHS",
    fee: 0.0,
    end_value: 1302.5,
    commision: 2.5,
    created_at: "1 Sept 2026-10:00am",
  },
  {
    amount: 132.0,
    transaction_ref: "Txn-0334Tsif3K...",
    provider_ref: "SCT-0334Tsi...",
    currency: "GHS",
    fee: 0.0,
    end_value: 1302.5,
    commision: 2.5,
    created_at: "1 Sept 2026-10:00am",
  },
  {
    amount: 132.0,
    transaction_ref: "Txn-0334Tsif3K...",
    provider_ref: "SCT-0334Tsi...",
    currency: "GHS",
    fee: 0.0,
    end_value: 1302.5,
    commision: 2.5,
    created_at: "1 Sept 2026-10:00am",
  },
  {
    amount: 132.0,
    transaction_ref: "Txn-0334Tsif3K...",
    provider_ref: "SCT-0334Tsi...",
    currency: "GHS",
    fee: 0.0,
    end_value: 1302.5,
    commision: 2.5,
    created_at: "1 Sept 2026-10:00am",
  },
  {
    amount: 132.0,
    transaction_ref: "Txn-0334Tsif3K...",
    provider_ref: "SCT-0334Tsi...",
    currency: "GHS",
    fee: 0.0,
    end_value: 1302.5,
    commision: 2.5,
    created_at: "1 Sept 2026-10:00am",
  },
];

const transactionColumnHelper =
  createColumnHelper<(typeof mockTransactionHistory)[0]>();

export const transactionsColumns = [
  transactionColumnHelper.accessor("amount", {
    header: "Amount",
    cell: (info) => <p>{info.getValue().toFixed(2)}</p>,
  }),
  transactionColumnHelper.accessor("transaction_ref", {
    header: "Transaction Ref",
    cell: (info) => <CopyableText text={info.getValue()} />,
  }),
  transactionColumnHelper.accessor("provider_ref", {
    header: "Provider Reference",
    cell: (info) => <CopyableText text={info.getValue()} />,
  }),
  transactionColumnHelper.accessor("currency", {
    header: "Currency",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
  transactionColumnHelper.accessor("fee", {
    header: "Fee",
    cell: (info) => <p>{info.getValue().toFixed(2)}</p>,
  }),
  transactionColumnHelper.accessor("end_value", {
    header: "End Value",
    cell: (info) => <p>{info.getValue().toFixed(2)}</p>,
  }),
  transactionColumnHelper.accessor("commision", {
    header: "Commision",
    cell: (info) => <p>{info.getValue().toFixed(2)}</p>,
  }),
  transactionColumnHelper.accessor("created_at", {
    header: "Date/Time",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
  transactionColumnHelper.accessor(() => "action", {
    header: "Actions",
    cell: () => (
      <button className=" bg-[#179E2B42] text-xs shadow-[0px_0.35px_0.7px_0px_#1018280D] font-semibold text-[#219653] rounded px-6 py-1.5">
        View
      </button>
    ),
  }),
];
