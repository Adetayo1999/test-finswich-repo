import { Outlet, useParams } from "react-router-dom";
import { ROUTES } from "@/routes/paths";
import HorizontalNav from "@/components/common/horizontal-nav";

const getWalletNavLinks = (appId: string) => [
  {
    title: "Billing wallet",
    path: ROUTES.DASHBOARD.WALLETS.BILLING(appId),
    end: true,
  },
  {
    title: "Settlement wallet",
    path: ROUTES.DASHBOARD.WALLETS.SETTLEMENT(appId),
  },
  { title: "KYC wallet", path: ROUTES.DASHBOARD.WALLETS.KYC(appId) },
];

const WalletsLayout = () => {
  const { appId = "" } = useParams();

  return (
    <div className="p-[2.063rem]">
      <div className="mb-10">
        <HorizontalNav links={getWalletNavLinks(appId)} />
      </div>
      <div className="bg-white rounded-[1.875rem] py-[2.313rem] px-12">
        <Outlet />
      </div>
    </div>
  );
};

export default WalletsLayout;
