import type { Meta, StoryObj } from "@storybook/react-vite";
import { PrimaryButton } from "../components/ui/PrimaryButton";

const meta: Meta<typeof PrimaryButton> = {
  title: "UI/PrimaryButton",
  component: PrimaryButton,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
    },
    fullWidth: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    loadingText: {
      control: "text",
    },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof PrimaryButton>;

export const Default: Story = {
  args: {
    children: "Create App",
  },
};

export const FullWidth: Story = {
  args: {
    children: "Create App",
    fullWidth: true,
  },
};

export const Loading: Story = {
  args: {
    children: "Create App",
    loading: true,
  },
};
