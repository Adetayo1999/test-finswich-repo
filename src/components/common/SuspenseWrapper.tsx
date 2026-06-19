import type { ReactNode } from "react";
import { Suspense } from "react";
import { useLocation } from "react-router-dom";
import { DashboardPageSkeleton } from "@/components/ui/DashboardPageSkeleton";
import PageLoader from "@/components/ui/PageLoader";

interface SuspenseWrapperProps {
  children: ReactNode;
}

const SuspenseWrapper = ({ children }: SuspenseWrapperProps) => {
  const location = useLocation();
  const fallback = location.pathname.startsWith("/dashboard") ? (
    <DashboardPageSkeleton pathname={location.pathname} />
  ) : (
    <PageLoader />
  );

  return <Suspense fallback={fallback}>{children}</Suspense>;
};

export default SuspenseWrapper;
