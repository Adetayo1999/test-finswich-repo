import { FinswichLogo } from "@/assets/icons/finswich-logo";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { useMerchantApps } from "@/hooks/api/useMerchantApps";
import { ROUTES } from "@/routes/paths";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { getSidebarNav } from "./sidebar-nav";
import clsx from "clsx";

function getStatusClasses(status?: string) {
  const normalizedStatus = status?.toLowerCase();

  if (normalizedStatus === "active" || normalizedStatus === "published") {
    return "bg-[#D1FAE5] text-[#065F46]";
  }

  if (normalizedStatus === "inactive" || normalizedStatus === "disabled") {
    return "bg-[#FEE2E2] text-[#991B1B]";
  }

  return "bg-[#EEF2FF] text-[#3730A3]";
}

export const DashboardSidebar = () => {
  const { appId = "" } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const appsQuery = useMerchantApps();
  const sidebarNav = getSidebarNav(appId);
  const apps = appsQuery.data ?? [];
  const selectedApp = apps.find((app) => app.id === appId);
  const appUrl =
    selectedApp?.customDomain ||
    selectedApp?.subdomainUrl ||
    selectedApp?.websiteUrl ||
    "";

  const handleAppChange = (nextAppId: string) => {
    if (!nextAppId || nextAppId === appId) return;

    const sectionPath =
      location.pathname.match(/^\/dashboard\/[^/]+(.*)$/)?.[1] || "/overview";

    navigate(
      `/dashboard/${encodeURIComponent(nextAppId)}${sectionPath || "/overview"}${location.search}${location.hash}`,
    );
  };

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden border-r border-[#F1F1F1] px-10 py-5">
      <div className="mb-6 flex shrink-0 items-center">
        <Link to={ROUTES.DASHBOARD.OVERVIEW.ROOT(appId)}>
          <FinswichLogo scale={0.8} />
        </Link>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="mb-8">
          <label
            htmlFor="dashboard-app-switcher"
            className="mb-2 block text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#98A2B3]"
          >
            Current app
          </label>
          <select
            id="dashboard-app-switcher"
            value={appId}
            onChange={(event) => handleAppChange(event.target.value)}
            disabled={appsQuery.isLoading || apps.length === 0}
            className="w-full rounded-lg border border-[#E4E7EC] bg-white px-3 py-2.5 text-sm font-semibold text-[#11151F] shadow-sm outline-none transition focus:border-[#5B26EF] focus:ring-2 focus:ring-[#5B26EF]/15 disabled:cursor-not-allowed disabled:bg-[#F9FAFB] disabled:text-[#98A2B3]"
          >
            {appsQuery.isLoading ? (
              <option value={appId}>Loading apps...</option>
            ) : apps.length === 0 ? (
              <option value={appId}>No apps found</option>
            ) : (
              apps.map((app) => (
                <option key={app.id} value={app.id}>
                  {app.name}
                </option>
              ))
            )}
            {!appsQuery.isLoading && appId && !selectedApp && (
              <option value={appId}>Current app</option>
            )}
          </select>
        </div>

        <div className="mb-8 rounded-xl border border-[#E4E7EC] bg-[#F8FAFC] p-3">
          {appsQuery.isLoading ? (
            <div className="space-y-2">
              <div className="h-3 w-28 animate-pulse rounded bg-[#E4E7EC]" />
              <div className="h-4 w-36 animate-pulse rounded bg-[#E4E7EC]" />
              <div className="h-3 w-full animate-pulse rounded bg-[#E4E7EC]" />
            </div>
          ) : selectedApp ? (
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#98A2B3]">
                    App context
                  </p>
                  <p className="mt-1 truncate text-sm font-bold text-[#11151F]">
                    {selectedApp.name}
                  </p>
                </div>
                {selectedApp.status && (
                  <span
                    className={clsx(
                      "shrink-0 rounded-full px-2 py-0.5 text-[0.625rem] font-semibold capitalize",
                      getStatusClasses(selectedApp.status),
                    )}
                  >
                    {selectedApp.status}
                  </span>
                )}
              </div>

              <div className="space-y-1 text-xs text-[#667085]">
                {selectedApp.alias && (
                  <p className="truncate">
                    <span className="font-semibold text-[#344054]">
                      Alias:
                    </span>{" "}
                    {selectedApp.alias}
                  </p>
                )}
                <p className="truncate">
                  <span className="font-semibold text-[#344054]">ID:</span>{" "}
                  {selectedApp.id}
                </p>
                {appUrl && (
                  <a
                    href={
                      appUrl.startsWith("http") ? appUrl : `https://${appUrl}`
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="block truncate font-medium text-[#5B26EF] hover:underline"
                    title={appUrl}
                  >
                    {appUrl}
                  </a>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-1">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#98A2B3]">
                App context
              </p>
              <p className="text-sm font-semibold text-[#11151F]">
                Current app
              </p>
              <p className="truncate text-xs text-[#667085]">{appId}</p>
            </div>
          )}
        </div>

        <nav className="flex flex-col">
          {sidebarNav.map(({ path, icon: Icon, title, end = true }) => (
            <NavLink
              key={path}
              to={path}
              end={end}
              className={({ isActive }) =>
                clsx(
                  "flex items-center gap-x-6 py-4 text-sm",
                  isActive
                    ? "font-bold text-[#5B26EF]"
                    : "text-[#344054] hover:text-[#5B26EF]",
                )
              }
            >
              <Icon scale={0.8} className="" />
              <span>{title}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto pt-6">
          <LogoutButton variant="sidebar" />
        </div>
      </div>
    </div>
  );
};
