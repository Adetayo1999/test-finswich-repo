import { Outlet } from "react-router-dom";
import { ROUTES } from "@/routes/paths";
import HorizontalNav from "@/components/common/horizontal-nav";

const WALLET_NAV_LINKS = [
  {
    title: "Billing wallet",
    path: ROUTES.DASHBOARD.WALLETS.BILLING,
    end: true,
  },
  { title: "Settlement wallet", path: ROUTES.DASHBOARD.WALLETS.SETTLEMENT },
  { title: "KYC wallet", path: ROUTES.DASHBOARD.WALLETS.KYC },
];

const WalletsLayout = () => {
  return (
    <div className="p-[2.063rem]">
      <div className="mb-10">
        <HorizontalNav links={WALLET_NAV_LINKS} />
      </div>
      <div className="bg-white rounded-[1.875rem] py-[2.313rem] px-12">
        <Outlet />
      </div>
    </div>
  );
};

export default WalletsLayout;
