import {
  AuthActionButton,
  AuthInput,
  AuthSplitCard,
  AuthToggle,
} from "@/components/auth/AuthUI";
import { ROUTES } from "@/routes/paths";
import { Link } from "react-router-dom";

function Register() {
  return (
    <AuthSplitCard>
      <>
        <AuthToggle
          active="secondary"
          primary={{ label: "I’ve an account", to: ROUTES.AUTH.LOGIN }}
          secondary={{ label: "Register", to: ROUTES.AUTH.REGISTER }}
        />
        <form>
          <div className="mb-4 md:mb-6">
            <h1 className="font-medium text-xl md:text-3xl text-[#4F4F4F] mb-1">
              Let&apos;s get started!
            </h1>
            <p className="text-[#969696] text-xs md:text-sm">
              Join the network of businesses powered by Finswich
            </p>
          </div>
          <div className="flex flex-col gap-y-4 md:gap-y-5">
            <AuthInput
              icon="company"
              label="Company Name"
              placeholder="Registered corporate name"
              endAdornment={
                <span className="flex items-center text-[#6f7385]">
                  <span className="mr-3 h-6 w-px bg-[#d8dbe5]" />
                  <span className="text-xs font-semibold leading-none">AG</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="ml-2"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 10l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              }
            />
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
              <AuthActionButton>Create an account</AuthActionButton>
            </div>
            <div>
              <p className="text-xs md:text-sm text-[#ABABBA]">
                Already have an account?{" "}
                <Link className="font-bold text-[#23232B]" to={ROUTES.AUTH.LOGIN}>
                  Proceed to login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </>
    </AuthSplitCard>
  );
}

export default Register;
