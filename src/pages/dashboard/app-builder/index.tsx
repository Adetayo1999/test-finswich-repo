import clsx from "clsx";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { ConfigureAppModal } from "@/components/modals/configure-app";

type VersionRow = {
  id: string;
  versionRef: string;
  variance: string[];
  lastUpdated: string;
  date: string;
  status: "Publish" | "Current" | "Archived";
};

const recentUnpublished: VersionRow[] = [
  {
    id: "recent-1",
    versionRef: "App_update_1aa344",
    variance: ["Splash", "Profile", "DNS", "Terms"],
    lastUpdated: "5min ago",
    date: "Apr 12, 2025",
    status: "Publish",
  },
];

const previousPublished: VersionRow[] = [
  {
    id: "prev-current",
    versionRef: "App_update_1aa344",
    variance: ["Splash", "Profile", "Terms"],
    lastUpdated: "5min ago",
    date: "Apr 12, 2025",
    status: "Current",
  },
  {
    id: "prev-1",
    versionRef: "App_update_1aa344",
    variance: ["Profile", "About", "Terms"],
    lastUpdated: "5min ago",
    date: "Apr 12, 2025",
    status: "Archived",
  },
  {
    id: "prev-2",
    versionRef: "App_update_1aa344",
    variance: ["Splash", "Profile", "DNS", "Terms"],
    lastUpdated: "5min ago",
    date: "Apr 12, 2025",
    status: "Archived",
  },
  {
    id: "prev-3",
    versionRef: "App_update_1aa344",
    variance: ["Splash", "Profile", "DNS", "Terms"],
    lastUpdated: "5min ago",
    date: "Apr 12, 2025",
    status: "Archived",
  },
];

const AppBuilderPage = () => {
  const [showConfigure, setShowConfigure] = useState(false);

  return (
    <>
      <div className="px-8 py-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[#1C1C1C]">
              App Builder
            </h1>
            <p className="mt-2 text-sm text-[#767680]">
              Manage your app versions and publish configuration updates.
            </p>
          </div>
          <PrimaryButton
            className="px-10!"
            onClick={() => setShowConfigure(true)}
          >
            Configure App
          </PrimaryButton>
        </div>

      <section className="mb-10">
        <h2 className="mb-3 text-sm font-semibold text-[#1C1C1C]">
          Recent &amp; Unpublished
        </h2>
        <div className="overflow-hidden rounded-2xl border border-[#EAECF0] bg-white">
          <table className="w-full text-sm">
            <thead className="bg-[#F9FAFB] text-xs text-[#667085]">
              <tr>
                <th className="px-6 py-3 text-left font-medium">Version Ref</th>
                <th className="px-6 py-3 text-left font-medium">
                  Update Variance
                </th>
                <th className="px-6 py-3 text-left font-medium">
                  Last Updated
                </th>
                <th className="px-6 py-3 text-left font-medium">Date</th>
                <th className="px-6 py-3 font-medium text-right">
                  Publish
                </th>
              </tr>
            </thead>
            <tbody>
              {recentUnpublished.map((row) => (
                <tr key={row.id} className="border-t border-[#EAECF0]">
                  <td className="px-6 py-4 text-[#101828]">
                    {row.versionRef}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {row.variance.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-[#111827] px-3 py-1 text-xs font-semibold text-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[#667085]">
                    {row.lastUpdated}
                  </td>
                  <td className="px-6 py-4 text-[#667085]">{row.date}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      className="rounded-full bg-[#111827] px-4 py-1.5 text-xs font-semibold text-white"
                    >
                      Publish
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold text-[#1C1C1C]">
          Previous Published Version
        </h2>
        <div className="overflow-hidden rounded-2xl border border-[#EAECF0] bg-white">
          <table className="w-full text-sm">
            <thead className="bg-[#F9FAFB] text-xs text-[#667085]">
              <tr>
                <th className="px-6 py-3 text-left font-medium">Version Ref</th>
                <th className="px-6 py-3 text-left font-medium">
                  Update Variance
                </th>
                <th className="px-6 py-3 text-left font-medium">
                  Last Updated
                </th>
                <th className="px-6 py-3 text-left font-medium">Date</th>
                <th className="px-6 py-3 font-medium text-right">
                  Publish
                </th>
                <th className="px-6 py-3" />
              </tr>
            </thead>
            <tbody>
              {previousPublished.map((row) => (
                <tr
                  key={row.id}
                  className={clsx(
                    "border-t border-[#EAECF0]",
                    row.status === "Current" && "bg-[#E3F9E5]",
                  )}
                >
                  <td className="px-6 py-4 text-[#101828]">
                    {row.versionRef}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {row.variance.map((item) => (
                        <span
                          key={item}
                          className={clsx(
                            "rounded-full px-3 py-1 text-xs font-semibold",
                            row.status === "Current"
                              ? "bg-[#111827] text-white"
                              : "bg-[#E5E7EB] text-[#374151]",
                          )}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[#667085]">
                    {row.lastUpdated}
                  </td>
                  <td className="px-6 py-4 text-[#667085]">{row.date}</td>
                  <td className="px-6 py-4 text-right">
                    {row.status === "Current" ? (
                      <span className="inline-flex rounded-full bg-[#16A34A] px-4 py-1.5 text-xs font-semibold text-white">
                        Current
                      </span>
                    ) : (
                      <span className="inline-flex rounded-full bg-[#DC2626] px-4 py-1.5 text-xs font-semibold text-white">
                        Archived
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E7EB] text-xl text-[#4B5563]"
                    >
                      &#8226;&#8226;&#8226;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      </div>

      <AnimatePresence>
        {showConfigure && (
          <ConfigureAppModal onClose={() => setShowConfigure(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default AppBuilderPage;
