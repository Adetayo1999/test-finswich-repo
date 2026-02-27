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

const treasuryData = [
  { currency: "USD", value: 26 },
  { currency: "NGN", value: 28 },
  { currency: "EUR", value: 26 },
  { currency: "GBP", value: 29 },
  { currency: "KES", value: 25 },
  { currency: "CAD", value: 28 },
  { currency: "UGX", value: 26 },
  { currency: "ZAR", value: 28 },
  { currency: "XOF", value: 26 },
  { currency: "XOF", value: 29 },
  { currency: "TZS", value: 25 },
  { currency: "USDT", value: 28 },
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

export function TreasuryByCurrencyChart() {
  return (
    <div className="bg-[#F7F9FB] rounded-xl p-6">
      <ChartHeader
        title="Treasury By Currency"
        subtitle="Cummulative sum of all the balances held by users across multiple currencies"
      />
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={treasuryData}
          margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="0"
            stroke="#F1F1F1"
            horizontal={true}
            vertical={false}
          />
          <XAxis
            dataKey="currency"
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
            {treasuryData.map((_, i) => (
              <Cell key={i} fill={barColors[i]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
