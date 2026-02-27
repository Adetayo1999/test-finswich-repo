import type { Meta, StoryObj } from "@storybook/react-vite";
import { RevenueByLocation, type RevenueLocationItem } from "../../components/dashboard-ui";

const meta: Meta<typeof RevenueByLocation> = {
  title: "DashboardUI/RevenueByLocation",
  component: RevenueByLocation,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    background: "light",
  },
};

export default meta;

type Story = StoryObj<typeof RevenueByLocation>;

export const Default: Story = {};

export const CustomItems: Story = {
  args: {
    items: [
      { location: "London", revenue: 85 },
      { location: "Tokyo", revenue: 52 },
      { location: "Berlin", revenue: 41 },
    ] as RevenueLocationItem[],
  },
};
