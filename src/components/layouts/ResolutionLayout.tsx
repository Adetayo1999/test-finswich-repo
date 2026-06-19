import { Outlet, useParams } from "react-router-dom";
import { ROUTES } from "@/routes/paths";
import HorizontalNav from "@/components/common/horizontal-nav";

const getResolutionNavLinks = (appId: string) => [
  {
    title: "All Issues",
    path: ROUTES.DASHBOARD.RESOLUTION.ALL_ISSUES(appId),
    end: true,
  },
  { title: "Workflow", path: ROUTES.DASHBOARD.RESOLUTION.WORKFLOW(appId) },
];

const ResolutionLayout = () => {
  const { appId = "" } = useParams();

  return (
    <div className="p-[2.063rem]">
      <div className="mb-10">
        <HorizontalNav links={getResolutionNavLinks(appId)} />
      </div>
      <div className="bg-white rounded-[1.875rem] py-[2.313rem] px-12">
        <Outlet />
      </div>
    </div>
  );
};

export default ResolutionLayout;
