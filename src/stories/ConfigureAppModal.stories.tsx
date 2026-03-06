import type { Meta, StoryObj } from "@storybook/react-vite";
import { ConfigureAppModal } from "../components/modals/configure-app";

const meta: Meta<typeof ConfigureAppModal> = {
  title: "Modals/ConfigureApp",
  component: ConfigureAppModal,
};

export default meta;

type Story = StoryObj<typeof ConfigureAppModal>;

export const Default: Story = {
  args: {},
};
