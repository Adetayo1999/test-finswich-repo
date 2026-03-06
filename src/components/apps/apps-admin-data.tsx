import { createColumnHelper } from "@tanstack/react-table";
import { CopyableText } from "../common/copyable-text";
import { Toggle } from "../common/custom-toggle";
import discordLogo from "@/assets/react.svg";

export type AppAdminRow = {
  logo: string;
  app_access: string;
  email: string;
  permission: string;
  status: "Joined" | "Invited";
  app_super_admin: string;
  action: "Suspend" | "Activate";
  admin_status: boolean;
  date_time: string;
};

export const appsAdminData: AppAdminRow[] = [
  {
    logo: "",
    app_access: "Omanga",
    email: "talktoavischarles@gmail.com",
    permission: "APP-03349903...",
    status: "Joined",
    app_super_admin: "talktoavischarles@gmail.com",
    action: "Suspend",
    admin_status: false,
    date_time: "1 Sept 2026-10:00am",
  },
  {
    logo: "",
    app_access: "Omanga integrated Services...",
    email: "talktoavischarles@gmail.com",
    permission: "APP-03349903...",
    status: "Invited",
    app_super_admin: "talktoavischarles@gmail.com",
    action: "Activate",
    admin_status: true,
    date_time: "1 Sept 2026-10:00am",
  },
  {
    logo: "",
    app_access: "Omanga integrated Services...",
    email: "talktoavischarles@gmail.com",
    permission: "APP-03349903...",
    status: "Joined",
    app_super_admin: "talktoavischarles@gmail.com",
    action: "Suspend",
    admin_status: false,
    date_time: "1 Sept 2026-10:00am",
  },
];

const columnHelper = createColumnHelper<AppAdminRow>();

export const appsAdminColumns = [
  columnHelper.accessor("logo", {
    header: "Logo",
    cell: () => (
      <div className="h-8 w-8 rounded-full bg-[#712EEB] flex items-center justify-center shrink-0">
        <img src={discordLogo} alt="" className="h-5 w-5 object-contain" />
      </div>
    ),
  }),
  columnHelper.accessor("app_access", {
    header: "App Access",
    cell: (info) => (
      <p className="truncate max-w-[120px]">{info.getValue()}</p>
    ),
  }),
  columnHelper.accessor("email", {
    header: "Email",
    cell: (info) => <p className="truncate max-w-[180px]">{info.getValue()}</p>,
  }),
  columnHelper.accessor("permission", {
    header: "Permission",
    cell: (info) => (
      <div className="flex items-center gap-1">
        <CopyableText text={info.getValue()} className="truncate max-w-[140px]" />
      </div>
    ),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => {
      const status = info.getValue();
      return (
        <span
          className={`
            text-xs font-semibold px-3 py-1 rounded-full
            ${status === "Joined" ? "bg-[#D1FADF] text-[#039855]" : ""}
            ${status === "Invited" ? "bg-[#FEF3C7] text-[#D97706]" : ""}
          `}
        >
          {status}
        </span>
      );
    },
  }),
  columnHelper.accessor("app_super_admin", {
    header: "App Super Admin",
    cell: (info) => (
      <p className="truncate max-w-[180px]">{info.getValue()}</p>
    ),
  }),
  columnHelper.accessor("action", {
    header: "Action",
    cell: (info) => {
      const action = info.getValue();
      return (
        <button
          type="button"
          className={`
            text-xs font-bold px-3 py-1.5 rounded-lg
            ${action === "Suspend" ? "bg-[#FEE2E2] text-[#DC2626]" : ""}
            ${action === "Activate" ? "bg-[#D1FADF] text-[#039855]" : ""}
          `}
        >
          {action}
        </button>
      );
    },
  }),
  columnHelper.accessor("admin_status", {
    header: "Admin Status",
    cell: (info) => (
      <Toggle
        checked={info.getValue()}
        onChange={() => {}}
      />
    ),
  }),
  columnHelper.accessor("date_time", {
    header: "Date/Time",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
];
