import { useState } from "react";
import { FaChevronRight, FaCheck, FaSpinner } from "react-icons/fa6";
import clsx from "clsx";
import toast from "react-hot-toast";
import type { PricingRule, PricingRulesRequest, PricingType } from "@/api/pricing";
import type { AppService, ServiceType } from "@/api/services";
import {
  useCreatePricingRules,
  usePricingRules,
  useReplacePricingRules,
} from "@/hooks/api/usePricing";
import {
  useCreateService,
  useServices,
  useToggleService,
} from "@/hooks/api/useServices";

type ServiceItem = {
  type: ServiceType;
  name: string;
  description: string;
};

const SERVICES: ServiceItem[] = [
  {
    type: "LOCAL_TRANSFER",
    name: "Local Transfer",
    description: "Send and receive money locally for customers in supported markets",
  },
  {
    type: "GLOBAL_TRANSFER",
    name: "Global Transfer",
    description: "Send and receive money across supported countries instantly",
  },
  {
    type: "LOCAL_UTILITY_TRANSFER",
    name: "Local Utility Transfer",
    description: "Buy local airtime, data, power and other utility services",
  },
  {
    type: "GLOBAL_UTILITY_TRANSFER",
    name: "Global Utility Transfer",
    description: "Offer utility payments across supported international markets",
  },
  {
    type: "CURRENCY_SWAP",
    name: "Currency Swap",
    description: "Swap balances between supported currencies",
  },
  {
    type: "CRYPTO_FUNDING",
    name: "Crypto Funding",
    description: "Allow customers fund wallets with supported crypto assets",
  },
  {
    type: "CRYPTO_WITHDRAWAL",
    name: "Crypto Withdrawal",
    description: "Allow customers withdraw to supported crypto wallets",
  },
  {
    type: "GLOBAL_ACCOUNT",
    name: "Global Account",
    description:
      "Ability to create wallets and account in multiple countries (EUR, GBP, CAD, USD etc)",
  },
  {
    type: "PHYSICAL_CARD",
    name: "Physical Card",
    description:
      "Get a physical card that allow you make payment offline seamlessly",
  },
  {
    type: "E_SIM",
    name: "E-Sim",
    description:
      "Buy data in country of your choice without being stranded when you travel",
  },
  {
    type: "VIRTUAL_CARD",
    name: "Virtual Card",
    description:
      "Create virtual card to make online shopping & subscription for you seamless",
  },
  {
    type: "WALLET_TO_WALLET_TRANSFER",
    name: "Wallet to Wallet Transfer",
    description: "Move funds between wallets inside the same app",
  },
  {
    type: "APP_TO_APP_USER_WALLET_TRANSFER",
    name: "App to App User Wallet Transfer",
    description: "Move funds between users across connected app wallets",
  },
  {
    type: "STOREFRONT",
    name: "Storefront",
    description: "Create an e-commerce landing page for your business",
  },
  {
    type: "MARKETPLACE",
    name: "Marketplace",
    description: "Enable marketplace-style commerce experiences",
  },
  {
    type: "INVOICE",
    name: "Invoice",
    description: "Create and send invoices for customer payments",
  },
  {
    type: "PAYMENT_LINK",
    name: "Payment Link",
    description: "Create payment links to accept payment in multiple countries",
  },
  {
    type: "SUBSCRIPTION_LINK",
    name: "Subscription Link",
    description: "Create recurring subscription payment links",
  },
  {
    type: "DONATION_LINK",
    name: "Donation Link",
    description: "Create donation links for causes and campaigns",
  },
];

type CountryConfig = {
  id: string;
  name: string;
  flag: string;
  currency: string;
  description: string;
  expanded: boolean;
};

const COUNTRIES: CountryConfig[] = [
  {
    id: "ng",
    name: "Nigeria",
    flag: "🇳🇬",
    currency: "NGN",
    description: "This pricing will only apply to your customers in Nigeria",
    expanded: true,
  },
  {
    id: "gh",
    name: "Ghana",
    flag: "🇬🇭",
    currency: "GHS",
    description: "This pricing will only apply to your customers in Ghana",
    expanded: false,
  },
  {
    id: "ke",
    name: "Kenya",
    flag: "🇰🇪",
    currency: "KES",
    description: "This pricing will only apply to your customers in Kenya",
    expanded: false,
  },
  {
    id: "ug",
    name: "Uganda",
    flag: "🇺🇬",
    currency: "UGX",
    description: "This pricing will only apply to your customers in Uganda",
    expanded: false,
  },
  {
    id: "za",
    name: "South Africa",
    flag: "🇿🇦",
    currency: "ZAR",
    description:
      "This pricing will only apply to your customers in South Africa",
    expanded: false,
  },
];

type PricingFormState = {
  title: string;
  description: string;
  isActive: boolean;
  type: PricingType | "";
  lowerRangeValue: string;
  upperRangeValue: string;
  flatAmount: string;
  percentageValue: string;
  lowerCapValue: string;
  upperCapValue: string;
};

const DEFAULT_PRICING_FORM: PricingFormState = {
  title: "",
  description: "",
  isActive: true,
  type: "",
  lowerRangeValue: "",
  upperRangeValue: "",
  flatAmount: "",
  percentageValue: "",
  lowerCapValue: "",
  upperCapValue: "",
};

const PRICING_TYPE_OPTIONS: Array<{ value: PricingType; label: string }> = [
  { value: "FLAT_RANGE", label: "Flat range" },
  { value: "FLAT_NO_RANGE", label: "Flat no range" },
  { value: "PERCENTAGE_WITH_CAP", label: "Percentage with cap" },
  { value: "PERCENTAGE_NO_CAP", label: "Percentage no cap" },
];

function defaultPricingForm(service?: ServiceItem): PricingFormState {
  return {
    ...DEFAULT_PRICING_FORM,
    title: service ? `${service.name} fee` : "",
    description: service ? `Fee applied to ${service.name.toLowerCase()}.` : "",
  };
}

function pricingFormWithDefaults(form: PricingFormState): PricingFormState {
  return {
    ...form,
    title: form.title.trim() || "Service fee",
    description: form.description.trim() || "Fee applied to this service.",
    isActive: true,
    type: form.type || "FLAT_NO_RANGE",
    flatAmount: form.flatAmount || "0",
    percentageValue: form.percentageValue || "0",
    lowerRangeValue: form.lowerRangeValue || "0",
    upperRangeValue: form.upperRangeValue || "0",
    lowerCapValue: form.lowerCapValue || "0",
    upperCapValue: form.upperCapValue || "0",
  };
}

function pricingRuleToForm(rule: PricingRule): PricingFormState {
  return {
    title: rule.title ?? "",
    description: rule.description ?? "",
    isActive: rule.isActive ?? true,
    type: rule.type ?? "",
    lowerRangeValue: stringifyNumber(rule.lowerRangeValue),
    upperRangeValue: stringifyNumber(rule.upperRangeValue),
    flatAmount: stringifyNumber(rule.flatAmount),
    percentageValue: stringifyNumber(rule.percentageValue),
    lowerCapValue: stringifyNumber(rule.lowerCapValue),
    upperCapValue: stringifyNumber(rule.upperCapValue),
  };
}

function stringifyNumber(value: number | undefined) {
  if (value === undefined || value === null) return "";
  return String(value);
}

function toNumber(value: string) {
  const normalized = value.replace(/,/g, "").trim();
  if (!normalized) return 0;
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

function buildPricingPayload(
  appId: string,
  serviceType: ServiceType,
  currency: string,
  form: PricingFormState,
): PricingRulesRequest {
  const type = form.type || "FLAT_NO_RANGE";
  const isFlatPricing = type === "FLAT_RANGE" || type === "FLAT_NO_RANGE";
  const isPercentagePricing =
    type === "PERCENTAGE_WITH_CAP" || type === "PERCENTAGE_NO_CAP";
  const hasRange = type === "FLAT_RANGE";
  const hasCap = type === "PERCENTAGE_WITH_CAP";
  const pricing = {
    title: form.title.trim(),
    description: form.description.trim(),
    isActive: form.isActive,
    type,
    ...(hasRange && {
      lowerRangeValue: toNumber(form.lowerRangeValue),
      upperRangeValue: toNumber(form.upperRangeValue),
    }),
    ...(isFlatPricing && {
      flatAmount: toNumber(form.flatAmount),
    }),
    ...(isPercentagePricing && {
      percentageValue: toNumber(form.percentageValue),
    }),
    ...(hasCap &&
      {
        lowerCapValue: toNumber(form.lowerCapValue),
        upperCapValue: toNumber(form.upperCapValue),
      }),
  };

  return {
    appId,
    serviceType,
    currency,
    pricings: [pricing],
  };
}

function pricingRuleToInput(rule: PricingRule, isActive: boolean) {
  const input = {
    title: rule.title,
    description: rule.description,
    isActive,
    type: rule.type,
  };

  if (rule.type === "FLAT_RANGE") {
    if (typeof rule.lowerRangeValue === "number") {
      Object.assign(input, { lowerRangeValue: rule.lowerRangeValue });
    }
    if (typeof rule.upperRangeValue === "number") {
      Object.assign(input, { upperRangeValue: rule.upperRangeValue });
    }
  }

  if (rule.type === "FLAT_RANGE" || rule.type === "FLAT_NO_RANGE") {
    if (typeof rule.flatAmount === "number") {
      Object.assign(input, { flatAmount: rule.flatAmount });
    }
  }

  if (
    rule.type === "PERCENTAGE_WITH_CAP" ||
    rule.type === "PERCENTAGE_NO_CAP"
  ) {
    if (typeof rule.percentageValue === "number") {
      Object.assign(input, { percentageValue: rule.percentageValue });
    }
  }

  if (rule.type === "PERCENTAGE_WITH_CAP") {
    if (typeof rule.lowerCapValue === "number") {
      Object.assign(input, { lowerCapValue: rule.lowerCapValue });
    }
    if (typeof rule.upperCapValue === "number") {
      Object.assign(input, { upperCapValue: rule.upperCapValue });
    }
  }

  return input;
}

type ManageServicesViewProps = {
  appId?: string;
};

export const ManageServicesView = ({ appId }: ManageServicesViewProps) => {
  const [selectedType, setSelectedType] =
    useState<ServiceType>("LOCAL_TRANSFER");
  const [serviceToCreate, setServiceToCreate] = useState<ServiceItem | null>(
    null,
  );
  const [globalPricing, setGlobalPricing] = useState(false);
  const [countries, setCountries] = useState<CountryConfig[]>(COUNTRIES);
  const [pricingForms, setPricingForms] = useState<
    Record<string, PricingFormState>
  >({});
  const servicesQuery = useServices(appId);
  const createService = useCreateService();
  const toggleServiceMutation = useToggleService();
  const createPricingRules = useCreatePricingRules();
  const replacePricingRules = useReplacePricingRules();

  const createdServicesByType = new Map<ServiceType, AppService>(
    (servicesQuery.data ?? []).map((service) => [service.serviceType, service]),
  );
  const selectedService = SERVICES.find((s) => s.type === selectedType);
  const selectedCreatedService = selectedService
    ? createdServicesByType.get(selectedService.type)
    : undefined;
  const pricingQuery = usePricingRules(
    appId,
    selectedCreatedService?.serviceType,
  );
  const pricingByCurrency = new Map<string, PricingRule[]>();

  (pricingQuery.data ?? []).forEach((pricing) => {
    const currency = pricing.currency?.toUpperCase();
    if (!currency) return;
    pricingByCurrency.set(currency, [
      ...(pricingByCurrency.get(currency) ?? []),
      pricing,
    ]);
  });

  const getPricingForm = (currency: string): PricingFormState => {
    const existingPricing = pricingByCurrency.get(currency)?.[0];
    const fallback = existingPricing
      ? pricingRuleToForm(existingPricing)
      : defaultPricingForm(selectedService);

    return pricingForms[currency] ?? fallback;
  };

  const updatePricingForm = (
    currency: string,
    updates:
      | Partial<PricingFormState>
      | ((form: PricingFormState) => PricingFormState),
  ) => {
    setPricingForms((current) => {
      const existingPricing = pricingByCurrency.get(currency)?.[0];
      const currentForm =
        current[currency] ??
        (existingPricing
          ? pricingRuleToForm(existingPricing)
          : defaultPricingForm(selectedService));
      return {
        ...current,
        [currency]:
          typeof updates === "function"
            ? updates(currentForm)
            : { ...currentForm, ...updates },
      };
    });
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedType(service.type);
    setPricingForms({});
    if (!createdServicesByType.has(service.type)) {
      setServiceToCreate(service);
    }
  };

  const handleCreateService = () => {
    if (!appId || !serviceToCreate) return;

    createService.mutate(
      {
        appId,
        serviceType: serviceToCreate.type,
        isActive: true,
      },
      {
        onSuccess: (response) => {
          toast.success(response.message || "Service created successfully");
          setSelectedType(response.data.serviceType);
          setPricingForms({});
          setServiceToCreate(null);
        },
        onError: (error) => {
          toast.error(
            error instanceof Error ? error.message : "Failed to create service",
          );
        },
      },
    );
  };

  const toggleService = (service: AppService) => {
    if (!appId) return;

    toggleServiceMutation.mutate(
      {
        appId,
        serviceId: service.id,
        body: { isActive: !service.isActive },
      },
      {
        onSuccess: (response) => {
          toast.success(response.message || "Service updated successfully");
        },
        onError: (error) => {
          toast.error(
            error instanceof Error ? error.message : "Failed to update service",
          );
        },
      },
    );
  };

  const handleSavePricing = (country: CountryConfig) => {
    if (!appId || !selectedCreatedService) {
      toast.error("Create this service before saving pricing");
      return;
    }

    const form = getPricingForm(country.currency);

    if (!form.title.trim()) {
      toast.error("Enter a fee name before saving pricing");
      return;
    }

    if (!form.type) {
      toast.error("Select a pricing type before saving pricing");
      return;
    }

    const payload = buildPricingPayload(
      appId,
      selectedCreatedService.serviceType,
      country.currency,
      form,
    );
    const existingRules = pricingByCurrency.get(country.currency) ?? [];
    const mutation = existingRules.length
      ? replacePricingRules
      : createPricingRules;

    mutation.mutate(payload, {
      onSuccess: (response) => {
        toast.success(response.message || "Pricing saved successfully");
      },
      onError: (error) => {
        toast.error(
          error instanceof Error ? error.message : "Failed to save pricing",
        );
      },
    });
  };

  const handleTogglePricingActive = (
    country: CountryConfig,
    pricing?: PricingRule,
  ) => {
    if (!appId || !selectedCreatedService) return;

    if (!pricing) {
      const form = pricingFormWithDefaults(getPricingForm(country.currency));
      const payload = buildPricingPayload(
        appId,
        selectedCreatedService.serviceType,
        country.currency,
        form,
      );

      createPricingRules.mutate(payload, {
        onSuccess: (response) => {
          toast.success(response.message || "Pricing created successfully");
          setPricingForms((current) => ({
            ...current,
            [country.currency]: form,
          }));
        },
        onError: (error) => {
          toast.error(
            error instanceof Error ? error.message : "Failed to create pricing",
          );
        },
      });
      return;
    }

    replacePricingRules.mutate(
      {
        appId,
        serviceType: selectedCreatedService.serviceType,
        currency: country.currency,
        pricings: [pricingRuleToInput(pricing, !pricing.isActive)],
      },
      {
        onSuccess: (response) => {
          toast.success(response.message || "Pricing updated successfully");
        },
        onError: (error) => {
          toast.error(
            error instanceof Error ? error.message : "Failed to update pricing",
          );
        },
      },
    );
  };

  const toggleCountryExpanded = (id: string) => {
    setCountries((prev) =>
      prev.map((c) => (c.id === id ? { ...c, expanded: !c.expanded } : c)),
    );
  };

  return (
    <>
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
            const createdService = createdServicesByType.get(s.type);
            const isCreated = Boolean(createdService);
            const checked = Boolean(createdService?.isActive);
            const isToggling =
              toggleServiceMutation.isPending &&
              toggleServiceMutation.variables?.serviceId === createdService?.id;
            return (
              <li
                key={s.type}
                className={clsx(
                  "flex items-center gap-3 border rounded-lg p-3",
                  selectedType === s.type
                    ? "border-[#0243EC] bg-[#F5F5F5]"
                    : "border-[#E4E7EC] hover:bg-[#F5F5F5]",
                )}
              >
                <label
                  className={clsx(
                    "shrink-0",
                    isToggling ? "cursor-wait" : "cursor-pointer",
                  )}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    disabled={!createdService || isToggling}
                    onChange={() => {
                      if (createdService) toggleService(createdService);
                    }}
                    className="hidden"
                  />
	                  <span
	                    className={clsx(
	                      "w-5 h-5 rounded flex items-center justify-center transition-colors",
	                      isToggling
	                        ? "bg-[#0243EC] text-white"
	                        : checked
	                        ? "bg-[#0243EC] text-white"
	                        : "border-2 border-[#E4E7EC] bg-white",
	                    )}
	                  >
	                    {isToggling ? (
	                      <FaSpinner className="h-3 w-3 animate-spin" />
	                    ) : (
	                      checked && <FaCheck className="w-3 h-3" />
	                    )}
	                  </span>
                </label>
                <button
                  type="button"
                  className={clsx(
                    "flex-1 min-w-0 text-left  transition-colors",
                  )}
                  onClick={() => handleSelectService(s)}
                >
                  <p className="text-sm font-semibold text-[#11151F]">
                    {s.name}
                  </p>
                  <p className="text-xs text-[#767680] mt-0.5">
                    {s.description}
                  </p>
                  <span
                    className={clsx(
	                      "mt-2 inline-flex rounded-full px-2.5 py-0.5 text-[0.625rem] font-semibold",
	                      isToggling && "bg-[#DBEAFE] text-[#1D4ED8]",
	                      !isCreated && "bg-[#F3F4F6] text-[#667085]",
	                      !isToggling &&
	                        isCreated &&
	                        checked &&
	                        "bg-[#D1FAE5] text-[#065F46]",
	                      !isToggling &&
	                        isCreated &&
	                        !checked &&
	                        "bg-[#FEE2E2] text-[#991B1B]",
	                    )}
	                  >
	                    {isToggling
	                      ? "Updating..."
	                      : !isCreated
	                      ? "Not created"
	                      : checked
	                        ? "Active"
                        : "Inactive"}
                  </span>
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
          {servicesQuery.isLoading ? (
            <div className="flex h-full items-center justify-center text-sm text-[#767680]">
              Loading services...
            </div>
          ) : servicesQuery.isError ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <p className="text-sm font-semibold text-[#11151F]">
                Failed to load services
              </p>
              <p className="max-w-md text-sm text-[#767680]">
                {servicesQuery.error instanceof Error
                  ? servicesQuery.error.message
                  : "Something went wrong while loading services."}
              </p>
              <button
                type="button"
                onClick={() => servicesQuery.refetch()}
                className="rounded-lg bg-[#11151F] px-4 py-2 text-sm font-semibold text-white"
              >
                Try again
              </button>
            </div>
          ) : !selectedCreatedService ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <p className="text-sm font-semibold text-[#11151F]">
                {selectedService?.name ?? "This service"} has not been created
                for this app.
              </p>
              <p className="max-w-md text-sm text-[#767680]">
                Create this service before configuring countries and pricing.
              </p>
              <button
                type="button"
                onClick={() =>
                  selectedService && setServiceToCreate(selectedService)
                }
                disabled={!appId}
                className="rounded-lg bg-[#11151F] px-5 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                Create Service
              </button>
            </div>
          ) : (
            <>
          <div className="mb-8 p-4 flex justify-between ">
            <div className="">
              <p className="text-sm font-semibold text-[#11151F]">
                Global Pricing
              </p>
              <p className="text-xs text-[#767680] mt-0.5">
                Use a singular pricing configuration across all countries.
              </p>
            </div>
            <div className="flex items-center">
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
            </div>
          </div>

          {pricingQuery.isLoading && (
            <div className="mb-4 rounded-lg border border-[#E4E7EC] bg-[#FAFAFA] px-4 py-3 text-sm text-[#767680]">
              Loading pricing rules...
            </div>
          )}

          <div className="space-y-4">
            {countries.map((c) => {
              const form = getPricingForm(c.currency);
              const existingRules = pricingByCurrency.get(c.currency) ?? [];
              const existingRule = existingRules[0];
              const pricingIsActive = Boolean(existingRule?.isActive);
              const hasRange =
                form.type === "FLAT_RANGE";
              const pricingValue =
                form.type === "FLAT_RANGE" || form.type === "FLAT_NO_RANGE"
                  ? form.flatAmount
                  : form.percentageValue;
              const isSavingPricing =
                (createPricingRules.isPending &&
                  createPricingRules.variables?.currency === c.currency) ||
                (replacePricingRules.isPending &&
                  replacePricingRules.variables?.currency === c.currency);
              const canTogglePricing = Boolean(existingRule);

              return (
              <div
                key={c.id}
                className="border border-[#E4E7EC] bg-[#F5F5F5] rounded-xl overflow-hidden"
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
                      {c.name} ({c.currency})
                    </p>
                    <p className="text-xs text-[#767680]">{c.description}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span
                      className={clsx(
                        "text-xs font-medium",
                        !canTogglePricing
                          ? "text-[#767680]"
                          : pricingIsActive
                            ? "text-amber-600"
                            : "text-[#767680]",
                      )}
                    >
                      {!canTogglePricing
                        ? "Not configured"
                        : pricingIsActive
                          ? "Active"
                          : "Inactive"}
                    </span>
                    <button
                      type="button"
                      disabled={isSavingPricing}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTogglePricingActive(c, existingRule);
                      }}
                      className={clsx(
                        "flex w-10 h-5 items-center rounded-full transition-colors disabled:cursor-not-allowed",
                        isSavingPricing
                          ? "bg-amber-500/70"
                          : pricingIsActive
                            ? "bg-amber-500"
                            : "bg-[#E4E7EC]",
                      )}
                    >
                      {isSavingPricing ? (
                        <FaSpinner className="ml-[0.1875rem] h-3.5 w-3.5 animate-spin text-white" />
                      ) : (
                        <span
                          className={clsx(
                            "block w-4 h-4 rounded-full bg-white shadow transition-transform",
                            pricingIsActive && "translate-x-6",
                            !pricingIsActive && "translate-x-0.5",
                          )}
                        />
                      )}
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
                    <>
                        <p className="text-xs text-[#767680] mt-3 mb-4">
                          This pricing only applies to when a user funds their
                          {` ${c.currency} account and will be settled to your corresponding ${c.currency} account`}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-xs font-medium text-[#344054] mb-1">
                              Pricing Type
                            </label>
                            <select
                              value={form.type}
                              onChange={(event) =>
                                updatePricingForm(c.currency, {
                                  type: event.target.value as PricingType | "",
                                })
                              }
                              className="w-full rounded-lg border  border-[#E4E7EC] bg-white px-3 py-2.5 text-sm text-[#344054] focus:outline-none focus:ring-2 focus:ring-[#0243EC]/20"
                            >
                              <option value="">Select Pricing Type</option>
                              {PRICING_TYPE_OPTIONS.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-[#344054] mb-1">
                              Pricing Value
                            </label>
                            <input
                              type="text"
                              value={pricingValue}
                              onChange={(event) =>
                                updatePricingForm(c.currency, {
                                  [form.type === "FLAT_RANGE" ||
                                  form.type === "FLAT_NO_RANGE"
                                    ? "flatAmount"
                                    : "percentageValue"]: event.target.value,
                                })
                              }
                              placeholder={
                                form.type === "PERCENTAGE_WITH_CAP" ||
                                form.type === "PERCENTAGE_NO_CAP"
                                  ? "Percentage"
                                  : `${c.currency} | Amount`
                              }
                              className="w-full rounded-lg border border-[#E4E7EC] bg-white px-3 py-2.5 text-sm placeholder:text-[#767680] focus:outline-none focus:ring-2 focus:ring-[#0243EC]/20"
                            />
                          </div>
                          {hasRange && (
                          <div>
                            <label className="block text-xs font-medium text-[#344054] mb-1">
                              Upper Range
                            </label>
                            <input
                              type="text"
                              value={form.upperRangeValue}
                              onChange={(event) =>
                                updatePricingForm(c.currency, {
                                  upperRangeValue: event.target.value,
                                })
                              }
                              placeholder={`${c.currency} | Amount`}
                              className="w-full rounded-lg border border-[#E4E7EC] bg-white px-3 py-2.5 text-sm placeholder:text-[#767680] focus:outline-none focus:ring-2 focus:ring-[#0243EC]/20"
                            />
                          </div>
                          )}
                          {hasRange && (
                          <div>
                            <label className="block text-xs font-medium text-[#344054] mb-1">
                              Lower Range
                            </label>
                            <input
                              type="text"
                              value={form.lowerRangeValue}
                              onChange={(event) =>
                                updatePricingForm(c.currency, {
                                  lowerRangeValue: event.target.value,
                                })
                              }
                              placeholder={`${c.currency} | Amount`}
                              className="w-full rounded-lg border border-[#E4E7EC] bg-white px-3 py-2.5 text-sm placeholder:text-[#767680] focus:outline-none focus:ring-2 focus:ring-[#0243EC]/20"
                            />
                          </div>
                          )}
                        </div>
                        {form.type === "PERCENTAGE_WITH_CAP" && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                              <label className="block text-xs font-medium text-[#344054] mb-1">
                                Lower Cap
                              </label>
                              <input
                                type="text"
                                value={form.lowerCapValue}
                                onChange={(event) =>
                                  updatePricingForm(c.currency, {
                                    lowerCapValue: event.target.value,
                                  })
                                }
                                placeholder={`${c.currency} | Amount`}
                                className="w-full rounded-lg border border-[#E4E7EC] bg-white px-3 py-2.5 text-sm placeholder:text-[#767680] focus:outline-none focus:ring-2 focus:ring-[#0243EC]/20"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-[#344054] mb-1">
                                Upper Cap
                              </label>
                              <input
                                type="text"
                                value={form.upperCapValue}
                                onChange={(event) =>
                                  updatePricingForm(c.currency, {
                                    upperCapValue: event.target.value,
                                  })
                                }
                                placeholder={`${c.currency} | Amount`}
                                className="w-full rounded-lg border border-[#E4E7EC] bg-white px-3 py-2.5 text-sm placeholder:text-[#767680] focus:outline-none focus:ring-2 focus:ring-[#0243EC]/20"
                              />
                            </div>
                          </div>
                        )}
                        <div className="mb-4">
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3">
                            <div>
                              <label className="block text-xs font-medium text-[#344054] mb-1">
                                Name this fee
                              </label>
                              <input
                                type="text"
                                value={form.title}
                                onChange={(event) =>
                                  updatePricingForm(c.currency, {
                                    title: event.target.value,
                                  })
                                }
                                className="w-full rounded-lg border border-[#E4E7EC] bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0243EC]/20"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-[#344054] mb-1">
                                Select Pricing Type
                              </label>
                              <select
                                value={form.type}
                                onChange={(event) =>
                                  updatePricingForm(c.currency, {
                                    type: event.target.value as PricingType | "",
                                  })
                                }
                                className="w-full rounded-lg border border-[#E4E7EC] bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0243EC]/20"
                              >
                                <option value="">Select Pricing Type</option>
                                {PRICING_TYPE_OPTIONS.map((option) => (
                                  <option
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-[#344054] mb-1">
                                Pricing Narration
                              </label>
                              <input
                                type="text"
                                value={form.description}
                                onChange={(event) =>
                                  updatePricingForm(c.currency, {
                                    description: event.target.value,
                                  })
                                }
                                placeholder="Pricing Narration"
                                className="w-full rounded-lg border border-[#E4E7EC] bg-white px-3 py-2.5 text-sm placeholder:text-[#767680] focus:outline-none focus:ring-2 focus:ring-[#0243EC]/20"
                              />
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleSavePricing(c)}
                          disabled={isSavingPricing}
                          className="rounded-lg bg-[#11151F] text-white text-sm font-medium px-6 py-2.5 hover:bg-[#1a1d28] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {isSavingPricing
                            ? "Saving..."
                            : existingRules.length
                              ? "Replace Pricing"
                              : "Save"}
                        </button>
                      </>
                  </div>
                )}
              </div>
              );
            })}
          </div>
            </>
          )}
        </div>
      </div>
    </div>
      {serviceToCreate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="text-lg font-bold text-[#11151F]">
              Create {serviceToCreate.name}?
            </h2>
            <p className="mt-2 text-sm text-[#767680]">
              This service has not been created for this app. Create it now to
              configure pricing and make it available for activation.
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setServiceToCreate(null)}
                disabled={createService.isPending}
                className="rounded-lg border border-[#E4E7EC] px-4 py-2 text-sm font-semibold text-[#344054] disabled:cursor-not-allowed disabled:opacity-60"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleCreateService}
                disabled={!appId || createService.isPending}
                className="rounded-lg bg-[#11151F] px-5 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {createService.isPending ? "Creating..." : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
