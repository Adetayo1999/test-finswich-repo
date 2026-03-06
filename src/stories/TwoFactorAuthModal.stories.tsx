import type { Meta, StoryObj } from "@storybook/react-vite";
import TwoFactorAuthModal from "../components/modals/two-factor-auth-modal";

const meta: Meta<typeof TwoFactorAuthModal> = {
  title: "Modals/TwoFactorAuthModal",
  component: TwoFactorAuthModal,
};

export default meta;

type Story = StoryObj<typeof TwoFactorAuthModal>;

export const Default: Story = {
  args: {
    onClose: () => {},
    onVerify: (code) => console.log("Verified with code:", code),
    maskedEmail: "h****r@gmail.com",
  },
};
