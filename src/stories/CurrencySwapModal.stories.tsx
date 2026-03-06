import type { Meta, StoryObj } from "@storybook/react-vite";
import CurrencySwapModal from "../components/modals/currency-swap-modal";

const meta: Meta<typeof CurrencySwapModal> = {
  title: "Modals/CurrencySwapModal",
  component: CurrencySwapModal,
};

export default meta;

type Story = StoryObj<typeof CurrencySwapModal>;

export const Default: Story = {
  args: {
    onClose: () => {},
  },
};
