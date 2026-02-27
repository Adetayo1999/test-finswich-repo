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
    element: <Navigate to={ROUTES.AUTH.LOGIN} replace />,
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
        element: getElement(pages.WalletsPage),
      },
      {
        path: "transactions",
        element: getElement(pages.TransactionsPage),
      },
      {
        path: "resolution",
        element: getElement(pages.ResolutionPage),
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
        element: getElement(pages.EStoresPage),
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
        element: getElement(pages.SettingsPage),
      },
    ],
  },
]);
