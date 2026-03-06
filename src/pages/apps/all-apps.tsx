import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AppsTable } from "@/components/apps/AppsUI";
import { AppsWrapper } from "@/components/layouts/AppsLayout";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import CreateAppModal from "@/components/modals/create-app-modal";
import { ConfigureAppModal } from "@/components/modals/configure-app";

const AllAppsPage = () => {
  const [showCreateApp, setShowCreateApp] = useState(false);
  const [showConfigureApp, setShowConfigureApp] = useState(false);

  return (
    <>
      <AppsWrapper
        title="Application Manager"
        description="Create and manage your app configurations here"
        button={
          <PrimaryButton
            className="px-14!"
            onClick={() => setShowCreateApp(true)}
          >
            Create App
          </PrimaryButton>
        }
      >
        <AppsTable onConfigure={() => setShowConfigureApp(true)} />
      </AppsWrapper>

      <AnimatePresence>
        {showCreateApp && (
          <CreateAppModal onClose={() => setShowCreateApp(false)} />
        )}
        {showConfigureApp && (
          <ConfigureAppModal onClose={() => setShowConfigureApp(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default AllAppsPage;
