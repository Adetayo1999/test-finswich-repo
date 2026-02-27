import { UserGrowth } from "./UserGrowth";
import { TransactionIssues } from "./TransactionIssues";

export function UserGrowthAndTransactionIssues({
  chartData,
}: {
  chartData?: { month: string; value: number }[];
} = {}) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <UserGrowth chartData={chartData} />
      <TransactionIssues chartData={chartData} />
    </div>
  );
}
