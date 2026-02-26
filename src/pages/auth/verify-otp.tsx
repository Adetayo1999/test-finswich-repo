import { AuthScreenComponent } from "@/components/auth/auth-steps-screen";
import { AuthInput } from "@/components/auth/AuthUI";
import {
  PageComponentDescription,
  PageComponentTitle,
  PageStepButton,
} from "@/components/common/pages-steps-ui";

function VerifyOTP() {
  return (
    <AuthScreenComponent
      title="Password Reset"
      description="Reset your password if you can’t remember or you think your account password is compromised"
      className="flex flex-col justify-between"
    >
      <div className="">
        <PageComponentTitle text="Enter OTP" classname="mb-4" />
        <PageComponentDescription
          text="Check your email, we have sent you an OTP"
          classname="mb-9"
        />

        <form>
          <AuthInput
            icon="otp"
            label="Enter OTP Code"
            placeholder="Enter the otp code"
            className="w-md"
          />
          <p className="text-xs text-[#101828] mt-3">
            Didn’t Get OTP? <button className="font-bold">Resend</button>
          </p>
        </form>
      </div>

      <div className="">
        <PageStepButton variant="light">Verify OTP</PageStepButton>
      </div>
    </AuthScreenComponent>
  );
}

export default VerifyOTP;
