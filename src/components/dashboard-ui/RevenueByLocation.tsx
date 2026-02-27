export type RevenueLocationItem = {
  location: string;
  revenue: number;
};

const locationData: RevenueLocationItem[] = [
  { location: "New York", revenue: 72 },
  { location: "Singapore", revenue: 61 },
  { location: "San Francisco", revenue: 39 },
  { location: "Sydney", revenue: 25 },
];

const mapMarkers = [
  { top: "24%", left: "22%" },
  { top: "32%", left: "18%" },
  { top: "56%", left: "72%" },
  { top: "68%", left: "78%" },
];

function RevenueLocationRow({
  location,
  revenue,
  widthPercent,
}: RevenueLocationItem & { widthPercent: number }) {
  return (
    <div className="flex flex-col gap-y-1 items-center gap-3">
      <div className="flex justify-between items-center w-full">
        <span className="w-24 text-xs font-normal text-[#1C1C1C] shrink-0">
          {location}
        </span>
        <span className="w-10  text-xs font-normal text-[#1C1C1C] shrink-0">
          {revenue}K
        </span>
      </div>
      <div className="w-full h-1 bg-[#F1F1F1] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-[#A8C5DA]"
          style={{ width: `${widthPercent}%` }}
        />
      </div>
    </div>
  );
}

export function RevenueByLocation({
  items = locationData,
}: {
  items?: RevenueLocationItem[];
}) {
  const maxRevenue = Math.max(...items.map((d) => d.revenue), 1);
  return (
    <div className="bg-[#F7F9FB] rounded-xl p-6">
      <h3 className="text-sm font-bold text-[#1C1C1C] mb-4">
        Revenue by Location
      </h3>
      <div className="mb-4 h-[8.75rem] bg-[#F7F7F9] rounded-lg relative overflow-hidden">
        {mapMarkers.map((pos, idx) => (
          <div
            key={idx}
            className="absolute w-3 h-3 rounded-full bg-[#1C1C1C] border-2 border-white shadow-sm"
            style={{ top: pos.top, left: pos.left }}
          />
        ))}
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <RevenueLocationRow
            key={item.location}
            {...item}
            widthPercent={(item.revenue / maxRevenue) * 100}
          />
        ))}
      </div>
    </div>
  );
}
