import { CustomTable } from "../common/custom-table";
import { appsAdminColumns, appsAdminData } from "./apps-admin-data";
import { data, getAppColumns } from "./apps-data";

interface AppsTableProps {
  onConfigure?: () => void;
}

export const AppsTable = ({ onConfigure }: AppsTableProps) => {
  return (
    <div className="">
      <CustomTable columns={getAppColumns(onConfigure)} data={data} />
    </div>
  );
};

export const AppsAdminTable = () => {
  return (
    <div className="">
      <CustomTable columns={appsAdminColumns} data={appsAdminData} />
      <div className="flex justify-end items-center gap-1 mt-6">
        <button
          type="button"
          className="w-8 h-8 rounded border border-[#CFCFCF] flex items-center justify-center text-sm text-[#606060] hover:bg-[#F7F9FB]"
        >
          &lt;
        </button>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            className={`w-8 h-8 rounded flex items-center justify-center text-sm ${
              n === 1
                ? "bg-[#5B26EF] text-white"
                : "border border-[#CFCFCF] text-[#606060] hover:bg-[#F7F9FB]"
            }`}
          >
            {n}
          </button>
        ))}
        <button
          type="button"
          className="w-8 h-8 rounded border border-[#CFCFCF] flex items-center justify-center text-sm text-[#606060] hover:bg-[#F7F9FB]"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
