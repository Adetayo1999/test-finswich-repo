import { createColumnHelper } from "@tanstack/react-table";
import type { MerchantApp } from "@/api/merchants";
import discordLogo from "@/assets/react.svg";
import { ROUTES } from "@/routes/paths";
import { CopyableText } from "../common/copyable-text";
import { formatAppDate } from "@/pages/apps/create-app-form";
import { DeleteAppButton } from "./DeleteAppButton";
import { Link } from "react-router-dom";

const columnHelper = createColumnHelper<MerchantApp>();

const statusStyles: Record<string, string> = {
  draft: "bg-[#FEF3C7] text-[#92400E]",
  active: "bg-[#D1FAE5] text-[#065F46]",
  published: "bg-[#D1FAE5] text-[#065F46]",
};

export const getAppColumns = (
  superAdminEmail?: string,
  onConfigure?: (app: MerchantApp) => void,
  onDelete?: (app: MerchantApp) => void,
  deletingAppId?: string,
) => [
  columnHelper.display({
    id: "logo",
    header: "Logo",
    cell: () => (
      <div className="h-8 w-8 rounded-full bg-[#712EEB] flex items-center justify-center shrink-0">
        <img src={discordLogo} alt="" className="h-5 w-5 object-contain" />
      </div>
    ),
  }),
  columnHelper.accessor("alias", {
    header: "App Alias",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
  columnHelper.accessor("name", {
    header: "App Name",
    cell: ({ row, getValue }) => (
      <Link
        to={ROUTES.DASHBOARD.OVERVIEW.ROOT(row.original.id)}
        className="block max-w-[200px] truncate font-semibold text-[#111827] hover:text-[#5B26EF]"
      >
        {getValue()}
      </Link>
    ),
  }),
  columnHelper.accessor("id", {
    header: "App ID",
    cell: (info) => <CopyableText text={info.getValue()} />,
  }),
  columnHelper.display({
    id: "primary_currencies",
    header: "Primary Currencies",
    cell: () => (
      <button
        type="button"
        className="text-[#219653] text-[0.625rem] font-bold rounded bg-[#179E2B42] shadow-[0px_0.69px_1.39px_0px_#1018280D] px-3 py-1 flex justify-center items-center"
      >
        View
      </button>
    ),
  }),
  columnHelper.display({
    id: "super_admin",
    header: "App Super Admin",
    cell: () => <p>{superAdminEmail ?? "—"}</p>,
  }),
  columnHelper.display({
    id: "configure",
    header: "App Configuration",
    cell: ({ row }) => (
      <button
        type="button"
        onClick={() => onConfigure?.(row.original)}
        className="text-white text-[0.625rem] rounded-md font-bold bg-[#23232B] shadow-[0px_0.69px_1.39px_0px_#1018280D] px-5 py-1.5 flex justify-center items-center"
      >
        Configure
      </button>
    ),
  }),
  columnHelper.accessor("status", {
    header: "App Status",
    cell: (info) => {
      const status = info.getValue();
      const style =
        statusStyles[status.toLowerCase()] ?? "bg-[#F3F4F6] text-[#374151]";

      return (
        <span
          className={`inline-flex rounded-full px-2.5 py-0.5 text-[0.625rem] font-semibold capitalize ${style}`}
        >
          {status}
        </span>
      );
    },
  }),
  columnHelper.accessor("createdAt", {
    header: "Date/Time",
    cell: (info) => <p>{formatAppDate(info.getValue())}</p>,
  }),
  columnHelper.display({
    id: "actions",
    header: "",
    cell: ({ row }) => (
      <DeleteAppButton
        appName={row.original.name}
        isDeleting={deletingAppId === row.original.id}
        onClick={() => onDelete?.(row.original)}
      />
    ),
  }),
];
