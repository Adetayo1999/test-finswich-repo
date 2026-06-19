import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import type { MerchantApp } from "@/api/merchants";
import { AppsTable } from "@/components/apps/AppsUI";
import { AppsWrapper } from "@/components/layouts/AppsLayout";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import CreateAppModal from "@/components/modals/create-app-modal";
import { ConfigureAppModal } from "@/components/modals/configure-app";
import { DeleteAppModal } from "@/components/modals/delete-app-modal";
import { useCurrentUser } from "@/hooks/api/useCurrentUser";
import {
  useDeleteMerchantApp,
  useMerchantApps,
} from "@/hooks/api/useMerchantApps";

const AllAppsPage = () => {
  const [showCreateApp, setShowCreateApp] = useState(false);
  const [showConfigureApp, setShowConfigureApp] = useState(false);
  const [appToConfigure, setAppToConfigure] = useState<MerchantApp | null>(
    null,
  );
  const [appToDelete, setAppToDelete] = useState<MerchantApp | null>(null);

  const {
    data: apps = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useMerchantApps();
  const { data: currentUser } = useCurrentUser();
  const deleteApp = useDeleteMerchantApp();

  const handleConfigure = (app: MerchantApp) => {
    setAppToConfigure(app);
    setShowConfigureApp(true);
  };

  const handleCloseConfigure = () => {
    setShowConfigureApp(false);
    setAppToConfigure(null);
  };

  const handleConfirmDelete = () => {
    if (!appToDelete) return;

    deleteApp.mutate(appToDelete.id, {
      onSuccess: (response) => {
        toast.success(response.message || "App deleted successfully");
        setAppToDelete(null);
      },
      onError: (err) => {
        toast.error(
          err instanceof Error ? err.message : "Failed to delete app",
        );
      },
    });
  };

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
        <AppsTable
          apps={apps}
          isLoading={isLoading}
          isError={isError}
          errorMessage={
            error instanceof Error ? error.message : undefined
          }
          onRetry={() => refetch()}
          superAdminEmail={currentUser?.email}
          deletingAppId={
            deleteApp.isPending ? deleteApp.variables : undefined
          }
          onConfigure={handleConfigure}
          onDelete={setAppToDelete}
        />
      </AppsWrapper>

      <AnimatePresence>
        {showCreateApp && (
          <CreateAppModal onClose={() => setShowCreateApp(false)} />
        )}
        {showConfigureApp && (
          <ConfigureAppModal
            app={appToConfigure}
            onClose={handleCloseConfigure}
          />
        )}
        {appToDelete && (
          <DeleteAppModal
            appName={appToDelete.name}
            isDeleting={deleteApp.isPending}
            onClose={() => setAppToDelete(null)}
            onConfirm={handleConfirmDelete}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default AllAppsPage;
