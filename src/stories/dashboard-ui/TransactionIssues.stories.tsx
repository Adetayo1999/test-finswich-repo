import type { Meta, StoryObj } from "@storybook/react-vite";
import { TransactionIssues } from "../../components/dashboard-ui";

const meta: Meta<typeof TransactionIssues> = {
  title: "DashboardUI/TransactionIssues",
  component: TransactionIssues,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    background: "light",
  },
};

export default meta;

type Story = StoryObj<typeof TransactionIssues>;

export const Default: Story = {};
