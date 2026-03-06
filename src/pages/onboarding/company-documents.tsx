import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  PageComponentDescription,
  PageComponentTitle,
  PageStepButton,
} from "@/components/common/pages-steps-ui";
import { OnboardingScreenComponent } from "@/components/onboarding";
import UploadBusinessDocumentsModal from "@/components/modals/upload-business-documents-modal";

function CompanyDocumentsPage() {
  const [showUploadModal, setShowUploadModal] = useState(false);

  return (
    <>
      <OnboardingScreenComponent
        title="Company Documents"
        description="Upload your corporate documents for KYB verification"
        className="flex flex-col justify-between"
      >
        <div className="">
          <PageComponentTitle text="Company Documents" classname="mb-4" />
          <PageComponentDescription
            text="Upload your corporate documents for KYB verification"
            classname="mb-9"
          />
          <PageStepButton
            variant="light"
            onClick={() => setShowUploadModal(true)}
          >
            Upload
          </PageStepButton>
        </div>

        <div className="">
          <PageStepButton variant="light">Complete Setup</PageStepButton>
        </div>
      </OnboardingScreenComponent>

      <AnimatePresence>
        {showUploadModal && (
          <UploadBusinessDocumentsModal
            onClose={() => setShowUploadModal(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default CompanyDocumentsPage;
