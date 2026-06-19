import type { AuthTokens } from "./login-types";

export type RefreshTokenRequest = {
  refreshToken: string;
};

export type LogoutRequest = {
  refreshToken: string;
};

export type TokenRefreshData = {
  tokens: AuthTokens;
};

export type RefreshTokenResponse = {
  status: boolean;
  message: string;
  data: TokenRefreshData;
};

export type LogoutResponse = {
  status: boolean;
  message: string;
  data?: unknown;
};
