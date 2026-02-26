import type { Meta, StoryObj } from "@storybook/react-vite";

import { AppsTable } from "./Table";

const meta = {
  title: "CustomTable",
  component: AppsTable,
} satisfies Meta<typeof AppsTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomTable: Story = {};
