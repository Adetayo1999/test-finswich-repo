import { Outlet } from "react-router-dom";
import { ROUTES } from "@/routes/paths";
import HorizontalNav from "@/components/common/horizontal-nav";

const ESTORES_NAV_LINKS = [
  { title: "Stores", path: ROUTES.DASHBOARD.ESTORES.STORES, end: true },
  { title: "Catalogs", path: ROUTES.DASHBOARD.ESTORES.CATALOGS },
  { title: "Categories", path: ROUTES.DASHBOARD.ESTORES.CATEGORIES },
  { title: "Products", path: ROUTES.DASHBOARD.ESTORES.PRODUCTS },
  { title: "Orders", path: ROUTES.DASHBOARD.ESTORES.ORDERS },
];

const EStoresLayout = () => {
  return (
    <div className="p-[2.063rem]">
      <div className="mb-10">
        <HorizontalNav links={ESTORES_NAV_LINKS} variant="dark" />
      </div>
      <div className="bg-white rounded-[1.875rem] py-[2.313rem] px-12">
        <Outlet />
      </div>
    </div>
  );
};

export default EStoresLayout;
