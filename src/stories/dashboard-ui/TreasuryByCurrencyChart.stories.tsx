import type { Meta, StoryObj } from "@storybook/react-vite";
import { TreasuryByCurrencyChart } from "../../components/dashboard-ui";

const meta: Meta<typeof TreasuryByCurrencyChart> = {
  title: "DashboardUI/TreasuryByCurrencyChart",
  component: TreasuryByCurrencyChart,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    background: "light",
  },
};

export default meta;

type Story = StoryObj<typeof TreasuryByCurrencyChart>;

export const Default: Story = {};
