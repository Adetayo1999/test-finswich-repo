export type ServiceType =
  | "LOCAL_TRANSFER"
  | "GLOBAL_TRANSFER"
  | "LOCAL_UTILITY_TRANSFER"
  | "GLOBAL_UTILITY_TRANSFER"
  | "CURRENCY_SWAP"
  | "CRYPTO_FUNDING"
  | "CRYPTO_WITHDRAWAL"
  | "GLOBAL_ACCOUNT"
  | "PHYSICAL_CARD"
  | "E_SIM"
  | "VIRTUAL_CARD"
  | "WALLET_TO_WALLET_TRANSFER"
  | "APP_TO_APP_USER_WALLET_TRANSFER"
  | "STOREFRONT"
  | "MARKETPLACE"
  | "INVOICE"
  | "PAYMENT_LINK"
  | "SUBSCRIPTION_LINK"
  | "DONATION_LINK";

export type AppService = {
  id: string;
  createdAt: string;
  updatedAt: string;
  appId: string;
  companyId: string;
  serviceType: ServiceType;
  isActive: boolean;
};

export type CreateServiceRequest = {
  appId: string;
  serviceType: ServiceType;
  isActive: boolean;
};

export type ToggleServiceRequest = {
  isActive: boolean;
};

export type ServicesListResponse = {
  success: boolean;
  message: string;
  data: AppService[];
};

export type CreateServiceResponse = {
  success: boolean;
  message: string;
  data: AppService;
};

export type ToggleServiceResponse = {
  success: boolean;
  message: string;
  data: AppService;
};
