import type { Meta, StoryObj } from "@storybook/react-vite";
import LocalTransferModal from "../components/modals/local-transfer-modal";

const meta: Meta<typeof LocalTransferModal> = {
  title: "Modals/LocalTransferModal",
  component: LocalTransferModal,
};

export default meta;

type Story = StoryObj<typeof LocalTransferModal>;

export const Default: Story = {
  args: {
    onClose: () => {},
    onSendMoney: () => {},
  },
};
