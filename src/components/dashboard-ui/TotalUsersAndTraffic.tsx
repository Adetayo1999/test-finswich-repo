import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export type TotalUsersDataPoint = {
  month: string;
  line1: number;
  line2: number;
};

const defaultUsersData: TotalUsersDataPoint[] = [
  { month: "Jan", line1: 8, line2: 12 },
  { month: "Feb", line1: 10, line2: 8 },
  { month: "Mar", line1: 17, line2: 14 },
  { month: "Apr", line1: 12, line2: 16 },
  { month: "May", line1: 10, line2: 14 },
  { month: "Jun", line1: 18, line2: 18 },
  { month: "Jul", line1: 22, line2: 20 },
];

function TotalUsersChart({
  data = defaultUsersData,
  height = 280,
}: {
  data?: TotalUsersDataPoint[];
  height?: number;
}) {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-4 mb-4">
        <h3 className="text-sm font-bold text-[#1C1C1C]">Total Users</h3>
        <div className="flex items-center text-[0.8125rem] font-normal text-[#767680]">
          <span>KYC</span>
          <span className="w-px h-4 mx-2 bg-[#E5E5E5]" />
          <span>NO KYC</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="0"
            stroke="#F1F1F1"
            horizontal={true}
            vertical={false}
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: "0.75rem", fill: "#767680" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: "0.75rem", fill: "#767680" }}
            tickFormatter={(v) => `${v}M`}
            domain={[0, 30]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1C1C1C",
              border: "none",
              borderRadius: "0.375rem",
              fontSize: "0.8125rem",
              color: "#fff",
            }}
            formatter={(value: number | undefined) =>
              value != null ? [(value * 1_000_000).toLocaleString(), ""] : ""
            }
          />
          <Line
            type="monotone"
            dataKey="line1"
            stroke="#A8C5DA"
            strokeWidth={2}
            dot={false}
            name=""
          />
          <Line
            type="monotone"
            dataKey="line2"
            stroke="#1C1C1C"
            strokeWidth={2}
            strokeDasharray="4 4"
            dot={false}
            name=""
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export type TrafficProductItem = {
  name: string;
  value: number;
  amount: string;
  active?: boolean;
};

const defaultTrafficProducts: TrafficProductItem[] = [
  { name: "Utility", value: 80, amount: "$1k" },
  { name: "Finswich", value: 40, amount: "$0.4k" },
  { name: "Transfer", value: 60, amount: "$0.6k", active: true },
  { name: "Global", value: 30, amount: "$0.6k" },
  { name: "V.Card", value: 25, amount: "$0.6k" },
  { name: "Paylink", value: 40, amount: "$0.6k" },
  { name: "Gift cards", value: 20, amount: "$0.6k" },
];

function TrafficByProducts({
  items = defaultTrafficProducts,
}: {
  items?: TrafficProductItem[];
}) {
  return (
    <div className="w-[17.5rem] shrink-0">
      <h3 className="text-base font-bold text-[#1C1C1C] mb-4">
        Traffic by Products
      </h3>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.name}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[0.8125rem] font-normal text-[#1C1C1C]">
                {item.name}
              </span>
              <span className="text-[0.8125rem] font-normal text-[#22C55E]">
                {item.amount}
              </span>
            </div>
            <div className="h-2 bg-[#1C1C1C1A] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${item.value}%`,
                  backgroundColor: "#1C1C1C",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TotalUsersAndTraffic({
  usersData,
  trafficItems,
}: {
  usersData?: TotalUsersDataPoint[];
  trafficItems?: TrafficProductItem[];
} = {}) {
  return (
    <div className="bg-[#F7F9FB] rounded-xl p-6 flex gap-y-8 gap-x-10">
      <TotalUsersChart data={usersData} />
      <TrafficByProducts items={trafficItems} />
    </div>
  );
}
