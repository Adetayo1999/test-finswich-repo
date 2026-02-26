import type { ReactNode } from "react";
import { Suspense } from "react";
import PageLoader from "@/components/ui/PageLoader";

interface SuspenseWrapperProps {
  children: ReactNode;
}

const SuspenseWrapper = ({ children }: SuspenseWrapperProps) => (
  <Suspense fallback={<PageLoader />}>{children}</Suspense>
);

export default SuspenseWrapper;
