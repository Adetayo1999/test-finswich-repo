import {
  FaMagnifyingGlass,
  FaBars,
  FaStore,
  FaCube,
  FaDollarSign,
} from "react-icons/fa6";
import { CustomTable } from "../common/custom-table";
import { FilterDropdown } from "../wallets/WalletsUI";
import {
  mockStoresData,
  storesColumns,
  mockCatalogsData,
  catalogsColumns,
} from "./data";

const MetricCard: React.FC<{
  value: string;
  title: string;
  icon: React.ReactNode;
}> = ({ value, title, icon }) => (
  <div className="flex items-center gap-3">
    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#F2F2F2] text-[#767680]">
      {icon}
    </span>
    <div className="flex flex-col gap-y-0.5">
      <p className="text-[#0F0F0F] text-xl font-bold">{value}</p>
      <p className="text-sm text-[#606060]">{title}</p>
    </div>
  </div>
);

export const AllStoresView = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-xl font-bold text-[#11151F]">All Stores</h1>
        <FilterDropdown
          value="ghana"
          onValueChange={() => {}}
          options={[{ value: "ghana", label: "Ghana" }]}
          placeholder="Country"
        />
      </div>

      <div className="flex flex-wrap gap-6">
        <MetricCard
          value="0.00"
          title="Total Stores"
          icon={<FaStore className="w-5 h-5" />}
        />
        <MetricCard
          value="0.00"
          title="Total Products"
          icon={<FaCube className="w-5 h-5" />}
        />
        <MetricCard
          value="$0.00"
          title="Total Sales"
          icon={<FaDollarSign className="w-5 h-5" />}
        />
        <MetricCard
          value="$0.00"
          title="Total Sales"
          icon={<FaDollarSign className="w-5 h-5" />}
        />
      </div>

      <div>
        <h2 className="text-[#606060] font-bold text-xl mb-1">Stores</h2>
        <p className="text-sm text-[#606060] mb-6">
          Highlights of your settlement balance across multiple countries
        </p>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="relative min-w-[16rem]">
            <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#767680]" />
            <input
              type="text"
              placeholder="Search"
              className="w-full h-10 pl-10 pr-4 rounded-lg border border-[#1C1C1C1A] text-[#1C1C1C33] text-sm focus:outline-none focus:ring-1 focus:ring-[#712EEB]/30"
            />
          </div>
          <div className="flex items-center gap-4">
            <FilterDropdown
              value=""
              onValueChange={() => {}}
              options={[]}
              placeholder="Industry"
            />
            <button
              type="button"
              className="p-2.5 rounded-lg border border-[#E4E7EC] text-[#767680] hover:bg-[#F7F9FB] transition-colors"
              title="Filter"
            >
              <FaBars className="w-4 h-4" />
            </button>
          </div>
        </div>
        <CustomTable columns={storesColumns} data={mockStoresData} />
      </div>
    </div>
  );
};

export const CatalogsView = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-xl font-bold text-[#11151F]">Catalogs</h1>
        <FilterDropdown
          value="ghana"
          onValueChange={() => {}}
          options={[{ value: "ghana", label: "Ghana" }]}
          placeholder="Country"
        />
      </div>

      <div>
        <h2 className="text-[#606060] font-bold text-xl mb-1">Stores</h2>
        <p className="text-sm text-[#606060] mb-6">
          Highlights of your settlement balance across multiple countries
        </p>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="relative min-w-[16rem]">
            <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#767680]" />
            <input
              type="text"
              placeholder="Q Search"
              className="w-full h-10 pl-10 pr-4 rounded-lg border border-[#1C1C1C1A] text-[#1C1C1C33] text-sm focus:outline-none focus:ring-1 focus:ring-[#712EEB]/30"
            />
          </div>
          <div className="flex items-center gap-4">
            <FilterDropdown
              value=""
              onValueChange={() => {}}
              options={[]}
              placeholder="Industry"
            />
            <button
              type="button"
              className="p-2.5 rounded-lg border border-[#E4E7EC] text-[#767680] hover:bg-[#F7F9FB] transition-colors"
              title="Filter"
            >
              <FaBars className="w-4 h-4" />
            </button>
          </div>
        </div>
        <CustomTable columns={catalogsColumns} data={mockCatalogsData} />
      </div>
    </div>
  );
};
