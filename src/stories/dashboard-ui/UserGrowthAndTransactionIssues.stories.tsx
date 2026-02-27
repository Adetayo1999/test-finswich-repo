import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserGrowthAndTransactionIssues } from "../../components/dashboard-ui";

const meta: Meta<typeof UserGrowthAndTransactionIssues> = {
  title: "DashboardUI/UserGrowthAndTransactionIssues",
  component: UserGrowthAndTransactionIssues,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    background: "light",
  },
};

export default meta;

type Story = StoryObj<typeof UserGrowthAndTransactionIssues>;

export const Default: Story = {};
