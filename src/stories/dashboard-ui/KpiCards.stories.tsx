import type { Meta, StoryObj } from "@storybook/react-vite";
import { KpiCards, type KpiCardItem } from "../../components/dashboard-ui";

const meta: Meta<typeof KpiCards> = {
  title: "DashboardUI/KpiCards",
  component: KpiCards,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    background: "light",
  },
};

export default meta;

type Story = StoryObj<typeof KpiCards>;

export const Default: Story = {};

export const CustomItems: Story = {
  args: {
    items: [
      { title: "Total Txn → Count", value: "721K", change: "+11.01%", trend: "up" },
      { title: "Total Txn → Volume", value: "367M", change: "-0.03%", trend: "down" },
      { title: "New Users", value: "1,156", change: "+15.03%", trend: "up" },
      { title: "Active Users", value: "239K", change: "+6.08%", trend: "up" },
    ] as KpiCardItem[],
  },
};
