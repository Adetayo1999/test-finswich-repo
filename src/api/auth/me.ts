import { apiGet } from "@/lib/api-response";
import type { CurrentUserResponse } from "./me-types";

const CURRENT_USER_PATH = "auth/me";

export async function getCurrentUser(): Promise<CurrentUserResponse> {
  return apiGet<CurrentUserResponse>(
    CURRENT_USER_PATH,
    "Failed to load user profile",
    (response) => Boolean(response.data?.id && response.data?.email),
  );
}
