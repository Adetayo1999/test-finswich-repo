import PageLoader from "@/components/ui/PageLoader";
import { DashboardPageSkeleton } from "@/components/ui/DashboardPageSkeleton";
import { useCurrentUser } from "@/hooks/api/useCurrentUser";
import { invalidateClientSession, isAuthenticated } from "@/lib/auth-session";
import { ROUTES } from "@/routes/paths";
import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export function RequireAuth() {
  const location = useLocation();
  const { isLoading, isError } = useCurrentUser();

  useEffect(() => {
    if (isError) {
      invalidateClientSession();
    }
  }, [isError]);

  if (!isAuthenticated()) {
    return (
      <Navigate
        to={ROUTES.AUTH.LOGIN}
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  if (isLoading) {
    return location.pathname.startsWith("/dashboard") ? (
      <DashboardPageSkeleton pathname={location.pathname} />
    ) : (
      <PageLoader />
    );
  }

  if (isError) {
    return <Navigate to={ROUTES.AUTH.LOGIN} replace />;
  }

  return <Outlet />;
}
