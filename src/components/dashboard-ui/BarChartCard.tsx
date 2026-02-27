import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  Tooltip,
} from "recharts";

const barColors = [
  "#95A4FC",
  "#BAEDBD",
  "#1C1C1C",
  "#B1E3FF",
  "#A8C5DA",
  "#A1E3CB",
];

function FilterDropdown({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="flex items-center gap-1.5 text-[0.8125rem] font-normal text-[#1C1C1C] bg-transparent border-0 cursor-pointer"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="text-[#767680]"
      >
        <path
          d="M1 3h4M1 7h10M1 11h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <span>{label}</span>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        className="text-[#767680]"
      >
        <path
          d="M3 4.5L6 7.5L9 4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export function BarChartCard({
  title,
  showFilters,
  data,
}: {
  title: string;
  showFilters?: boolean;
  data: { month: string; value: number }[];
}) {
  return (
    <div className="bg-[#F7F9FB] rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-[#1C1C1C]">{title}</h3>
        {showFilters && (
          <div className="flex items-center gap-2">
            <FilterDropdown label="Payin" />
            <FilterDropdown label="Local Transfer" />
          </div>
        )}
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart
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
            cursor={{ fill: "rgba(0,0,0,0.04)" }}
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #F1F1F1",
              borderRadius: "8px",
              fontSize: "0.75rem",
            }}
            formatter={(value) => [value != null ? `${value}M` : "", "Value"]}
            labelFormatter={(label) => label}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {data.map((_, i) => (
              <Cell key={i} fill={barColors[i]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
