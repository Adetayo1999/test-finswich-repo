import { Outlet } from "react-router-dom";
import { ROUTES } from "@/routes/paths";
import HorizontalNav from "@/components/common/horizontal-nav";

const SETTINGS_NAV_LINKS = [
  { title: "Account Settings", path: ROUTES.DASHBOARD.SETTINGS.ACCOUNT, end: true },
  { title: "Login & Security", path: ROUTES.DASHBOARD.SETTINGS.LOGIN_SECURITY },
  { title: "FAQ", path: ROUTES.DASHBOARD.SETTINGS.FAQ },
  { title: "Developer", path: ROUTES.DASHBOARD.SETTINGS.DEVELOPER },
  { title: "Contact Support", path: ROUTES.DASHBOARD.SETTINGS.CONTACT_SUPPORT },
  { title: "T&C/Policy", path: ROUTES.DASHBOARD.SETTINGS.TC_POLICY },
  { title: "Account Control", path: ROUTES.DASHBOARD.SETTINGS.ACCOUNT_CONTROL },
];

const SettingsLayout = () => {
  return (
    <div className="p-[2.063rem]">
      <div className="mb-10">
        <HorizontalNav links={SETTINGS_NAV_LINKS} />
      </div>
      <div className="bg-white rounded-[1.875rem] py-[2.313rem] px-12">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingsLayout;
