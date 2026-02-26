import type { Meta, StoryObj } from "@storybook/react";
import InviteAdminModal from "../components/modals/invite-admin-modal";

const meta: Meta<typeof InviteAdminModal> = {
  title: "Modals/InviteAdminModal",
  component: InviteAdminModal,
};

export default meta;

type Story = StoryObj<typeof InviteAdminModal>;

export const Default: Story = {
  args: {},
};

