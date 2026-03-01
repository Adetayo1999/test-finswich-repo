import { Outlet } from "react-router-dom";
import { ROUTES } from "@/routes/paths";
import HorizontalNav from "@/components/common/horizontal-nav";

const RESOLUTION_NAV_LINKS = [
  {
    title: "All Issues",
    path: ROUTES.DASHBOARD.RESOLUTION.ALL_ISSUES,
    end: true,
  },
  { title: "Workflow", path: ROUTES.DASHBOARD.RESOLUTION.WORKFLOW },
];

const ResolutionLayout = () => {
  return (
    <div className="p-[2.063rem]">
      <div className="mb-10">
        <HorizontalNav links={RESOLUTION_NAV_LINKS} />
      </div>
      <div className="bg-white rounded-[1.875rem] py-[2.313rem] px-12">
        <Outlet />
      </div>
    </div>
  );
};

export default ResolutionLayout;
