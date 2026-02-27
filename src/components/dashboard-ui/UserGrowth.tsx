import { BarChartCard } from "./BarChartCard";

const defaultChartData = [
  { month: "Jan", value: 18 },
  { month: "Feb", value: 22 },
  { month: "Mar", value: 20 },
  { month: "Apr", value: 24 },
  { month: "May", value: 8 },
  { month: "Jun", value: 22 },
];

export function UserGrowth({
  chartData = defaultChartData,
}: {
  chartData?: { month: string; value: number }[];
} = {}) {
  return <BarChartCard title="User Growth" showFilters data={chartData} />;
}
