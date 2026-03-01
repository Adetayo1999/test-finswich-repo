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
export const WalletsLayout = lazy(
  () => import("@/components/layouts/WalletsLayout"),
);
export const BillingWalletPage = lazy(
  () => import("@/pages/dashboard/wallets/billing"),
);
export const SettlementWalletPage = lazy(
  () => import("@/pages/dashboard/wallets/settlement"),
);
export const KycWalletPage = lazy(
  () => import("@/pages/dashboard/wallets/kyc"),
);
export const TransactionsLayout = lazy(
  () => import("@/components/layouts/TransactionsLayout"),
);
export const PayinPage = lazy(
  () => import("@/pages/dashboard/transactions/payin"),
);
export const PayoutPage = lazy(
  () => import("@/pages/dashboard/transactions/payout"),
);
export const ResolutionLayout = lazy(
  () => import("@/components/layouts/ResolutionLayout"),
);
export const AllIssuesPage = lazy(
  () => import("@/pages/dashboard/resolution/all-issues"),
);
export const WorkflowPage = lazy(
  () => import("@/pages/dashboard/resolution/workflow"),
);
export const ServicesPage = lazy(
  () => import("@/pages/dashboard/services/index"),
);
export const CustomersPage = lazy(
  () => import("@/pages/dashboard/customers/index"),
);
export const EStoresLayout = lazy(
  () => import("@/components/layouts/EStoresLayout"),
);
export const StoresPage = lazy(
  () => import("@/pages/dashboard/e-stores/stores"),
);
export const CatalogsPage = lazy(
  () => import("@/pages/dashboard/e-stores/catalogs"),
);
export const CategoriesPage = lazy(
  () => import("@/pages/dashboard/e-stores/categories"),
);
export const ProductsPage = lazy(
  () => import("@/pages/dashboard/e-stores/products"),
);
export const OrdersPage = lazy(
  () => import("@/pages/dashboard/e-stores/orders"),
);
export const AppsPage = lazy(() => import("@/pages/dashboard/apps/index"));
export const BillingPage = lazy(
  () => import("@/pages/dashboard/billing/index"),
);
export const SettingsLayout = lazy(
  () => import("@/components/layouts/SettingsLayout"),
);
export const AccountSettingsPage = lazy(
  () => import("@/pages/dashboard/settings/account"),
);
export const LoginSecurityPage = lazy(
  () => import("@/pages/dashboard/settings/login-security"),
);
export const FaqPage = lazy(() => import("@/pages/dashboard/settings/faq"));
export const DeveloperPage = lazy(
  () => import("@/pages/dashboard/settings/developer"),
);
export const ContactSupportPage = lazy(
  () => import("@/pages/dashboard/settings/contact-support"),
);
export const TcPolicyPage = lazy(
  () => import("@/pages/dashboard/settings/tc-policy"),
);
export const AccountControlPage = lazy(
  () => import("@/pages/dashboard/settings/account-control"),
);
