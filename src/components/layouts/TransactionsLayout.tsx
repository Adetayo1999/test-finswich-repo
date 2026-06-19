import { Outlet, useParams } from "react-router-dom";
import { ROUTES } from "@/routes/paths";
import HorizontalNav from "@/components/common/horizontal-nav";

const getTransactionNavLinks = (appId: string) => [
  {
    title: "Payin",
    path: ROUTES.DASHBOARD.TRANSACTIONS.PAYIN(appId),
    end: true,
  },
  { title: "Payout", path: ROUTES.DASHBOARD.TRANSACTIONS.PAYOUT(appId) },
];

const TransactionsLayout = () => {
  const { appId = "" } = useParams();

  return (
    <div className="p-[2.063rem]">
      <div className="mb-10">
        <HorizontalNav links={getTransactionNavLinks(appId)} />
      </div>
      <div className="bg-white rounded-[1.875rem] py-[2.313rem] px-12">
        <Outlet />
      </div>
    </div>
  );
};

export default TransactionsLayout;
