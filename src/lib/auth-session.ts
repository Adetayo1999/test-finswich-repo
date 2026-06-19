import type { CurrentUser } from "@/api/auth/me-types";
import type { AuthUser, AuthTokens, LoginResponseData } from "@/api/auth/login-types";
import { queryClient } from "@/lib/query-client";
import { clearRegistrationSession } from "@/lib/registration-session";

function toAuthUser(user: CurrentUser): AuthUser {
  return {
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    userType: user.userType,
    status: user.status,
    emailVerified: user.emailVerified,
    phoneVerified: user.phoneVerified,
    lastLoginAt: user.lastLoginAt,
    createdAt: user.createdAt,
  };
}

const AUTH_SESSION_KEY = "finswich:auth-session";

export function saveAuthSession(data: LoginResponseData) {
  localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(data));
}

export function updateAuthSessionUser(user: CurrentUser) {
  const session = getAuthSession();
  if (!session) return;

  saveAuthSession({
    ...session,
    user: toAuthUser(user),
  });
}

export function getAuthSession(): LoginResponseData | null {
  const raw = localStorage.getItem(AUTH_SESSION_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as LoginResponseData;
  } catch {
    return null;
  }
}

export function clearAuthSession() {
  localStorage.removeItem(AUTH_SESSION_KEY);
}

export function updateAuthSessionTokens(tokens: AuthTokens) {
  const session = getAuthSession();
  if (!session) return;

  saveAuthSession({
    ...session,
    tokens,
  });
}

export function clearLocalAuthSession() {
  clearAuthSession();
  clearRegistrationSession();
}

export function invalidateClientSession() {
  clearLocalAuthSession();
  queryClient.clear();
}

export function getAccessToken(): string | null {
  return getAuthSession()?.tokens.accessToken ?? null;
}

export function getRefreshToken(): string | null {
  return getAuthSession()?.tokens.refreshToken ?? null;
}

export function isAuthenticated(): boolean {
  return Boolean(getAccessToken());
}

export function logout() {
  invalidateClientSession();
}
