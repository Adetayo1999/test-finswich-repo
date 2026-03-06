import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AppsAdminTable } from "@/components/apps/AppsUI";
import InviteAdminModal from "@/components/modals/invite-admin-modal";
import { AppsWrapper } from "@/components/layouts/AppsLayout";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const AppAdminPage = () => {
  const [showInviteAdminModal, setShowInviteAdminModal] = useState(false);

  return (
    <>
      <AppsWrapper
        title="Application Manager"
        description="Create and manage your app configurations here"
        button={
          <PrimaryButton
            className="px-14!"
            onClick={() => setShowInviteAdminModal(true)}
          >
            Create Admin
          </PrimaryButton>
        }
      >
        <AppsAdminTable />
      </AppsWrapper>

      <AnimatePresence>
        {showInviteAdminModal && (
          <InviteAdminModal onClose={() => setShowInviteAdminModal(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default AppAdminPage;
