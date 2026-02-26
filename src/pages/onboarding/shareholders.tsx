import {
  PageComponentDescription,
  PageComponentTitle,
  PageStepButton,
} from "@/components/common/pages-steps-ui";
import { OnboardingScreenComponent } from "@/components/onboarding";

function ShareholdersPage() {
  return (
    <OnboardingScreenComponent
      title="Shareholders"
      description="Add company shareholders, directors and their share quota"
      className="flex flex-col justify-between"
    >
      <div className="">
        <PageComponentTitle text="Shareholders" classname="mb-4" />
        <PageComponentDescription
          text="Add company shareholders, directors and their share qouta"
          classname="mb-9"
        />
        <PageStepButton variant="dark">Update Shareholders</PageStepButton>
      </div>

      <div className="">
        <PageStepButton variant="light">Next Step</PageStepButton>
      </div>
    </OnboardingScreenComponent>
  );
}

export default ShareholdersPage;
