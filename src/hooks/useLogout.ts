import { logoutSession } from "@/api/auth";
import {
  getRefreshToken,
  invalidateClientSession,
} from "@/lib/auth-session";
import { ROUTES } from "@/routes/paths";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();

  return async () => {
    const refreshToken = getRefreshToken();

    try {
      if (refreshToken) {
        await logoutSession({ refreshToken });
      }
    } catch {
      // Clear local session even if the server logout fails.
    } finally {
      invalidateClientSession();
      navigate(ROUTES.AUTH.LOGIN, { replace: true });
    }
  };
}
