export type MerchantApp = {
  id: string;
  name: string;
  websiteUrl: string;
  alias: string;
  description: string;
  merchantId: string;
  subdomain: string;
  customDomainActive: boolean;
  customDomainVerified: boolean;
  status: string;
  productKeys: string[];
  activeConfigurationId?: string;
  subdomainUrl?: string;
  customDomain?: string;
  submittedAt?: string;
  approvedAt?: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateMerchantAppRequest = {
  name: string;
  websiteUrl: string;
  alias: string;
  description: string;
  subdomain: string;
};

export type UpdateMerchantAppRequest = {
  name: string;
  websiteUrl: string;
  alias: string;
  description: string;
  subdomain: string;
  customDomain?: string;
  customDomainActive?: boolean;
};

export type MerchantAppsListResponse = {
  status: boolean;
  message: string;
  data: MerchantApp[];
};

export type MerchantAppWallet = {
  id: string;
  createdAt: string;
  updatedAt: string;
  merchantId: string;
  walletType: string;
  merchantWalletType: string;
  name: string;
  balance: number;
  mainBalance: number;
  ledgerBalance: number;
  currency: string;
  status: string;
  providerWalletAddress: string;
  providerWalletId: string;
};

export type CreateMerchantAppData = {
  app: MerchantApp;
  wallet: {
    wallet: MerchantAppWallet;
  };
};

export type CreateMerchantAppResponse = {
  status: boolean;
  message: string;
  data: CreateMerchantAppData;
};

export type UpdateMerchantAppResponse = {
  status: boolean;
  message: string;
  data: MerchantApp;
};

export type DeleteMerchantAppResponse = {
  status: boolean;
  message: string;
  data?: unknown;
};

export type CreateMerchantAppConfigRequest = {
  configData: Record<string, unknown>;
  isPublished: boolean;
};

export type CreateMerchantAppConfigResponse = {
  status: boolean;
  message: string;
  data?: unknown;
};

export type MerchantAppConfig = {
  id: string;
  createdAt: string;
  updatedAt: string;
  versionRef: string;
  appId: string;
  merchantId: string;
  configData: Record<string, unknown>;
  isPublished: boolean;
};

export type MerchantAppConfigsListResponse = {
  status: boolean;
  message: string;
  data: MerchantAppConfig[];
};

export type PublishMerchantAppConfigResponse = {
  status: boolean;
  message: string;
  data: MerchantAppConfig;
};
