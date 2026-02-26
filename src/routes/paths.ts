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

  DASHBOARD: {},
} as const;
