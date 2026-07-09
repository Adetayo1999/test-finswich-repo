import { PageStepButton } from "@/components/common/pages-steps-ui";
import { useBusinessKycStatus } from "@/hooks/api/useCompliance";
import { ROUTES } from "@/routes/paths";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ComplianceReviewPage() {
  const navigate = useNavigate();
  const { data, isFetching, refetch } = useBusinessKycStatus();
  const status = data?.status?.toLowerCase();

  useEffect(() => {
    if (status && status !== "pending") {
      navigate(ROUTES.APPS.ROOT, { replace: true });
    }
  }, [navigate, status]);

  const handleCheckAgain = async () => {
    const result = await refetch();
    const nextStatus = result.data?.status?.toLowerCase();

    if (nextStatus && nextStatus !== "pending") {
      navigate(ROUTES.APPS.ROOT, { replace: true });
    }
  };

  return (
    <div className="mx-auto flex min-h-[calc(100vh-220px)] w-full max-w-3xl items-center justify-center">
      <section className="w-full rounded-2xl border border-[#EAECF0] bg-white px-5 py-8 text-center shadow-[0px_1px_2px_0px_#1018280D] md:px-12 md:py-12">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#F2F4F7]">
          <span className="text-2xl font-bold text-[#712EEB]">i</span>
        </div>

        <p className="mb-3 text-sm font-bold uppercase text-[#712EEB]">
          Compliance in review
        </p>
        <h1 className="mb-4 text-2xl font-bold text-[#101828] md:text-3xl">
          Your compliance is being reviewed by admin
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-sm leading-6 text-[#475467] md:text-base">
          Your KYC submission is currently pending review. Please check back
          later while the admin team completes the review.
        </p>

        <div className="mx-auto mb-8 flex max-w-sm items-center justify-between rounded-lg border border-[#EAECF0] bg-[#F9FAFB] px-4 py-3 text-left">
          <span className="text-sm font-medium text-[#475467]">KYC status</span>
          <span className="rounded-full bg-[#FEF3C7] px-3 py-1 text-sm font-bold capitalize text-[#92400E]">
            {data?.status || "pending"}
          </span>
        </div>

        <div className="flex justify-center">
          <PageStepButton
            variant="light"
            onClick={handleCheckAgain}
            disabled={isFetching}
          >
            {isFetching ? "Checking..." : "Check again"}
          </PageStepButton>
        </div>
      </section>
    </div>
  );
}

export default ComplianceReviewPage;
