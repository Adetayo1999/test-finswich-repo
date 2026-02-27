import { FinswichLogo } from "@/assets/icons/finswich-logo";
import { ROUTES } from "@/routes/paths";
import { Link, NavLink } from "react-router-dom";
import { SIDEBAR_NAV } from "./sidebar-nav";
import clsx from "clsx";

export const DashboardSidebar = () => {
  return (
    <div className="border-[#F1F1F1] border-r py-5 px-10 h-full">
      <div className="flex items-center mb-14">
        <Link to={ROUTES.DASHBOARD.ROOT}>
          <FinswichLogo scale={0.8} />
        </Link>
      </div>

      <nav className="flex flex-col ">
        {SIDEBAR_NAV.map(({ path, icon: Icon, title }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              clsx(
                "flex gap-x-6 items-center text-sm py-4",
                isActive
                  ? "text-[#5B26EF] font-bold"
                  : "text-[#344054] hover:text-[#5B26EF]",
              )
            }
          >
            <Icon scale={0.8} className="" />
            <span>{title}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
