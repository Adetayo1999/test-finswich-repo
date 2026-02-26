import { AuthInput } from "@/components/auth/AuthUI";
import {
  PageComponentDescription,
  PageComponentTitle,
  PageStepButton,
} from "@/components/common/pages-steps-ui";
import { OnboardingScreenComponent } from "@/components/onboarding";

function VerifyAccountPage() {
  return (
    <OnboardingScreenComponent
      title="Verify your Account"
      description="Check your email for OTP to verify your account"
      className="flex flex-col justify-between"
    >
      <div className="">
        <PageComponentTitle text="Verify your Account" classname="mb-4" />
        <PageComponentDescription
          text="Check your email for OTP to verify your account"
          classname="mb-9"
        />

        <form>
          <AuthInput
            icon="otp"
            label="Email OTP"
            placeholder="Enter OTP to verify your account"
            className="w-md"
          />
          <p className="text-xs text-[#101828] mt-3">
            Didn’t Get OTP? <button className="font-bold">Resend</button>
          </p>
        </form>
      </div>

      <div className="">
        <PageStepButton variant="light">Next Step</PageStepButton>
      </div>
    </OnboardingScreenComponent>
  );
}

export default VerifyAccountPage;
