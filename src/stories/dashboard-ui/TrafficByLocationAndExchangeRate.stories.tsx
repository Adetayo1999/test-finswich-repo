import type { Meta, StoryObj } from "@storybook/react-vite";
import { TrafficByLocationAndExchangeRate } from "../../components/dashboard-ui";

const meta: Meta<typeof TrafficByLocationAndExchangeRate> = {
  title: "DashboardUI/TrafficByLocationAndExchangeRate",
  component: TrafficByLocationAndExchangeRate,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    background: "light",
  },
};

export default meta;

type Story = StoryObj<typeof TrafficByLocationAndExchangeRate>;

export const Default: Story = {};
