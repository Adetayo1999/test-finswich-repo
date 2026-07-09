import PageLoader from "@/components/ui/PageLoader";
import { DashboardPageSkeleton } from "@/components/ui/DashboardPageSkeleton";
import { useBusinessKycStatus } from "@/hooks/api/useCompliance";
import { useCurrentUser } from "@/hooks/api/useCurrentUser";
import { invalidateClientSession, isAuthenticated } from "@/lib/auth-session";
import { ROUTES } from "@/routes/paths";
import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export function RequireAuth() {
  const location = useLocation();
  const { isLoading, isError } = useCurrentUser();
  const shouldCheckCompliance =
    location.pathname.startsWith(ROUTES.APPS.ROOT) ||
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith(ROUTES.ONBOARDING.ROOT);
  const isComplianceReviewPage =
    location.pathname === ROUTES.ONBOARDING.COMPLIANCE_REVIEW;
  const businessKycStatusQuery = useBusinessKycStatus(
    isAuthenticated() && !isLoading && !isError && shouldCheckCompliance,
  );

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

  if (
    shouldCheckCompliance &&
    (businessKycStatusQuery.isLoading ||
      (!isComplianceReviewPage && businessKycStatusQuery.isFetching))
  ) {
    return location.pathname.startsWith("/dashboard") ? (
      <DashboardPageSkeleton pathname={location.pathname} />
    ) : (
      <PageLoader />
    );
  }

  if (
    shouldCheckCompliance &&
    !isComplianceReviewPage &&
    businessKycStatusQuery.data?.status?.toLowerCase() === "pending"
  ) {
    return (
      <Navigate
        to={ROUTES.ONBOARDING.COMPLIANCE_REVIEW}
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  return <Outlet />;
}
