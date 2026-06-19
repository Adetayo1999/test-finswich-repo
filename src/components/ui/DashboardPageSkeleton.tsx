import clsx from "clsx";
import type { CSSProperties } from "react";

type DashboardSkeletonVariant =
  | "overview"
  | "services"
  | "table"
  | "settings"
  | "builder"
  | "default";

type DashboardPageSkeletonProps = {
  pathname?: string;
};

const sidebarRows = Array.from({ length: 10 });
const headerActions = Array.from({ length: 3 });

function getVariant(pathname = ""): DashboardSkeletonVariant {
  if (pathname.includes("/overview")) return "overview";
  if (pathname.includes("/services")) return "services";
  if (pathname.includes("/app-builder")) return "builder";
  if (pathname.includes("/settings")) return "settings";
  if (
    pathname.includes("/wallets") ||
    pathname.includes("/transactions") ||
    pathname.includes("/resolution") ||
    pathname.includes("/e-stores") ||
    pathname.includes("/customers") ||
    pathname.includes("/billing")
  ) {
    return "table";
  }

  return "default";
}

const SkeletonBlock = ({
  className,
  rounded = "rounded-lg",
  style,
}: {
  className?: string;
  rounded?: string;
  style?: CSSProperties;
}) => (
  <div
    className={clsx(
      "animate-pulse bg-[linear-gradient(90deg,#EEF2F7_0%,#F8FAFC_48%,#EEF2F7_100%)] bg-[length:220%_100%]",
      rounded,
      className,
    )}
    style={style}
  />
);

const ShellSidebar = () => (
  <aside className="hidden h-full w-[17%] min-w-64 border-r border-[#EEF2F6] bg-white px-5 py-6 lg:block">
    <div className="mb-8 flex items-center gap-3">
      <SkeletonBlock className="h-10 w-10" rounded="rounded-xl" />
      <div className="space-y-2">
        <SkeletonBlock className="h-3 w-28" />
        <SkeletonBlock className="h-2.5 w-20" />
      </div>
    </div>

    <div className="space-y-3">
      {sidebarRows.map((_, index) => (
        <div
          key={index}
          className={clsx(
            "flex items-center gap-3 rounded-lg px-3 py-2.5",
            index === 0 && "bg-[#F5F7FB]",
          )}
        >
          <SkeletonBlock className="h-5 w-5" rounded="rounded-md" />
          <SkeletonBlock
            className={clsx("h-3", index % 3 === 0 ? "w-28" : "w-36")}
          />
        </div>
      ))}
    </div>
  </aside>
);

const ShellHeader = () => (
  <header className="flex h-20 items-center justify-between border-b border-[#EEF2F6] bg-white px-6 lg:px-10">
    <div className="flex h-10 w-full max-w-xs items-center rounded-lg bg-[#F7F9FB] px-4">
      <SkeletonBlock className="h-4 w-4" rounded="rounded-full" />
      <SkeletonBlock className="ml-3 h-3 w-36" />
    </div>

    <div className="hidden items-center gap-5 lg:flex">
      {headerActions.map((_, index) => (
        <SkeletonBlock
          key={index}
          className={clsx("h-3", index === 0 ? "w-40" : "w-16")}
        />
      ))}
      <SkeletonBlock className="h-9 w-32" />
      <SkeletonBlock className="h-9 w-9" rounded="rounded-full" />
    </div>
  </header>
);

const PageIntro = () => (
  <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
    <div className="space-y-3">
      <SkeletonBlock className="h-6 w-56" />
      <SkeletonBlock className="h-3 w-80 max-w-full" />
    </div>
    <div className="flex gap-3">
      <SkeletonBlock className="h-10 w-28" />
      <SkeletonBlock className="h-10 w-10" rounded="rounded-full" />
    </div>
  </div>
);

const OverviewSkeleton = () => (
  <div className="grid gap-6 xl:grid-cols-[1fr_20rem]">
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-lg border border-[#EEF2F6] bg-white p-4 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <SkeletonBlock className="h-3 w-24" />
              <SkeletonBlock className="h-8 w-8" rounded="rounded-full" />
            </div>
            <SkeletonBlock className="mt-5 h-7 w-28" />
            <SkeletonBlock className="mt-3 h-3 w-32" />
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <ChartCard tall />
        <ChartCard tall />
      </div>
      <ChartCard />
      <ChartCard />
    </div>

    <div className="space-y-6">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="rounded-lg border border-[#EEF2F6] bg-white p-4 shadow-sm"
        >
          <div className="mb-4 flex items-center justify-between">
            <SkeletonBlock className="h-4 w-32" />
            <SkeletonBlock className="h-7 w-7" rounded="rounded-full" />
          </div>
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((__, rowIndex) => (
              <div key={rowIndex} className="flex items-center gap-3">
                <SkeletonBlock className="h-9 w-9" rounded="rounded-full" />
                <div className="flex-1 space-y-2">
                  <SkeletonBlock className="h-3 w-4/5" />
                  <SkeletonBlock className="h-2.5 w-2/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ChartCard = ({ tall = false }: { tall?: boolean }) => (
  <div className="rounded-lg border border-[#EEF2F6] bg-white p-5 shadow-sm">
    <div className="mb-6 flex items-center justify-between">
      <div className="space-y-2">
        <SkeletonBlock className="h-4 w-40" />
        <SkeletonBlock className="h-3 w-28" />
      </div>
      <SkeletonBlock className="h-8 w-24" />
    </div>
    <div
      className={clsx(
        "flex items-end gap-3 border-b border-l border-[#E9EEF5] px-3 pb-4",
        tall ? "h-72" : "h-56",
      )}
    >
      {Array.from({ length: 12 }).map((_, index) => (
        <SkeletonBlock
          key={index}
          className="flex-1"
          rounded="rounded-t-md"
          style={{
            height: `${32 + ((index * 17) % 58)}%`,
          }}
        />
      ))}
    </div>
  </div>
);

const TableSkeleton = () => (
  <div className="rounded-lg border border-[#EEF2F6] bg-white shadow-sm">
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EEF2F6] p-5">
      <div className="space-y-2">
        <SkeletonBlock className="h-4 w-44" />
        <SkeletonBlock className="h-3 w-64 max-w-full" />
      </div>
      <div className="flex gap-3">
        <SkeletonBlock className="h-10 w-36" />
        <SkeletonBlock className="h-10 w-24" />
      </div>
    </div>
    <div className="overflow-hidden">
      <div className="grid grid-cols-5 gap-4 border-b border-[#EEF2F6] px-5 py-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <SkeletonBlock key={index} className="h-3 w-24" />
        ))}
      </div>
      {Array.from({ length: 8 }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="grid grid-cols-5 gap-4 border-b border-[#F3F4F6] px-5 py-4 last:border-b-0"
        >
          {Array.from({ length: 5 }).map((__, cellIndex) => (
            <SkeletonBlock
              key={cellIndex}
              className={clsx(
                "h-4",
                cellIndex === 0
                  ? "w-36"
                  : cellIndex === 4
                    ? "w-20"
                    : "w-28",
              )}
            />
          ))}
        </div>
      ))}
    </div>
  </div>
);

const ServicesSkeleton = () => (
  <div className="grid gap-8 lg:grid-cols-[20rem_1fr]">
    <div className="rounded-lg border border-[#EEF2F6] bg-white p-5 shadow-sm">
      <SkeletonBlock className="h-5 w-40" />
      <SkeletonBlock className="mt-3 h-3 w-56" />
      <div className="mt-6 space-y-4">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className={clsx(
              "rounded-lg border p-3",
              index === 0 ? "border-[#C7D7FE] bg-[#F8FAFF]" : "border-[#EEF2F6]",
            )}
          >
            <div className="flex gap-3">
              <SkeletonBlock className="h-5 w-5" rounded="rounded-md" />
              <div className="flex-1 space-y-2">
                <SkeletonBlock className="h-3.5 w-36" />
                <SkeletonBlock className="h-3 w-full" />
                <SkeletonBlock className="h-3 w-2/3" />
                <SkeletonBlock className="h-5 w-20" rounded="rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="rounded-lg border border-[#EEF2F6] bg-white p-6 shadow-sm">
      <div className="mb-6 flex justify-between gap-4">
        <div className="space-y-3">
          <SkeletonBlock className="h-5 w-72 max-w-full" />
          <SkeletonBlock className="h-3 w-96 max-w-full" />
        </div>
        <SkeletonBlock className="h-8 w-14" rounded="rounded-full" />
      </div>
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="rounded-lg border border-[#EEF2F6] bg-[#F8FAFC] p-4"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <SkeletonBlock className="h-9 w-9" rounded="rounded-full" />
                <div className="space-y-2">
                  <SkeletonBlock className="h-4 w-32" />
                  <SkeletonBlock className="h-3 w-56" />
                </div>
              </div>
              <SkeletonBlock className="h-7 w-12" rounded="rounded-full" />
            </div>
            {index === 0 && (
              <div className="grid gap-4 md:grid-cols-2">
                {Array.from({ length: 6 }).map((__, inputIndex) => (
                  <div key={inputIndex} className="space-y-2">
                    <SkeletonBlock className="h-3 w-24" />
                    <SkeletonBlock className="h-11 w-full" />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const BuilderSkeleton = () => (
  <div className="space-y-6">
    <div className="grid gap-4 md:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="rounded-lg border border-[#EEF2F6] bg-white p-5 shadow-sm"
        >
          <SkeletonBlock className="h-3 w-28" />
          <SkeletonBlock className="mt-4 h-7 w-20" />
          <SkeletonBlock className="mt-3 h-3 w-36" />
        </div>
      ))}
    </div>
    <TableSkeleton />
  </div>
);

const SettingsSkeleton = () => (
  <div className="grid gap-6 lg:grid-cols-[17rem_1fr]">
    <div className="rounded-lg border border-[#EEF2F6] bg-white p-4 shadow-sm">
      <div className="space-y-3">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className={clsx(
              "rounded-lg px-3 py-3",
              index === 0 && "bg-[#F5F7FB]",
            )}
          >
            <SkeletonBlock className="h-3.5 w-36" />
          </div>
        ))}
      </div>
    </div>
    <div className="rounded-lg border border-[#EEF2F6] bg-white p-6 shadow-sm">
      <SkeletonBlock className="h-5 w-48" />
      <SkeletonBlock className="mt-3 h-3 w-80 max-w-full" />
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="space-y-2">
            <SkeletonBlock className="h-3 w-28" />
            <SkeletonBlock className="h-11 w-full" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const VariantContent = ({ variant }: { variant: DashboardSkeletonVariant }) => {
  if (variant === "overview") return <OverviewSkeleton />;
  if (variant === "services") return <ServicesSkeleton />;
  if (variant === "builder") return <BuilderSkeleton />;
  if (variant === "settings") return <SettingsSkeleton />;
  return <TableSkeleton />;
};

export const DashboardPageSkeleton = ({
  pathname,
}: DashboardPageSkeletonProps) => {
  const variant = getVariant(pathname);

  return (
    <div className="flex h-dvh overflow-hidden bg-[#F7F9FC] text-[#11151F]">
      <span className="sr-only">Loading dashboard</span>
      <ShellSidebar />
      <main className="flex min-w-0 flex-1 flex-col">
        <ShellHeader />
        <div className="min-h-0 flex-1 overflow-y-auto p-6 lg:p-8">
          <PageIntro />
          <VariantContent variant={variant} />
        </div>
      </main>
    </div>
  );
};
