import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  PageComponentDescription,
  PageComponentTitle,
  PageStepButton,
} from "@/components/common/pages-steps-ui";
import { OnboardingScreenComponent } from "@/components/onboarding";
import UploadBusinessDocumentsModal from "@/components/modals/upload-business-documents-modal";
import { useSubmitBusinessCompliance } from "@/hooks/api/useCompliance";
import {
  clearComplianceDraft,
  getComplianceDraft,
  getComplianceDraftMissingFields,
  toSubmitBusinessComplianceRequest,
} from "@/lib/compliance-draft";
import { ROUTES } from "@/routes/paths";

function CompanyDocumentsPage() {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const submitComplianceMutation = useSubmitBusinessCompliance();
  const navigate = useNavigate();

  const handleSubmitCompliance = async () => {
    const draft = getComplianceDraft();
    const missingFields = getComplianceDraftMissingFields(draft);

    if (missingFields.length) {
      toast.error(`Complete missing fields: ${missingFields.slice(0, 3).join(", ")}`);
      return;
    }

    try {
      const response = await submitComplianceMutation.mutateAsync(
        toSubmitBusinessComplianceRequest(draft),
      );

      clearComplianceDraft();
      toast.success(response.message || "Compliance submitted successfully");
      navigate(`${ROUTES.APPS.ROOT}?createApp=true`, { replace: true });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to submit compliance",
      );
    }
  };

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
          <PageStepButton
            variant="light"
            onClick={handleSubmitCompliance}
            disabled={submitComplianceMutation.isPending}
          >
            {submitComplianceMutation.isPending
              ? "Submitting..."
              : "Complete Setup"}
          </PageStepButton>
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
