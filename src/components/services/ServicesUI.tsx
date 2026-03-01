import { useState } from "react";
import { FaChevronRight, FaPlus, FaCheck } from "react-icons/fa6";
import clsx from "clsx";

type ServiceItem = {
  id: string;
  name: string;
  description: string;
};

const SERVICES: ServiceItem[] = [
  {
    id: "usd-virtual",
    name: "USD Virtual Account",
    description:
      "Ability to create wallets and account in multiple countries (EUR, GBP, CAD, USD etc)",
  },
  {
    id: "gbp-virtual",
    name: "GBP Virtual Account",
    description:
      "Get a physical card that allow you make payment offline seamlessly",
  },
  {
    id: "utilities",
    name: "Utilities",
    description: "Buy Airtime, Data, Power and other utilities",
  },
  {
    id: "store-front",
    name: "Store Front",
    description: "Create an e-commerce landing page for you business",
  },
  {
    id: "payment-link",
    name: "Payment Link",
    description: "Create payment links to accept payment in multiple countries",
  },
  {
    id: "virtual-card",
    name: "Virtual Card",
    description:
      "Create virtual card to make online shopping & subscription for you seamless",
  },
  {
    id: "currency-swap",
    name: "Currency Swap",
    description: "Ability to swap between two currency and sene money globally",
  },
  {
    id: "crypto",
    name: "Crypto Deposit & Withdraw",
    description: "Fund with and send stablecoin like USDT (polygon)",
  },
  {
    id: "e-sim",
    name: "E-Sim",
    description:
      "Buy data in country of your choice without being stranded when you travel",
  },
  {
    id: "global-transfer",
    name: "Global Transfer",
    description:
      "Ability to send and receive money to other African countries instantly",
  },
  {
    id: "invest",
    name: "Invest",
    description: "Ability to send and receive money to other assets",
  },
];

type CountryConfig = {
  id: string;
  name: string;
  flag: string;
  description: string;
  active: boolean;
  expanded: boolean;
};

const COUNTRIES: CountryConfig[] = [
  {
    id: "ng",
    name: "Nigeria",
    flag: "🇳🇬",
    description: "This pricing will only apply to your customers in Nigeria",
    active: true,
    expanded: true,
  },
  {
    id: "gh",
    name: "Ghana",
    flag: "🇬🇭",
    description: "This pricing will only apply to your customers in Ghana",
    active: false,
    expanded: false,
  },
  {
    id: "ke",
    name: "Kenya",
    flag: "🇰🇪",
    description: "This pricing will only apply to your customers in Kenya",
    active: false,
    expanded: false,
  },
  {
    id: "ug",
    name: "Uganda",
    flag: "🇺🇬",
    description: "This pricing will only apply to your customers in Uganda",
    active: false,
    expanded: false,
  },
  {
    id: "za",
    name: "South Africa",
    flag: "🇿🇦",
    description:
      "This pricing will only apply to your customers in South Africa",
    active: false,
    expanded: false,
  },
];

export const ManageServicesView = () => {
  const [enabled, setEnabled] = useState<Set<string>>(
    () => new Set(SERVICES.map((s) => s.id)),
  );
  const [selectedId, setSelectedId] = useState<string>("usd-virtual");
  const [globalPricing, setGlobalPricing] = useState(false);
  const [countries, setCountries] = useState<CountryConfig[]>(COUNTRIES);

  const selectedService = SERVICES.find((s) => s.id === selectedId);
  const toggleService = (id: string) => {
    setEnabled((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  const toggleCountry = (id: string) => {
    setCountries((prev) =>
      prev.map((c) => (c.id === id ? { ...c, active: !c.active } : c)),
    );
  };
  const toggleCountryExpanded = (id: string) => {
    setCountries((prev) =>
      prev.map((c) => (c.id === id ? { ...c, expanded: !c.expanded } : c)),
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[20rem_1fr]  gap-8 h-196.25  overflow-hidden bg-white rounded-[1.875rem]">
      <div className="flex flex-col  border border-[#E4E7EC]  bg-white overflow-hidden">
        <div className="shrink-0 p-6 pb-4">
          <h2 className="text-lg font-bold text-[#11151F]">
            Manage all Services
          </h2>
          <p className="text-sm text-[#767680] mt-1">
            Select the services you'd like your customers to see on the app.
          </p>
        </div>
        <ul className="flex-1 overflow-y-auto space-y-4 px-6 pb-6 ">
          {SERVICES.map((s) => {
            const checked = enabled.has(s.id);
            return (
              <li key={s.id} className="flex items-center gap-3">
                <label className="shrink-0 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleService(s.id)}
                    className="hidden"
                  />
                  <span
                    className={clsx(
                      "w-5 h-5 rounded flex items-center justify-center transition-colors",
                      checked
                        ? "bg-[#0243EC] text-white"
                        : "border-2 border-[#E4E7EC] bg-white",
                    )}
                  >
                    {checked && <FaCheck className="w-3 h-3" />}
                  </span>
                </label>
                <button
                  type="button"
                  className={clsx(
                    "flex-1 min-w-0 text-left border rounded-lg p-3 transition-colors",
                    selectedId === s.id
                      ? "border-[#0243EC] bg-[#E8F4FD]"
                      : "border-[#E4E7EC] hover:bg-[#F5F5F5]",
                  )}
                  onClick={() => setSelectedId(s.id)}
                >
                  <p className="text-sm font-semibold text-[#11151F]">
                    {s.name}
                  </p>
                  <p className="text-xs text-[#767680] mt-0.5">
                    {s.description}
                  </p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-col  border border-[#E4E7EC] border-l-0  bg-white overflow-hidden">
        <div className="shrink-0 p-6 pb-4">
          <h2 className="text-lg font-bold text-[#11151F]">
            Countries & Pricing Configuration for{" "}
            {selectedService?.name ?? "Service"}
          </h2>
          <p className="text-sm text-[#767680] mt-1">
            Turn different countries that you want your customers to access the
            select Service and configure their respective pricing
          </p>
        </div>
        <div className="flex-1 overflow-y-auto min-h-0 px-6 pb-6">
          <div className="mb-8 p-4 rounded-lg bg-[#F7F9FB] border border-[#E4E7EC]">
            <p className="text-sm font-semibold text-[#11151F]">
              Global Pricing
            </p>
            <p className="text-xs text-[#767680] mt-0.5">
              Use a singular pricing configuration across all countries.
            </p>
            <div className="flex items-center gap-3 mt-3">
              <button
                type="button"
                role="switch"
                aria-checked={globalPricing}
                onClick={() => setGlobalPricing((p) => !p)}
                className={clsx(
                  "w-12 h-6 rounded-full transition-colors",
                  globalPricing ? "bg-[#0243EC]" : "bg-[#E4E7EC]",
                )}
              >
                <span
                  className={clsx(
                    "block w-5 h-5 rounded-full bg-white shadow transition-transform",
                    globalPricing && "translate-x-7",
                  )}
                />
              </button>
              <span className="text-xs text-[#767680]">
                Use a singular pricing...
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {countries.map((c) => (
              <div
                key={c.id}
                className="border border-[#E4E7EC] rounded-xl overflow-hidden"
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleCountryExpanded(c.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleCountryExpanded(c.id);
                    }
                  }}
                  className="w-full flex items-center gap-3 p-4 text-left hover:bg-[#FAFAFA] cursor-pointer"
                >
                  <span className="text-xl" aria-hidden>
                    {c.flag}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#11151F]">
                      {c.name}
                    </p>
                    <p className="text-xs text-[#767680]">{c.description}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span
                      className={clsx(
                        "text-xs font-medium",
                        c.active ? "text-amber-600" : "text-[#767680]",
                      )}
                    >
                      {c.active ? "Active" : "Inactive"}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCountry(c.id);
                      }}
                      className={clsx(
                        "w-10 h-5 rounded-full transition-colors",
                        c.active ? "bg-amber-500" : "bg-[#E4E7EC]",
                      )}
                    >
                      <span
                        className={clsx(
                          "block w-4 h-4 rounded-full bg-white shadow transition-transform",
                          c.active && "translate-x-6",
                        )}
                      />
                    </button>
                    <FaChevronRight
                      className={clsx(
                        "w-4 h-4 text-[#767680] transition-transform",
                        c.expanded && "rotate-90",
                      )}
                    />
                  </div>
                </div>
                {c.expanded && (
                  <div className="px-4 pb-4 pt-0 border-t border-[#E4E7EC]">
                    {!c.active ? (
                      <ul className="text-sm text-red-600 space-y-1 py-3">
                        <li>
                          Turn on this country before you can configure pricing.
                        </li>
                        {c.id === "gh" && (
                          <li>
                            By turning on Ghana, a GHS settlement wallet will be
                            created for you automatically
                          </li>
                        )}
                      </ul>
                    ) : (
                      <>
                        <p className="text-xs text-[#767680] mt-3 mb-4">
                          This pricing only applies to when a user funds their
                          NGN account and will be settled to your corresponding
                          NGN account
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-xs font-medium text-[#344054] mb-1">
                              Pricing Type
                            </label>
                            <select className="w-full rounded-lg border border-[#E4E7EC] px-3 py-2 text-sm text-[#344054] focus:outline-none focus:ring-2 focus:ring-[#0243EC]/20">
                              <option>Select Pricing Type</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-[#344054] mb-1">
                              Pricing Value
                            </label>
                            <input
                              type="text"
                              placeholder="NGN | Amount"
                              className="w-full rounded-lg border border-[#E4E7EC] px-3 py-2 text-sm placeholder:text-[#767680] focus:outline-none focus:ring-2 focus:ring-[#0243EC]/20"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-[#344054] mb-1">
                              Upper Cap
                            </label>
                            <input
                              type="text"
                              placeholder="NGN | Amount"
                              className="w-full rounded-lg border border-[#E4E7EC] px-3 py-2 text-sm placeholder:text-[#767680] focus:outline-none focus:ring-2 focus:ring-[#0243EC]/20"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-[#344054] mb-1">
                              Lower Cap
                            </label>
                            <input
                              type="text"
                              placeholder="NGN | Amount"
                              className="w-full rounded-lg border border-[#E4E7EC] px-3 py-2 text-sm placeholder:text-[#767680] focus:outline-none focus:ring-2 focus:ring-[#0243EC]/20"
                            />
                          </div>
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                          <button
                            type="button"
                            className="w-10 h-5 rounded-full bg-amber-500"
                          >
                            <span className="block w-4 h-4 rounded-full bg-white shadow translate-x-6" />
                          </button>
                          <span className="text-xs text-[#767680]">
                            Cap your fee
                          </span>
                        </div>
                        <div className="mb-4">
                          <p className="text-sm font-semibold text-[#11151F] mb-3">
                            Additional Pricing
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3">
                            <div>
                              <label className="block text-xs font-medium text-[#344054] mb-1">
                                Name this fee
                              </label>
                              <input
                                type="text"
                                className="w-full rounded-lg border border-[#E4E7EC] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0243EC]/20"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-[#344054] mb-1">
                                Select Pricing Type
                              </label>
                              <select className="w-full rounded-lg border border-[#E4E7EC] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0243EC]/20">
                                <option>Select Pricing Type</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-[#344054] mb-1">
                                Name this fee
                              </label>
                              <input
                                type="text"
                                placeholder="Pricing Narration"
                                className="w-full rounded-lg border border-[#E4E7EC] px-3 py-2 text-sm placeholder:text-[#767680] focus:outline-none focus:ring-2 focus:ring-[#0243EC]/20"
                              />
                            </div>
                          </div>
                          <button
                            type="button"
                            className="flex items-center gap-2 text-sm font-medium text-[#0243EC] hover:underline"
                          >
                            <FaPlus className="w-4 h-4" />
                            Add another
                          </button>
                        </div>
                        <button
                          type="button"
                          className="rounded-lg bg-[#11151F] text-white text-sm font-medium px-6 py-2.5 hover:bg-[#1a1d28]"
                        >
                          Save
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
