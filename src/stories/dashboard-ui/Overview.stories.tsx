import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  KpiCards,
  TotalUsersAndTraffic,
  UserGrowthAndTransactionIssues,
  TrafficByLocationAndExchangeRate,
  TransactionsChart,
  TreasuryByCurrencyChart,
  ResolutionNotifications,
  OngoingTxnActivities,
  NewUsers,
  RevenueByLocation,
} from "../../components/dashboard-ui";

const meta: Meta = {
  title: "DashboardUI/Overview",
  parameters: {
    layout: "fullscreen",
    background: "light",
  },
};

export default meta;

type Story = StoryObj;

export const FullOverview: Story = {
  render: () => (
    <div className="min-h-screen bg-[#f7f7f9] p-6 space-y-6">
      <KpiCards />
      <TotalUsersAndTraffic />
      <UserGrowthAndTransactionIssues />
      <TrafficByLocationAndExchangeRate />
      <div className="grid grid-cols-3 gap-4">
        <ResolutionNotifications />
        <OngoingTxnActivities />
        <div className="space-y-4">
          <NewUsers />
          <RevenueByLocation />
        </div>
      </div>
      <TransactionsChart />
      <TreasuryByCurrencyChart />
    </div>
  ),
};
