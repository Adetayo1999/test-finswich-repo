import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  PageComponentDescription,
  PageComponentTitle,
  PageStepButton,
} from "@/components/common/pages-steps-ui";
import { OnboardingScreenComponent } from "@/components/onboarding";
import ShareholdersModal from "@/components/modals/shareholders-modal";
import { ROUTES } from "@/routes/paths";

function ShareholdersPage() {
  const [showShareholdersModal, setShowShareholdersModal] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <OnboardingScreenComponent
        title="Shareholders"
        description="Add company shareholders, directors and their share quota"
        className="flex flex-col justify-between"
      >
        <div className="">
          <PageComponentTitle text="Shareholders" classname="mb-4" />
          <PageComponentDescription
            text="Add company shareholders, directors and their share quota"
            classname="mb-9"
          />
          <PageStepButton
            variant="dark"
            onClick={() => setShowShareholdersModal(true)}
          >
            Update Shareholders
          </PageStepButton>
        </div>

        <div className="">
          <PageStepButton
            variant="light"
            onClick={() => navigate(ROUTES.ONBOARDING.COMPANY_DOCUMENTS)}
          >
            Next Step
          </PageStepButton>
        </div>
      </OnboardingScreenComponent>

      <AnimatePresence>
        {showShareholdersModal && (
          <ShareholdersModal
            onClose={() => setShowShareholdersModal(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default ShareholdersPage;
