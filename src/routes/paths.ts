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

  DASHBOARD: {
    ROOT: "/dashboard",
    OVERVIEW: {
      ROOT: "/dashboard/overview",
    },
    WALLETS: {
      ROOT: "/dashboard/wallets",
    },
    TRANSACTIONS: {
      ROOT: "/dashboard/transactions",
    },
    RESOLUTION: {
      ROOT: "/dashboard/resolution",
    },
    SERVICES: {
      ROOT: "/dashboard/services",
    },
    CUSTOMERS: {
      ROOT: "/dashboard/customers",
    },
    ESTORES: {
      ROOT: "/dashboard/e-stores",
    },
    APPS: {
      ROOT: "/dashboard/apps",
    },
    BILLING: {
      ROOT: "/dashboard/billing",
    },
    SETTINGS: {
      ROOT: "/dashboard/settings",
    },
  },
} as const;
