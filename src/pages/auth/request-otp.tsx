import { AuthScreenComponent } from "@/components/auth/auth-steps-screen";
import { AuthInput } from "@/components/auth/AuthUI";
import {
  PageComponentDescription,
  PageComponentTitle,
  PageStepButton,
} from "@/components/common/pages-steps-ui";

function RequestOTP() {
  return (
    <AuthScreenComponent
      title="Verify it’s you"
      description="Reset your password if you can’t remember or you think your account password is compromised"
      className="flex flex-col justify-between"
    >
      <div className="">
        <PageComponentTitle text="Verify account ownership" classname="mb-4" />
        <PageComponentDescription
          text="Enter your email, verify OTP to know that you own the account"
          classname="mb-9"
        />

        <form>
          <AuthInput
            icon="mail"
            label="Enter Email"
            placeholder="Enter your account email"
            className="w-md"
          />
        </form>
      </div>

      <div className="">
        <PageStepButton variant="light">Request OTP</PageStepButton>
      </div>
    </AuthScreenComponent>
  );
}

export default RequestOTP;
