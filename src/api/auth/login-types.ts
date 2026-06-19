import type { MerchantUserType } from "./types";

export type LoginRequest = {
  email: string;
  password: string;
};

export type AuthUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  userType: MerchantUserType;
  status: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  lastLoginAt: string;
  createdAt: string;
};

export type AuthTokens = {
  accessToken: string;
  refreshToken: string;
};

export type AuthCompliance = {
  needsCompliance: boolean;
  complianceStatus: string;
};

export type LoginResponseData = {
  user: AuthUser;
  tokens: AuthTokens;
  compliance: AuthCompliance;
};

export type LoginResponse = {
  status: boolean;
  message: string;
  data: LoginResponseData;
};
