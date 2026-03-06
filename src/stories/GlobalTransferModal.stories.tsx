import type { Meta, StoryObj } from "@storybook/react-vite";
import GlobalTransferModal from "../components/modals/global-transfer-modal";

const meta: Meta<typeof GlobalTransferModal> = {
  title: "Modals/GlobalTransferModal",
  component: GlobalTransferModal,
};

export default meta;

type Story = StoryObj<typeof GlobalTransferModal>;

export const Default: Story = {
  args: {
    onClose: () => {},
    onSendMoney: () => {},
  },
};
