import type { MerchantUserType } from "./types";

export type CurrentUser = {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  country: string;
  userType: MerchantUserType;
  status: string;
  referralCode: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  lastLoginAt: string;
  deactivatedAt: string | null;
  failedLoginAttempts: number;
  lockedUntil: string | null;
  callbackUrl: string | null;
  errorLogsUrl: string | null;
  userMerchantId: string;
};

export type CurrentUserResponse = {
  status: boolean;
  message: string;
  data: CurrentUser;
};
