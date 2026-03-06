import type { Meta, StoryObj } from "@storybook/react-vite";
import CreateAppModal from "../components/modals/create-app-modal";

const meta: Meta<typeof CreateAppModal> = {
  title: "Modals/CreateAppModal",
  component: CreateAppModal,
};

export default meta;

type Story = StoryObj<typeof CreateAppModal>;

export const Default: Story = {
  args: {},
};

