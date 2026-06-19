import { useForm } from "react-hook-form";
import {
  AuthActionButton,
  AuthInput,
  AuthSplitCard,
  AuthToggle,
} from "@/components/auth/AuthUI";
import { resendVerifyAccountOtp } from "@/api/auth";
import { useLogin } from "@/hooks/api/useLogin";
import { saveAuthSession } from "@/lib/auth-session";
import { clearRegistrationSession } from "@/lib/registration-session";
import {
  isUnverifiedAccountError,
  saveVerificationEmail,
} from "@/lib/verify-account";
import { ROUTES } from "@/routes/paths";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { loginFormRules, type LoginFormValues } from "./login-form";

async function redirectToVerifyOtp(email: string, navigate: ReturnType<typeof useNavigate>) {
  await resendVerifyAccountOtp({ email });
  saveVerificationEmail(email);
  toast.success("A new verification code has been sent to your email");
  navigate(ROUTES.AUTH.VERIFY_OTP, {
    replace: true,
    state: { email },
  });
}

function Login() {
  const navigate = useNavigate();
  const loginMutation = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    const email = data.email.trim();

    loginMutation.mutate(
      {
        email,
        password: data.password,
      },
      {
        onSuccess: (response) => {
          saveAuthSession(response.data);
          clearRegistrationSession();
          toast.success(response.message);

          navigate(ROUTES.APPS.ROOT);
        },
        onError: async (error) => {
          const message =
            error instanceof Error ? error.message : "Login failed";

          if (isUnverifiedAccountError(message)) {
            try {
              await redirectToVerifyOtp(email, navigate);
            } catch (resendError) {
              saveVerificationEmail(email);
              toast.error(
                resendError instanceof Error
                  ? resendError.message
                  : "Failed to resend verification code",
              );
              navigate(ROUTES.AUTH.VERIFY_OTP, {
                replace: true,
                state: { email },
              });
            }
            return;
          }

          toast.error(message);
        },
      },
    );
  };

  return (
    <AuthSplitCard>
      <>
        <AuthToggle
          active="primary"
          primary={{ label: "Login", to: ROUTES.AUTH.LOGIN }}
          secondary={{ label: "I'm a new user", to: ROUTES.AUTH.REGISTER }}
        />
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4 md:mb-6">
            <h1 className="font-medium text-xl md:text-3xl text-[#4F4F4F] mb-1">
              Welcome Back!
            </h1>
            <p className="text-[#969696] text-xs md:text-sm">
              Enter your login details to continue
            </p>
          </div>
          <div className="flex flex-col gap-y-4 md:gap-y-5">
            <AuthInput
              icon="mail"
              label="Email Address"
              placeholder="Your email address"
              type="email"
              autoComplete="email"
              disabled={loginMutation.isPending}
              error={errors.email?.message}
              {...register("email", loginFormRules.email)}
            />
            <AuthInput
              icon="lock"
              label="Password"
              placeholder="Your account password"
              type="password"
              autoComplete="current-password"
              disabled={loginMutation.isPending}
              error={errors.password?.message}
              {...register("password", loginFormRules.password)}
            />
            <div className="mt-4">
              <AuthActionButton loading={loginMutation.isPending}>
                Proceed to login
              </AuthActionButton>
            </div>
            <div>
              <p className="text-xs md:text-sm text-[#ABABBA]">
                Forgot Password?{" "}
                <Link
                  className="font-bold text-[#23232B]"
                  to={ROUTES.AUTH.REQUEST_OTP}
                >
                  Reset
                </Link>
              </p>
            </div>
          </div>
        </form>
      </>
    </AuthSplitCard>
  );
}

export default Login;
