export type VerifyAccountRequest = {
  email: string;
  token: string;
};

export type ResendVerifyAccountOtpRequest = {
  email: string;
};

export type VerifyAccountResponse = {
  status: boolean;
  message: string;
  data?: unknown;
};

export type ResendVerifyAccountOtpResponse = {
  status: boolean;
  message: string;
  data?: unknown;
};
