import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  PageComponentDescription,
  PageComponentTitle,
  PageStepButton,
} from "@/components/common/pages-steps-ui";
import { OnboardingScreenComponent } from "@/components/onboarding";
import CompanyProfileModal from "@/components/modals/company-profile-modal";

function CompanyProfilePage() {
  const [showCompanyProfileModal, setShowCompanyProfileModal] = useState(false);

  return (
    <>
      <OnboardingScreenComponent
        title="Company Profile"
        description="Give us some information about your business to set your account up"
        className="flex flex-col justify-between"
      >
        <div className="">
          <PageComponentTitle text="Company Profile" classname="mb-4" />
          <PageComponentDescription
            text="Give us some information about your business to set your account up"
            classname="mb-9"
          />
          <PageStepButton
            variant="dark"
            onClick={() => setShowCompanyProfileModal(true)}
          >
            Update Company Profile
          </PageStepButton>
        </div>

        <div className="">
          <PageStepButton variant="light">Next Step</PageStepButton>
        </div>
      </OnboardingScreenComponent>

      <AnimatePresence>
        {showCompanyProfileModal && (
          <CompanyProfileModal
            onClose={() => setShowCompanyProfileModal(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default CompanyProfilePage;
