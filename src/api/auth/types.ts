export type MerchantRegistrationRequest = {
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  password: string;
  phone: string;
  userMerchantId?: string;
};

export type MerchantUserType = "merchant";

export type MerchantAccountStatus = "pending" | string;

export type MerchantRegistrationData = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  userType: MerchantUserType;
  status: MerchantAccountStatus;
  emailVerified: boolean;
  userMerchantId: string;
  country: string;
  createdAt: string;
};

export type MerchantRegistrationResponse = {
  status: boolean;
  message: string;
  data: MerchantRegistrationData;
};

