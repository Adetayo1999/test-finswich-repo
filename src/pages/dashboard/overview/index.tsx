import {
  KpiCards,
  NewUsers,
  OngoingTxnActivities,
  ResolutionNotifications,
  RevenueByLocation,
  TotalUsersAndTraffic,
  TrafficByLocationAndExchangeRate,
  TransactionsChart,
  TreasuryByCurrencyChart,
  UserGrowthAndTransactionIssues,
} from "@/components/dashboard-ui";

const DashboardOverviewPage = () => {
  return (
    <div className="flex">
      <div className="flex-[0.8] flex flex-col gap-y-8 px-5 py-8 border-r  border-[#F1F1F1]">
        <KpiCards />
        <TotalUsersAndTraffic />
        <UserGrowthAndTransactionIssues />
        <TrafficByLocationAndExchangeRate />
        <TransactionsChart />
        <TreasuryByCurrencyChart />
      </div>
      <div className="flex-[0.2] flex flex-col gap-y-8 px-2 py-8">
        <ResolutionNotifications />
        <OngoingTxnActivities />
        <NewUsers />
        <RevenueByLocation />
      </div>
    </div>
  );
};

export default DashboardOverviewPage;
