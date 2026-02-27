import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserGrowth } from "../../components/dashboard-ui";

const meta: Meta<typeof UserGrowth> = {
  title: "DashboardUI/UserGrowth",
  component: UserGrowth,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    background: "light",
  },
};

export default meta;

type Story = StoryObj<typeof UserGrowth>;

export const Default: Story = {};
