import {
  AuthActionButton,
  AuthInput,
  AuthSplitCard,
  AuthToggle,
} from "@/components/auth/AuthUI";
import { ROUTES } from "@/routes/paths";
import { Link } from "react-router-dom";

function Login() {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <AuthSplitCard>
      <>
        <AuthToggle
          active="primary"
          primary={{ label: "Login", to: ROUTES.AUTH.LOGIN }}
          secondary={{ label: "I'm a new user", to: ROUTES.AUTH.REGISTER }}
        />
        <form onSubmit={handleSubmit}>
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
            />
            <AuthInput
              icon="lock"
              label="Password"
              placeholder="Your account password"
              type="password"
            />
            <div className="mt-4">
              <AuthActionButton>Proceed to login</AuthActionButton>
            </div>
            <div>
              <p className="text-xs md:text-sm text-[#ABABBA]">
                Forgot Password?{" "}
                <Link className="font-bold text-[#23232B]" to="#">
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
