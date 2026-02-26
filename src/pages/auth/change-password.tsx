import { AuthScreenComponent } from "@/components/auth/auth-steps-screen";
import { AuthInput } from "@/components/auth/AuthUI";
import {
  PageComponentDescription,
  PageComponentTitle,
  PageStepButton,
} from "@/components/common/pages-steps-ui";

function ChangePassword() {
  return (
    <AuthScreenComponent
      title="Password Reset"
      description="Reset your password if you can’t remember or you think your account password is compromised"
      className="flex flex-col justify-between"
    >
      <div className="">
        <PageComponentTitle text="Set your new Password" classname="mb-4" />
        <PageComponentDescription
          text="Enter a secure password you will remember"
          classname="mb-9"
        />

        <form className="flex flex-col gap-y-5">
          <AuthInput
            icon="lock"
            label="New Password"
            placeholder="**************"
            className="w-md"
            type="password"
          />
          <AuthInput
            icon="lock"
            label="Confirm New Password"
            placeholder="**************"
            className="w-md"
            type="password"
          />
        </form>
      </div>

      <div className="">
        <PageStepButton variant="light">Reset Password</PageStepButton>
      </div>
    </AuthScreenComponent>
  );
}

export default ChangePassword;
