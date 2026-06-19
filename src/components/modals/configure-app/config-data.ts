import { createOnboardingSlide, type OnboardingSlideConfig } from "./tabs/onboarding-slide";

export type AppAssetsConfig = {
  app_logo: string | null;
  app_favicon: string | null;
  site_description: string;
  primary_font_family: string;
};

export type SplashScreenConfig = {
  background_color: string;
  text_color: string;
  text_description: string;
};

export type PolicyDocumentConfig = {
  url: string;
  content: string;
  format: "standard" | "aside" | "link";
};

export type PolicyTermsConfig = {
  privacy_policy: PolicyDocumentConfig;
  terms_conditions: PolicyDocumentConfig;
};

export type SupportConfig = {
  contact_email: string;
  legal_email: string;
  support_email: string;
  contact_phone_number: string;
  website: string;
  instagram_handle: string;
  x_handle: string;
  tiktok_handle: string;
};

export type ConfigureAppConfigData = {
  app_assets: AppAssetsConfig;
  splash_screen: SplashScreenConfig;
  onboarding: {
    slides: OnboardingSlideConfig[];
  };
  policy_terms: PolicyTermsConfig;
  support: SupportConfig;
};

export const DEFAULT_APP_CONFIG: ConfigureAppConfigData = {
  app_assets: {
    app_logo: null,
    app_favicon: null,
    site_description: "",
    primary_font_family: "",
  },
  splash_screen: {
    background_color: "#141428",
    text_color: "#182FFF",
    text_description: "",
  },
  onboarding: {
    slides: [createOnboardingSlide()],
  },
  policy_terms: {
    privacy_policy: {
      url: "",
      content: "",
      format: "standard",
    },
    terms_conditions: {
      url: "",
      content: "",
      format: "standard",
    },
  },
  support: {
    contact_email: "",
    legal_email: "",
    support_email: "",
    contact_phone_number: "",
    website: "",
    instagram_handle: "",
    x_handle: "",
    tiktok_handle: "",
  },
};

export function cloneDefaultAppConfig(): ConfigureAppConfigData {
  return {
    ...DEFAULT_APP_CONFIG,
    app_assets: { ...DEFAULT_APP_CONFIG.app_assets },
    splash_screen: { ...DEFAULT_APP_CONFIG.splash_screen },
    onboarding: { slides: [createOnboardingSlide()] },
    policy_terms: {
      privacy_policy: { ...DEFAULT_APP_CONFIG.policy_terms.privacy_policy },
      terms_conditions: { ...DEFAULT_APP_CONFIG.policy_terms.terms_conditions },
    },
    support: { ...DEFAULT_APP_CONFIG.support },
  };
}
