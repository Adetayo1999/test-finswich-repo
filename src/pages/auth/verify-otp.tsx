import { useForm } from "react-hook-form";
import { AuthInput, AuthSplitCard } from "@/components/auth/AuthUI";
import { PageStepButton } from "@/components/common/pages-steps-ui";
import {
  useResendVerifyAccountOtp,
  useVerifyAccount,
} from "@/hooks/api/useVerifyAccount";
import {
  clearRegistrationSession,
  getRegistrationSession,
} from "@/lib/registration-session";
import {
  clearVerificationEmail,
  getVerificationEmail,
  resolveVerificationEmail,
  saveVerificationEmail,
} from "@/lib/verify-account";
import { ROUTES } from "@/routes/paths";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { verifyOtpFormRules, type VerifyOtpFormValues } from "./verify-otp-form";

type VerifyOtpLocationState = {
  email?: string;
};

function VerifyOTP() {
  const navigate = useNavigate();
  const location = useLocation();
  const navState = (location.state ?? {}) as VerifyOtpLocationState;
  const registrationSession = getRegistrationSession();
  const email = resolveVerificationEmail(
    navState.email,
    registrationSession?.email,
    getVerificationEmail(),
  );

  const verifyMutation = useVerifyAccount();
  const resendMutation = useResendVerifyAccountOtp();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyOtpFormValues>({
    mode: "onTouched",
    defaultValues: { token: "" },
  });

  const isPending = verifyMutation.isPending || resendMutation.isPending;

  const onSubmit = (data: VerifyOtpFormValues) => {
    if (!email) {
      toast.error("Email not found. Please register or log in again.");
      return;
    }

    verifyMutation.mutate(
      {
        email,
        token: data.token.trim(),
      },
      {
        onSuccess: (response) => {
          clearRegistrationSession();
          clearVerificationEmail();
          toast.success(response.message || "Account verified successfully");
          navigate(ROUTES.AUTH.LOGIN, { replace: true });
        },
        onError: (error) => {
          toast.error(
            error instanceof Error ? error.message : "Verification failed",
          );
        },
      },
    );
  };

  const handleResend = () => {
    if (!email) {
      toast.error("Email not found. Please register or log in again.");
      return;
    }

    resendMutation.mutate(
      { email },
      {
        onSuccess: (response) => {
          saveVerificationEmail(email);
          toast.success(
            response.message || "A new verification code has been sent",
          );
        },
        onError: (error) => {
          toast.error(
            error instanceof Error
              ? error.message
              : "Failed to resend verification code",
          );
        },
      },
    );
  };

  return (
    <AuthSplitCard>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex min-h-full flex-col justify-between"
      >
        <div>
          <div className="mb-4 md:mb-6">
            <h1 className="mb-1 text-xl font-medium text-[#4F4F4F] md:text-3xl">
              Verify your email
            </h1>
            <p className="text-xs text-[#969696] md:text-sm">
              {email
                ? `Enter the verification code sent to ${email}`
                : "Enter the verification code sent to your email"}
            </p>
          </div>

          <AuthInput
            icon="otp"
            label="Enter OTP Code"
            placeholder="Enter the otp code"
            autoComplete="one-time-code"
            inputMode="numeric"
            disabled={isPending}
            error={errors.token?.message}
            {...register("token", verifyOtpFormRules.token)}
          />

          <p className="mt-3 text-xs text-[#101828]">
            Didn&apos;t get OTP?{" "}
            <button
              type="button"
              className="font-bold disabled:cursor-not-allowed disabled:opacity-60"
              onClick={handleResend}
              disabled={isPending || !email}
            >
              {resendMutation.isPending ? "Sending..." : "Resend"}
            </button>
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <PageStepButton
            type="submit"
            variant="light"
            disabled={isPending}
          >
            {verifyMutation.isPending ? "Verifying..." : "Verify OTP"}
          </PageStepButton>
          <p className="text-xs text-[#ABABBA] md:text-sm">
            Already verified?{" "}
            <Link className="font-bold text-[#23232B]" to={ROUTES.AUTH.LOGIN}>
              Proceed to login
            </Link>
          </p>
        </div>
      </form>
    </AuthSplitCard>
  );
}

export default VerifyOTP;
