import type { Meta, StoryObj } from "@storybook/react-vite";
import { NewUsers, type NewUserItem } from "../../components/dashboard-ui";

const meta: Meta<typeof NewUsers> = {
  title: "DashboardUI/NewUsers",
  component: NewUsers,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    background: "light",
  },
  argTypes: {
    period: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof NewUsers>;

export const Default: Story = {};

export const CustomPeriod: Story = {
  args: {
    period: "last 7 days",
  },
};

export const CustomItems: Story = {
  args: {
    items: [
      { id: "1", name: "Jane Doe", initials: "JD" },
      { id: "2", name: "John Smith", initials: "JS" },
    ] as NewUserItem[],
    period: "last 24 hours",
  },
};
