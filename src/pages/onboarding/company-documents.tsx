import {
  PageComponentDescription,
  PageComponentTitle,
  PageStepButton,
} from "@/components/common/pages-steps-ui";
import { OnboardingScreenComponent } from "@/components/onboarding";

function CompanyDocumentsPage() {
  return (
    <OnboardingScreenComponent
      title="Company Documents"
      description="Upload your corporate documents for KYB verification"
      className="flex flex-col justify-between"
    >
      <div className="">
        <PageComponentTitle text="Company Documents" classname="mb-4" />
        <PageComponentDescription
          text="Upload your corporate documents for KYB verification "
          classname="mb-9"
        />
        <PageStepButton variant="light">Upload</PageStepButton>
      </div>

      <div className="">
        <PageStepButton variant="light">Complete Setup</PageStepButton>
      </div>
    </OnboardingScreenComponent>
  );
}

export default CompanyDocumentsPage;
