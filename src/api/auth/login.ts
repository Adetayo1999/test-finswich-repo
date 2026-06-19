import { apiPost } from "@/lib/api-response";
import type { LoginRequest, LoginResponse } from "./login-types";

const LOGIN_PATH = "auth/login";

export async function login(body: LoginRequest): Promise<LoginResponse> {
  return apiPost<LoginResponse>(
    LOGIN_PATH,
    body,
    "Login failed",
    (response) =>
      Boolean(
        response.data?.user?.id &&
          response.data?.tokens?.accessToken &&
          response.data?.tokens?.refreshToken,
      ),
  );
}
