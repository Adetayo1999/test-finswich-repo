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
      BILLING: "/dashboard/wallets",
      SETTLEMENT: "/dashboard/wallets/settlement",
      KYC: "/dashboard/wallets/kyc",
    },
    TRANSACTIONS: {
      ROOT: "/dashboard/transactions",
      PAYIN: "/dashboard/transactions",
      PAYOUT: "/dashboard/transactions/payout",
    },
    RESOLUTION: {
      ROOT: "/dashboard/resolution",
      ALL_ISSUES: "/dashboard/resolution",
      WORKFLOW: "/dashboard/resolution/workflow",
    },
    SERVICES: {
      ROOT: "/dashboard/services",
    },
    CUSTOMERS: {
      ROOT: "/dashboard/customers",
    },
    ESTORES: {
      ROOT: "/dashboard/e-stores",
      STORES: "/dashboard/e-stores",
      CATALOGS: "/dashboard/e-stores/catalogs",
      CATEGORIES: "/dashboard/e-stores/categories",
      PRODUCTS: "/dashboard/e-stores/products",
      ORDERS: "/dashboard/e-stores/orders",
    },
    APPS: {
      ROOT: "/dashboard/apps",
    },
    BILLING: {
      ROOT: "/dashboard/billing",
    },
    SETTINGS: {
      ROOT: "/dashboard/settings",
      ACCOUNT: "/dashboard/settings",
      LOGIN_SECURITY: "/dashboard/settings/login-security",
      FAQ: "/dashboard/settings/faq",
      DEVELOPER: "/dashboard/settings/developer",
      CONTACT_SUPPORT: "/dashboard/settings/contact-support",
      TC_POLICY: "/dashboard/settings/tc-policy",
      ACCOUNT_CONTROL: "/dashboard/settings/account-control",
    },
  },
} as const;
