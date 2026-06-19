const dashboardPath = (appId: string, path = "") =>
  `/dashboard/${encodeURIComponent(appId)}${path}`;

export const ROUTES = {
  // root
  HOME: "/",

  AUTH: {
    ROOT: "/auth",
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    REQUEST_OTP: "/auth/request-otp",
    VERIFY_OTP: "/auth/verify-otp",
    CHANGE_PASSWORD: "/auth/change-password",
  },

  ONBOARDING: {
    ROOT: "/onboarding",
    LICENSE_STATUS: "/onboarding/license-status",
    VERIFY_ACCOUNT: "/onboarding/verify-account",
    SIGN_CONTRACT: "/onboarding/sign-contract",
    COMPANY_PROFILE: "/onboarding/company-profile",
    SHAREHOLDERS: "/onboarding/shareholders",
    COMPANY_DOCUMENTS: "/onboarding/company-documents",
  },

  APPS: {
    ROOT: "/apps",
    ALL_APPS: "/apps",
    APP_ADMIN: "/apps/admin",
  },

  DASHBOARD: {
    ROOT: "/dashboard/:appId",
    forApp: (appId: string) => dashboardPath(appId),
    OVERVIEW: {
      ROOT: (appId: string) => dashboardPath(appId, "/overview"),
    },
    WALLETS: {
      ROOT: (appId: string) => dashboardPath(appId, "/wallets"),
      BILLING: (appId: string) => dashboardPath(appId, "/wallets"),
      SETTLEMENT: (appId: string) =>
        dashboardPath(appId, "/wallets/settlement"),
      KYC: (appId: string) => dashboardPath(appId, "/wallets/kyc"),
    },
    TRANSACTIONS: {
      ROOT: (appId: string) => dashboardPath(appId, "/transactions"),
      PAYIN: (appId: string) => dashboardPath(appId, "/transactions"),
      PAYOUT: (appId: string) =>
        dashboardPath(appId, "/transactions/payout"),
    },
    RESOLUTION: {
      ROOT: (appId: string) => dashboardPath(appId, "/resolution"),
      ALL_ISSUES: (appId: string) => dashboardPath(appId, "/resolution"),
      WORKFLOW: (appId: string) =>
        dashboardPath(appId, "/resolution/workflow"),
    },
    SERVICES: {
      ROOT: (appId: string) => dashboardPath(appId, "/services"),
    },
    CUSTOMERS: {
      ROOT: (appId: string) => dashboardPath(appId, "/customers"),
    },
    ESTORES: {
      ROOT: (appId: string) => dashboardPath(appId, "/e-stores"),
      STORES: (appId: string) => dashboardPath(appId, "/e-stores"),
      CATALOGS: (appId: string) => dashboardPath(appId, "/e-stores/catalogs"),
      CATEGORIES: (appId: string) =>
        dashboardPath(appId, "/e-stores/categories"),
      PRODUCTS: (appId: string) => dashboardPath(appId, "/e-stores/products"),
      ORDERS: (appId: string) => dashboardPath(appId, "/e-stores/orders"),
    },
    APP_BUILDER: {
      ROOT: (appId: string) => dashboardPath(appId, "/app-builder"),
    },
    BILLING: {
      ROOT: (appId: string) => dashboardPath(appId, "/billing"),
    },
    SETTINGS: {
      ROOT: (appId: string) => dashboardPath(appId, "/settings"),
      ACCOUNT: (appId: string) => dashboardPath(appId, "/settings"),
      LOGIN_SECURITY: (appId: string) =>
        dashboardPath(appId, "/settings/login-security"),
      FAQ: (appId: string) => dashboardPath(appId, "/settings/faq"),
      DEVELOPER: (appId: string) =>
        dashboardPath(appId, "/settings/developer"),
      CONTACT_SUPPORT: (appId: string) =>
        dashboardPath(appId, "/settings/contact-support"),
      TC_POLICY: (appId: string) =>
        dashboardPath(appId, "/settings/tc-policy"),
      ACCOUNT_CONTROL: (appId: string) =>
        dashboardPath(appId, "/settings/account-control"),
    },
  },
} as const;
