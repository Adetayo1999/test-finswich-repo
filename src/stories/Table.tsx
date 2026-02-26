import { createColumnHelper } from "@tanstack/react-table";
import { CustomTable } from "@/components/common/custom-table";
import discordLogo from "./assets/discord.svg";
import { CopyableText } from "@/components/common/copyable-text";
import { Toggle } from "@/components/common/custom-toggle";

const data = [
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

export const AppsTable = () => {
  const columnHelper = createColumnHelper<(typeof data)[0]>();

  const columns = [
    columnHelper.accessor(() => "app_logo", {
      header: "Logo",
      cell: () => <img src={discordLogo} alt="" />,
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
        <button className="text-white text-[0.625rem] rounded-md font-bold bg-[#23232B] shadow-[0px_0.69px_1.39px_0px_#1018280D] px-5 py-1.5 flex justify-center items-center">
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

  return <CustomTable columns={columns} data={data} />;
};
