import { Outlet, useParams } from "react-router-dom";
import { ROUTES } from "@/routes/paths";
import HorizontalNav from "@/components/common/horizontal-nav";

const getSettingsNavLinks = (appId: string) => [
  {
    title: "Account Settings",
    path: ROUTES.DASHBOARD.SETTINGS.ACCOUNT(appId),
    end: true,
  },
  {
    title: "Login & Security",
    path: ROUTES.DASHBOARD.SETTINGS.LOGIN_SECURITY(appId),
  },
  { title: "FAQ", path: ROUTES.DASHBOARD.SETTINGS.FAQ(appId) },
  { title: "Developer", path: ROUTES.DASHBOARD.SETTINGS.DEVELOPER(appId) },
  {
    title: "Contact Support",
    path: ROUTES.DASHBOARD.SETTINGS.CONTACT_SUPPORT(appId),
  },
  { title: "T&C/Policy", path: ROUTES.DASHBOARD.SETTINGS.TC_POLICY(appId) },
  {
    title: "Account Control",
    path: ROUTES.DASHBOARD.SETTINGS.ACCOUNT_CONTROL(appId),
  },
];

const SettingsLayout = () => {
  const { appId = "" } = useParams();

  return (
    <div className="p-[2.063rem]">
      <div className="mb-10">
        <HorizontalNav links={getSettingsNavLinks(appId)} />
      </div>
      <div className="bg-white rounded-[1.875rem] py-[2.313rem] px-12">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingsLayout;
