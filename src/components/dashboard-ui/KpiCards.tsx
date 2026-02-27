export type KpiCardItem = {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
};

const TrendUp = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    className="inline-block ml-0.5"
  >
    <path
      d="M1 10L5 6L8 9L13 4"
      stroke="#1C1C1C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 4H13V8"
      stroke="#1C1C1C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TrendDown = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    className="inline-block ml-0.5"
  >
    <path
      d="M1 4L5 8L8 5L13 10"
      stroke="#1C1C1C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 10H13V6"
      stroke="#1C1C1C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export type KpiCardProps = KpiCardItem & {
  variant?: "light" | "muted";
};

export function KpiCard({ title, value, change, trend, variant = "light" }: KpiCardProps) {
  return (
    <div
      className={`rounded-xl px-8 py-5 h-28 flex justify-between flex-col ${
        variant === "light" ? "bg-[#E3F5FF]" : "bg-[#E5ECF6]"
      }`}
    >
      <p className="text-[0.8125rem] font-normal text-[#1C1C1C]">{title}</p>
      <div className="flex justify-between items-center flex-wrap gap-y-2 gap-x-2.5">
        <p className="mt-1 text-[1.375rem] font-bold leading-tight text-[#1C1C1C]">{value}</p>
        <p className="mt-1 text-[0.8125rem] font-normal text-[#1C1C1C]">
          {change}
          {trend === "up" ? <TrendUp /> : <TrendDown />}
        </p>
      </div>
    </div>
  );
}

const defaultItems: KpiCardItem[] = [
  { title: "Total Txn → Count", value: "721K", change: "+11.01%", trend: "up" },
  {
    title: "Total Txn → Volume",
    value: "367M",
    change: "-0.03%",
    trend: "down",
  },
  {
    title: "Total Txn → Volume",
    value: "367M",
    change: "-0.03%",
    trend: "down",
  },
  { title: "New Users", value: "1,156", change: "+15.03%", trend: "up" },
  { title: "Active Users", value: "239K", change: "+6.08%", trend: "up" },
  { title: "Active Users", value: "239K", change: "+6.08%", trend: "up" },
  { title: "Active Users", value: "239K", change: "+6.08%", trend: "up" },
  { title: "Active Users", value: "239K", change: "+6.08%", trend: "up" },
];

export function KpiCards({ items = defaultItems }: { items?: KpiCardItem[] }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {items.map((item, i) => (
        <KpiCard
          key={`${item.title}-${i}`}
          {...item}
          variant={i % 2 === 0 ? "light" : "muted"}
        />
      ))}
    </div>
  );
}
