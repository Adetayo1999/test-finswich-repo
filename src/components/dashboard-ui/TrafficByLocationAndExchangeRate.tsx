import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export type LocationSegment = { name: string; value: number; color: string };

const defaultLocationData: LocationSegment[] = [
  { name: "United States", value: 38.6, color: "#95A4FC" },
  { name: "Canada", value: 22.5, color: "#BAEDBD" },
  { name: "Mexico", value: 30.8, color: "#B1E3FF" },
  { name: "Other", value: 8.1, color: "#1C1C1C" },
];

function FilterDropdown({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="flex items-center gap-1.5 text-[0.8125rem] font-normal text-[#1C1C1C] bg-transparent border-0 cursor-pointer"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="text-[#767680]"
      >
        <path
          d="M1 3h4M1 7h10M1 11h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <span>{label}</span>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        className="text-[#767680]"
      >
        <path
          d="M3 4.5L6 7.5L9 4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function TrafficByLocation({
  data = defaultLocationData,
}: {
  data?: LocationSegment[];
}) {
  return (
    <div className="bg-[#F7F9FB] rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-[#1C1C1C]">
          Traffic by Location
        </h3>
        <div className="flex items-center gap-2">
          <FilterDropdown label="Payin" />
          <FilterDropdown label="Local Transfer" />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <ResponsiveContainer width="50%" height={220}>
          <PieChart>
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #F1F1F1",
                borderRadius: "8px",
                fontSize: "0.75rem",
              }}
              formatter={(value) => [`${value}%`, "Traffic"]}
              labelFormatter={(label) => label}
            />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="flex-1 space-y-3">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-[0.8125rem] font-normal text-[#1C1C1C]">
                {item.name}: {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CurrencyInput({
  currency,
  placeholder,
}: {
  currency: string;
  placeholder: string;
}) {
  return (
    <div className="flex-1">
      <div className="flex items-center gap-1.5 text-[0.8125rem] font-normal text-[#1C1C1C] mb-2">
        <span className="w-5 h-4 bg-gray-300 rounded shrink-0" />
        <span>{currency}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="text-[#767680]"
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-10 px-3 rounded-lg border border-[#E5E5E5] text-[0.8125rem] text-[#1C1C1C] placeholder:text-[#767680] focus:outline-none focus:ring-1 focus:ring-[#1C1C1C]/20"
      />
    </div>
  );
}

function ExchangeRateCard() {
  return (
    <div className="bg-[#F7F9FB] rounded-xl p-6">
      <h3 className="text-sm font-bold text-[#1C1C1C] mb-4">Exchange Rate</h3>
      <div className="flex gap-4 mb-6">
        <CurrencyInput currency="NGN" placeholder="Amount in NGN" />
        <CurrencyInput currency="USD" placeholder="Amount in USD" />
      </div>
      <div className="space-y-4">
        <div>
          <p className="text-[0.75rem] font-normal text-[#767680] mb-1">
            Fuspay Rate
          </p>
          <p className="text-base font-bold text-[#1C1C1C]">1 USD ⇔ NGN 1480</p>
        </div>
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[0.75rem] font-normal text-[#767680] mb-1">
              Merchant Rate
            </p>
            <p className="text-base font-bold text-[#1C1C1C]">
              1 USD ⇔ NGN 1480
            </p>
          </div>
          <span className="text-[0.6875rem] font-normal text-[#767680] bg-[#F7F7F9] px-2 py-1 rounded shrink-0">
            Margin — $1 flat rate
          </span>
        </div>
      </div>
    </div>
  );
}

export function TrafficByLocationAndExchangeRate({
  locationData,
}: {
  locationData?: LocationSegment[];
} = {}) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <TrafficByLocation data={locationData} />
      <ExchangeRateCard />
    </div>
  );
}
