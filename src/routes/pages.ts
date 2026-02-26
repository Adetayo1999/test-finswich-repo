import { lazy } from "react";

// AUTH
export const AuthLayout = lazy(() => import("@/components/layouts/AuthLayout"));
export const OnboardingLayout = lazy(
  () => import("@/components/layouts/OnboardingLayout"),
);
export const Login = lazy(() => import("@/pages/auth/login"));
export const Register = lazy(() => import("@/pages/auth/register"));
export const RequestOTP = lazy(() => import("@/pages/auth/request-otp"));
export const VerifyOTP = lazy(() => import("@/pages/auth/verify-otp"));
export const ChangePassword = lazy(() => import("@/pages/auth/change-password"));

// ONBOARDING
export const LicenseStatusPage = lazy(
  () => import("@/pages/onboarding/license-status"),
);
export const VerifyAccountPage = lazy(
  () => import("@/pages/onboarding/verify-account"),
);
export const SignContractPage = lazy(
  () => import("@/pages/onboarding/sign-contract"),
);
export const CompanyProfilePage = lazy(
  () => import("@/pages/onboarding/company-profile"),
);
export const ShareholdersPage = lazy(
  () => import("@/pages/onboarding/shareholders"),
);
export const CompanyDocumentsPage = lazy(
  () => import("@/pages/onboarding/company-documents"),
);
