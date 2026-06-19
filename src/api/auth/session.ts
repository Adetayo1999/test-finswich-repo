import { apiPost } from "@/lib/api-response";
import type { LogoutRequest, LogoutResponse } from "./session-types";

const LOGOUT_PATH = "auth/logout";

export async function logoutSession(
  body: LogoutRequest,
): Promise<LogoutResponse> {
  return apiPost<LogoutResponse>(LOGOUT_PATH, body, "Logout failed");
}
