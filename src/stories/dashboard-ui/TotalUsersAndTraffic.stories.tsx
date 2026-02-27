import type { Meta, StoryObj } from "@storybook/react-vite";
import { TotalUsersAndTraffic } from "../../components/dashboard-ui";

const meta: Meta<typeof TotalUsersAndTraffic> = {
  title: "DashboardUI/TotalUsersAndTraffic",
  component: TotalUsersAndTraffic,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    background: "light",
  },
};

export default meta;

type Story = StoryObj<typeof TotalUsersAndTraffic>;

export const Default: Story = {};
