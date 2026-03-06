import { createColumnHelper } from "@tanstack/react-table";
import { CopyableText } from "../common/copyable-text";
import discordLogo from "@/assets/react.svg";
import { Toggle } from "../common/custom-toggle";

export const data = [
  {
    alias: "Omanga",
    company_name: "Omanga integrated Services...",
    app_id: "APP-0337575748448484884",
    super_admin: "talktoavischarles@gmail.com",
    date: "1 sept 2026-10:00am",
  },
  {
    alias: "Omanga",
    company_name: "Omanga integrated Services...",
    app_id: "APP-0337575748448484884",
    super_admin: "talktoavischarles@gmail.com",
    date: "1 sept 2026-10:00am",
  },
  {
    alias: "Omanga",
    company_name: "Omanga integrated Services...",
    app_id: "APP-0337575748448484884",
    super_admin: "talktoavischarles@gmail.com",
    date: "1 sept 2026-10:00am",
  },
  {
    alias: "Omanga",
    company_name: "Omanga integrated Services...",
    app_id: "APP-0337575748448484884",
    super_admin: "talktoavischarles@gmail.com",
    date: "1 sept 2026-10:00am",
  },
  {
    alias: "Omanga",
    company_name: "Omanga integrated Services...",
    app_id: "APP-0337575748448484884",
    super_admin: "talktoavischarles@gmail.com",
    date: "1 sept 2026-10:00am",
  },
  {
    alias: "Omanga",
    company_name: "Omanga integrated Services...",
    app_id: "APP-0337575748448484884",
    super_admin: "talktoavischarles@gmail.com",
    date: "1 sept 2026-10:00am",
  },
  {
    alias: "Omanga",
    company_name: "Omanga integrated Services...",
    app_id: "APP-0337575748448484884",
    super_admin: "talktoavischarles@gmail.com",
    date: "1 sept 2026-10:00am",
  },
];

const columnHelper = createColumnHelper<(typeof data)[0]>();

export const getAppColumns = (onConfigure?: () => void) => [
  columnHelper.accessor(() => "app_logo", {
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
  columnHelper.accessor("company_name", {
    header: "Company Name",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
  columnHelper.accessor("app_id", {
    header: "App ID",
    cell: (info) => <CopyableText text={info.getValue()} />,
  }),
  columnHelper.accessor(() => "primary_currencies", {
    header: "Primary Currencies",
    cell: () => (
      <button className="text-[#219653] text-[0.625rem] font-bold rounded bg-[#179E2B42] shadow-[0px_0.69px_1.39px_0px_#1018280D] px-3 py-1 flex justify-center items-center">
        View
      </button>
    ),
  }),
  columnHelper.accessor("super_admin", {
    header: "App Super Admin",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
  columnHelper.accessor(() => "app_configuration_button", {
    header: "App Configuration",
    cell: () => (
      <button
        type="button"
        onClick={onConfigure}
        className="text-white text-[0.625rem] rounded-md font-bold bg-[#23232B] shadow-[0px_0.69px_1.39px_0px_#1018280D] px-5 py-1.5 flex justify-center items-center"
      >
        Configure
      </button>
    ),
  }),
  columnHelper.accessor(() => "app_status", {
    header: "App Status",
    cell: () => <Toggle checked onChange={() => {}} />,
  }),
  columnHelper.accessor("date", {
    header: "Date/Time",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
];
