import { createBrowserRouter, Navigate } from "react-router-dom";
import { ROUTES } from "./paths";
import SuspenseWrapper from "@/components/common/SuspenseWrapper";
import * as pages from "./pages";

const getElement = (
  Page: React.LazyExoticComponent<() => React.JSX.Element>,
) => {
  return (
    <SuspenseWrapper>
      <Page />
    </SuspenseWrapper>
  );
};

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Navigate to={ROUTES.DASHBOARD.OVERVIEW.ROOT} replace />,
  },
  {
    path: ROUTES.AUTH.ROOT,
    element: getElement(pages.AuthLayout),
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.AUTH.LOGIN} replace />,
      },
      {
        path: "login",
        element: getElement(pages.Login),
      },
      {
        path: "register",
        element: getElement(pages.Register),
      },
      {
        path: "request-otp",
        element: getElement(pages.RequestOTP),
      },
      {
        path: "verify-otp",
        element: getElement(pages.VerifyOTP),
      },
      {
        path: "change-password",
        element: getElement(pages.ChangePassword),
      },
    ],
  },
  {
    path: ROUTES.ONBOARDING.ROOT,
    element: getElement(pages.OnboardingLayout),
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.ONBOARDING.LICENSE_STATUS} replace />,
      },
      {
        path: "license-status",
        element: getElement(pages.LicenseStatusPage),
      },
      {
        path: "verify-account",
        element: getElement(pages.VerifyAccountPage),
      },
      {
        path: "sign-contract",
        element: getElement(pages.SignContractPage),
      },
      {
        path: "company-profile",
        element: getElement(pages.CompanyProfilePage),
      },
      {
        path: "shareholders",
        element: getElement(pages.ShareholdersPage),
      },
      {
        path: "company-documents",
        element: getElement(pages.CompanyDocumentsPage),
      },
    ],
  },
  {
    path: ROUTES.DASHBOARD.ROOT,
    element: getElement(pages.DashboardLayout),
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.DASHBOARD.OVERVIEW.ROOT} replace />,
      },
      {
        path: "overview",
        element: getElement(pages.DashboardOverviewPage),
      },
      {
        path: "wallets",
        element: getElement(pages.WalletsLayout),
        children: [
          {
            index: true,
            element: getElement(pages.BillingWalletPage),
          },
          {
            path: "settlement",
            element: getElement(pages.SettlementWalletPage),
          },
          {
            path: "kyc",
            element: getElement(pages.KycWalletPage),
          },
        ],
      },
      {
        path: "transactions",
        element: getElement(pages.TransactionsLayout),
        children: [
          {
            index: true,
            element: getElement(pages.PayinPage),
          },
          {
            path: "payout",
            element: getElement(pages.PayoutPage),
          },
        ],
      },
      {
        path: "resolution",
        element: getElement(pages.ResolutionLayout),
        children: [
          { index: true, element: getElement(pages.AllIssuesPage) },
          { path: "workflow", element: getElement(pages.WorkflowPage) },
        ],
      },
      {
        path: "services",
        element: getElement(pages.ServicesPage),
      },
      {
        path: "customers",
        element: getElement(pages.CustomersPage),
      },
      {
        path: "e-stores",
        element: getElement(pages.EStoresLayout),
        children: [
          { index: true, element: getElement(pages.StoresPage) },
          { path: "catalogs", element: getElement(pages.CatalogsPage) },
          { path: "categories", element: getElement(pages.CategoriesPage) },
          { path: "products", element: getElement(pages.ProductsPage) },
          { path: "orders", element: getElement(pages.OrdersPage) },
        ],
      },
      {
        path: "apps",
        element: getElement(pages.AppsPage),
      },
      {
        path: "billing",
        element: getElement(pages.BillingPage),
      },
      {
        path: "settings",
        element: getElement(pages.SettingsLayout),
        children: [
          { index: true, element: getElement(pages.AccountSettingsPage) },
          {
            path: "login-security",
            element: getElement(pages.LoginSecurityPage),
          },
          { path: "faq", element: getElement(pages.FaqPage) },
          { path: "developer", element: getElement(pages.DeveloperPage) },
          {
            path: "contact-support",
            element: getElement(pages.ContactSupportPage),
          },
          { path: "tc-policy", element: getElement(pages.TcPolicyPage) },
          {
            path: "account-control",
            element: getElement(pages.AccountControlPage),
          },
        ],
      },
    ],
  },
]);
