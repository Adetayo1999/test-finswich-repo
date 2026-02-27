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
  "#95A4FC",
  "#BAEDBD",
  "#1C1C1C",
  "#B1E3FF",
  "#A8C5DA",
  "#A1E3CB",
];

const transactionsData = [
  { month: "Jan", value: 23 },
  { month: "Feb", value: 27 },
  { month: "Mar", value: 24 },
  { month: "Apr", value: 28 },
  { month: "May", value: 21 },
  { month: "Jun", value: 26 },
  { month: "Jul", value: 23 },
  { month: "Aug", value: 27 },
  { month: "Sep", value: 24 },
  { month: "Oct", value: 28 },
  { month: "Nov", value: 21 },
  { month: "Dec", value: 26 },
];

function ChartHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-bold text-[#1C1C1C] inline mr-2">{title}</h3>
      {subtitle && (
        <span className="text-[0.8125rem] font-normal text-[#767680]">
          {subtitle}
        </span>
      )}
    </div>
  );
}

export function TransactionsChart() {
  return (
    <div className="bg-[#F7F9FB] rounded-xl p-6">
      <ChartHeader
        title="Transactions"
        subtitle="Cummulative sum of all the transactions processed"
      />
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={transactionsData}
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
            {transactionsData.map((_, i) => (
              <Cell key={i} fill={barColors[i]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
