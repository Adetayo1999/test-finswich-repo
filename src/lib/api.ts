import axios, { type AxiosError, type InternalAxiosRequestConfig } from "axios";
import { assertApiSuccess } from "@/lib/api-response";
import type { RefreshTokenResponse } from "@/api/auth/session-types";
import {
  clearLocalAuthSession,
  getAccessToken,
  getRefreshToken,
  updateAuthSessionTokens,
} from "@/lib/auth-session";

const DEFAULT_API_BASE_URL = "https://finswichapigateway.apps.fuspay.finance/";

export const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL ?? DEFAULT_API_BASE_URL
).replace(/\/$/, "");

const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const bareApi = axios.create({
  baseURL: `${API_BASE_URL}/`,
  headers: defaultHeaders,
});

export const api = axios.create({
  baseURL: `${API_BASE_URL}/`,
  headers: defaultHeaders,
});

api.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token && !config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

type RetryableRequestConfig = InternalAxiosRequestConfig & {
  _retry?: boolean;
};

let isRefreshing = false;
let refreshQueue: Array<{
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
}> = [];

function processRefreshQueue(error: unknown, token: string | null) {
  refreshQueue.forEach(({ resolve, reject }) => {
    if (error || !token) {
      reject(error);
      return;
    }
    resolve(token);
  });
  refreshQueue = [];
}

function shouldSkipTokenRefresh(url?: string) {
  if (!url) return true;

  return (
    url.includes("auth/login") ||
    url.includes("auth/logout") ||
    url.includes("auth/refresh") ||
    url.includes("auth/verify-account")
  );
}

async function refreshAccessToken(): Promise<string> {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    throw new Error("No refresh token available");
  }

  const { data } = await bareApi.post<RefreshTokenResponse>("auth/refresh", {
    refreshToken,
  });

  const response = assertApiSuccess<RefreshTokenResponse>(
    data,
    (body) =>
      Boolean(
        body.data?.tokens?.accessToken && body.data?.tokens?.refreshToken,
      ),
    "Token refresh failed",
  );

  updateAuthSessionTokens(response.data.tokens);
  return response.data.tokens.accessToken;
}

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as RetryableRequestConfig | undefined;

    if (
      !originalRequest ||
      error.response?.status !== 401 ||
      originalRequest._retry ||
      shouldSkipTokenRefresh(originalRequest.url)
    ) {
      return Promise.reject(error);
    }

    if (isRefreshing) {
      return new Promise<string>((resolve, reject) => {
        refreshQueue.push({ resolve, reject });
      }).then((token) => {
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return api(originalRequest);
      });
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      const newAccessToken = await refreshAccessToken();
      processRefreshQueue(null, newAccessToken);
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      return api(originalRequest);
    } catch (refreshError) {
      processRefreshQueue(refreshError, null);
      clearLocalAuthSession();
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  },
);
