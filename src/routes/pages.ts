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
export const ChangePassword = lazy(
  () => import("@/pages/auth/change-password"),
);

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

// DASHBOARD
export const DashboardLayout = lazy(
  () => import("@/components/layouts/DashboardLayout"),
);
export const DashboardOverviewPage = lazy(
  () => import("@/pages/dashboard/overview/index"),
);
export const WalletsPage = lazy(
  () => import("@/pages/dashboard/wallets/index"),
);
export const TransactionsPage = lazy(
  () => import("@/pages/dashboard/transactions/index"),
);
export const ResolutionPage = lazy(
  () => import("@/pages/dashboard/resolution/index"),
);
export const ServicesPage = lazy(
  () => import("@/pages/dashboard/services/index"),
);
export const CustomersPage = lazy(
  () => import("@/pages/dashboard/customers/index"),
);
export const EStoresPage = lazy(
  () => import("@/pages/dashboard/e-stores/index"),
);
export const AppsPage = lazy(() => import("@/pages/dashboard/apps/index"));
export const BillingPage = lazy(
  () => import("@/pages/dashboard/billing/index"),
);
export const SettingsPage = lazy(
  () => import("@/pages/dashboard/settings/index"),
);
