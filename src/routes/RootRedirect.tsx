import { isAuthenticated } from "@/lib/auth-session";
import { ROUTES } from "@/routes/paths";
import { Navigate } from "react-router-dom";

export function RootRedirect() {
  if (!isAuthenticated()) {
    return <Navigate to={ROUTES.AUTH.LOGIN} replace />;
  }

  // const session = getAuthSession();
  // if (session?.compliance.needsCompliance) {
  //   return <Navigate to={ROUTES.ONBOARDING.LICENSE_STATUS} replace />;
  // }

  return <Navigate to={ROUTES.APPS.ROOT} replace />;
}
