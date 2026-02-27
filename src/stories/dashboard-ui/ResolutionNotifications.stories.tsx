import type { Meta, StoryObj } from "@storybook/react-vite";
import { ResolutionNotifications, type ResolutionNotificationItem } from "../../components/dashboard-ui";

const meta: Meta<typeof ResolutionNotifications> = {
  title: "DashboardUI/ResolutionNotifications",
  component: ResolutionNotifications,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    background: "light",
  },
};

export default meta;

type Story = StoryObj<typeof ResolutionNotifications>;

export const Default: Story = {};

export const CustomItems: Story = {
  args: {
    items: [
      { id: "1", type: "bug", message: "Payment failed on checkout", timestamp: "2 min ago" },
      { id: "2", type: "user", message: "New user registered", timestamp: "1 hour ago" },
    ] as ResolutionNotificationItem[],
  },
};
