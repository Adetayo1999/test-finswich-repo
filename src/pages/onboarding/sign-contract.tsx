import {
  PageComponentDescription,
  PageComponentTitle,
  PageStepButton,
} from "@/components/common/pages-steps-ui";
import { OnboardingScreenComponent } from "@/components/onboarding";

function SignContractPage() {
  return (
    <OnboardingScreenComponent
      title="Sign Contract"
      description="Kindly Agree to our terms, provide information below to perform your KYC before you can access the full capabilities of FinSwich."
      className="flex flex-col justify-between"
    >
      <div className="">
        <PageComponentTitle text="Sign Contract" classname="mb-4" />
        <PageComponentDescription
          text="Kindly Agree to our terms, provide information below to perform your KYC before you can access the full capabilities of FinSwich.
"
          classname="mb-9"
        />
        <PageStepButton variant="dark">
          Continue to Sign Contract
        </PageStepButton>
      </div>

      <div className="">
        <PageStepButton variant="light">Next Step</PageStepButton>
      </div>
    </OnboardingScreenComponent>
  );
}

export default SignContractPage;
