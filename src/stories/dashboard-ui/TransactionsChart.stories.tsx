import type { Meta, StoryObj } from "@storybook/react-vite";
import { TransactionsChart } from "../../components/dashboard-ui";

const meta: Meta<typeof TransactionsChart> = {
  title: "DashboardUI/TransactionsChart",
  component: TransactionsChart,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    background: "light",
  },
};

export default meta;

type Story = StoryObj<typeof TransactionsChart>;

export const Default: Story = {};
