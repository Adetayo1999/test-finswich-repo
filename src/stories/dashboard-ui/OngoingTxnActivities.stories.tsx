import type { Meta, StoryObj } from "@storybook/react-vite";
import { OngoingTxnActivities, type TxnActivityItem } from "../../components/dashboard-ui";

const meta: Meta<typeof OngoingTxnActivities> = {
  title: "DashboardUI/OngoingTxnActivities",
  component: OngoingTxnActivities,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    background: "light",
  },
};

export default meta;

type Story = StoryObj<typeof OngoingTxnActivities>;

export const Default: Story = {};

export const CustomItems: Story = {
  args: {
    items: [
      { id: "1", initials: "AB", description: "Alice sent $50", timestamp: "Just now", avatarBg: "bg-[#86EFAC]" },
      { id: "2", initials: "CD", description: "Bob received $20", timestamp: "5 min ago", avatarBg: "bg-[#7DD3FC]" },
    ] as TxnActivityItem[],
  },
};
