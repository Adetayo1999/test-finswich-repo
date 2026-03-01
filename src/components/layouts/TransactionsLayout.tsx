import { Outlet } from "react-router-dom";
import { ROUTES } from "@/routes/paths";
import HorizontalNav from "@/components/common/horizontal-nav";

const TRANSACTION_NAV_LINKS = [
  {
    title: "Payin",
    path: ROUTES.DASHBOARD.TRANSACTIONS.PAYIN,
    end: true,
  },
  { title: "Payout", path: ROUTES.DASHBOARD.TRANSACTIONS.PAYOUT },
];

const TransactionsLayout = () => {
  return (
    <div className="p-[2.063rem]">
      <div className="mb-10">
        <HorizontalNav links={TRANSACTION_NAV_LINKS} />
      </div>
      <div className="bg-white rounded-[1.875rem] py-[2.313rem] px-12">
        <Outlet />
      </div>
    </div>
  );
};

export default TransactionsLayout;
