import {
  PageComponentDescription,
  PageComponentTitle,
  PageStepButton,
} from "@/components/common/pages-steps-ui";
import { OnboardingScreenComponent } from "@/components/onboarding";

function CompanyProfilePage() {
  return (
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
        <PageStepButton variant="dark">Update Company Profile</PageStepButton>
      </div>

      <div className="">
        <PageStepButton variant="light">Next Step</PageStepButton>
      </div>
    </OnboardingScreenComponent>
  );
}

export default CompanyProfilePage;
