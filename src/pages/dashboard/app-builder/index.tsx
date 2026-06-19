import clsx from "clsx";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import type { MerchantAppConfig } from "@/api/merchants";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { ConfigureAppModal } from "@/components/modals/configure-app";
import {
  useMerchantAppConfigs,
  useMerchantApps,
  usePublishMerchantAppConfig,
} from "@/hooks/api/useMerchantApps";

const sectionLabels: Record<string, string> = {
  app_assets: "Assets",
  splash_screen: "Splash",
  onboarding: "Onboarding",
  policy_terms: "Terms",
  support: "Support",
};

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function formatRelativeTime(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";

  const diffInSeconds = Math.round((date.getTime() - Date.now()) / 1000);
  const units: Array<[Intl.RelativeTimeFormatUnit, number]> = [
    ["year", 60 * 60 * 24 * 365],
    ["month", 60 * 60 * 24 * 30],
    ["day", 60 * 60 * 24],
    ["hour", 60 * 60],
    ["minute", 60],
  ];
  const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  for (const [unit, secondsInUnit] of units) {
    const valueInUnit = Math.trunc(diffInSeconds / secondsInUnit);
    if (Math.abs(valueInUnit) >= 1) {
      return formatter.format(valueInUnit, unit);
    }
  }

  return "just now";
}

function getVariance(configData: Record<string, unknown>) {
  const labels = Object.keys(configData)
    .filter((key) => configData[key] !== undefined && configData[key] !== null)
    .map((key) => sectionLabels[key] ?? key.replace(/_/g, " "));

  return labels.length > 0 ? labels : ["Config"];
}

const AppBuilderPage = () => {
  const { appId } = useParams();
  const [showConfigure, setShowConfigure] = useState(false);
  const configsQuery = useMerchantAppConfigs(appId);
  const publishConfig = usePublishMerchantAppConfig();
  const { data: apps = [] } = useMerchantApps();

  const app = apps.find((item) => item.id === appId);
  const configs = configsQuery.data ?? [];
  const unpublishedConfigs = configs.filter((config) => !config.isPublished);
  const publishedConfigs = configs.filter((config) => config.isPublished);
  const error =
    configsQuery.error instanceof Error ? configsQuery.error.message : undefined;

  const handlePublishConfig = (configId: string) => {
    if (!appId) {
      toast.error("App not found. Please reopen this dashboard from an app.");
      return;
    }

    publishConfig.mutate(
      { appId, configId },
      {
        onSuccess: (response) => {
          toast.success(response.message || "App configuration published");
        },
        onError: (publishError) => {
          toast.error(
            publishError instanceof Error
              ? publishError.message
              : "Failed to publish app configuration",
          );
        },
      },
    );
  };

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
            disabled={!appId}
          >
            Configure App
          </PrimaryButton>
        </div>

        <ConfigTableSection
          title="Recent & Unpublished"
          configs={unpublishedConfigs}
          loading={configsQuery.isLoading}
          error={error}
          onRetry={() => configsQuery.refetch()}
          action="publish"
          onPublishConfig={handlePublishConfig}
          publishingConfigId={
            publishConfig.isPending
              ? publishConfig.variables?.configId
              : undefined
          }
        />

        <ConfigTableSection
          title="Previous Published Version"
          configs={publishedConfigs}
          loading={configsQuery.isLoading}
          error={error}
          onRetry={() => configsQuery.refetch()}
          action="status"
        />
      </div>

      <AnimatePresence>
        {showConfigure && appId && (
          <ConfigureAppModal
            app={{ id: appId, name: app?.name ?? "App" }}
            onClose={() => setShowConfigure(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

type ConfigTableSectionProps = {
  title: string;
  configs: MerchantAppConfig[];
  loading: boolean;
  error?: string;
  action: "publish" | "status";
  onRetry: () => void;
  onPublishConfig?: (configId: string) => void;
  publishingConfigId?: string;
};

const ConfigTableSection = ({
  title,
  configs,
  loading,
  error,
  action,
  onRetry,
  onPublishConfig,
  publishingConfigId,
}: ConfigTableSectionProps) => (
  <section className="mb-10">
    <h2 className="mb-3 text-sm font-semibold text-[#1C1C1C]">{title}</h2>
    <div className="overflow-hidden rounded-2xl border border-[#EAECF0] bg-white">
      <table className="w-full text-sm">
        <thead className="bg-[#F9FAFB] text-xs text-[#667085]">
          <tr>
            <th className="px-6 py-3 text-left font-medium">Version Ref</th>
            <th className="px-6 py-3 text-left font-medium">
              Update Variance
            </th>
            <th className="px-6 py-3 text-left font-medium">Last Updated</th>
            <th className="px-6 py-3 text-left font-medium">Date</th>
            <th className="px-6 py-3 text-right font-medium">
              {action === "publish" ? "Publish" : "Status"}
            </th>
          </tr>
        </thead>
        <tbody>
          {loading &&
            Array.from({ length: 2 }).map((_, rowIndex) => (
              <tr
                key={`loading-${rowIndex}`}
                className="border-t border-[#EAECF0]"
              >
                {Array.from({ length: 5 }).map((__, cellIndex) => (
                  <td key={cellIndex} className="px-6 py-4">
                    <div className="h-4 w-full max-w-32 animate-pulse rounded bg-[#E5E7EB]" />
                  </td>
                ))}
              </tr>
            ))}

          {!loading && error && (
            <tr className="border-t border-[#EAECF0]">
              <td colSpan={5} className="px-6 py-10 text-center">
                <p className="mb-3 text-sm font-semibold text-[#111827]">
                  Failed to load configurations
                </p>
                <p className="mx-auto mb-4 max-w-md text-sm text-[#667085]">
                  {error}
                </p>
                <button
                  type="button"
                  onClick={onRetry}
                  className="rounded-lg bg-[#111827] px-4 py-2 text-sm font-semibold text-white"
                >
                  Try again
                </button>
              </td>
            </tr>
          )}

          {!loading && !error && configs.length === 0 && (
            <tr className="border-t border-[#EAECF0]">
              <td
                colSpan={5}
                className="px-6 py-10 text-center text-sm text-[#667085]"
              >
                No configurations found.
              </td>
            </tr>
          )}

          {!loading &&
            !error &&
            configs.map((config, index) => {
              const isCurrent = action === "status" && index === 0;

              return (
                <tr
                  key={config.id}
                  className={clsx(
                    "border-t border-[#EAECF0]",
                    isCurrent && "bg-[#E3F9E5]",
                  )}
                >
                  <td className="px-6 py-4 text-[#101828]">
                    {config.versionRef}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {getVariance(config.configData).map((item) => (
                        <span
                          key={item}
                          className={clsx(
                            "rounded-full px-3 py-1 text-xs font-semibold capitalize",
                            isCurrent
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
                    {formatRelativeTime(config.updatedAt)}
                  </td>
                  <td className="px-6 py-4 text-[#667085]">
                    {formatDate(config.createdAt)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    {action === "publish" ? (
                      <button
                        type="button"
                        onClick={() => onPublishConfig?.(config.id)}
                        disabled={publishingConfigId === config.id}
                        className="rounded-full bg-[#111827] px-4 py-1.5 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {publishingConfigId === config.id
                          ? "Publishing..."
                          : "Publish"}
                      </button>
                    ) : (
                      <span
                        className={clsx(
                          "inline-flex rounded-full px-4 py-1.5 text-xs font-semibold text-white",
                          isCurrent ? "bg-[#16A34A]" : "bg-[#DC2626]",
                        )}
                      >
                        {isCurrent ? "Current" : "Archived"}
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  </section>
);

export default AppBuilderPage;
