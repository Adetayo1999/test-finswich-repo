import { useState } from "react";
import clsx from "clsx";
import ModalWrapper from "../common/modal";
import { ModalCheckbox } from "../common/modal/form";
import { PrimaryButton } from "../ui/PrimaryButton";
import TemplatesIcon from "@/assets/prebuilt-img.svg";
import BuildUiIcon from "@/assets/build-ui.svg";
import OnPremIcon from "@/assets/on-premise-img.svg";
import appsSuccessImg from "@/assets/apps-success.png";

type PlanKey = "templates" | "custom-ui" | "on-premise";

type BenefitRow = {
  label: string;
  values: Record<PlanKey, "check" | "cross" | string>;
};

const BENEFITS: BenefitRow[] = [
  {
    label: "Hosting",
    values: {
      templates: "Free Hosting",
      "custom-ui": "check",
      "on-premise": "check",
    },
  },
  {
    label: "Customer Support",
    values: {
      templates: "check",
      "custom-ui": "check",
      "on-premise": "cross",
    },
  },
  {
    label: "Monthly subscription",
    values: {
      templates:
        "$1,000.00 monthly subscription for 10K customers. >10k user you pay $0.5 monthly per user",
      "custom-ui":
        "$800.00 monthly subscription for 10K customers. >10k user you pay $1 monthly per user",
      "on-premise":
        "$500.00 monthly subscription for 10K customers. >10k user you pay $0.2 monthly per user",
    },
  },
  {
    label: "Tech Support",
    values: {
      templates: "check",
      "custom-ui": "cross",
      "on-premise": "cross",
    },
  },
  {
    label: "Bug Fixes",
    values: {
      templates: "check",
      "custom-ui": "cross",
      "on-premise": "cross",
    },
  },
  {
    label: "Incremental Updates",
    values: {
      templates: "check",
      "custom-ui": "cross",
      "on-premise": "cross",
    },
  },
  {
    label: "Cybersecurity & Watch",
    values: {
      templates: "check",
      "custom-ui": "check",
      "on-premise": "cross",
    },
  },
  {
    label: "Avg. Deployment time",
    values: {
      templates:
        "Launch from 30min - 2 days depending on the readiness of your brand asset",
      "custom-ui": "Integration and testing can take an average of 4 weeks",
      "on-premise": "Integration and testing can take 2–3 months",
    },
  },
  {
    label: "License coverage",
    values: {
      templates: "Leverage the license of our partner institutions",
      "custom-ui": "Leverage the license of our partner institutions",
      "on-premise": "Leverage the license of our partner institutions",
    },
  },
  {
    label: "Integration Support",
    values: {
      templates: "cross",
      "custom-ui":
        "$1,000 for integration support. This includes setting up support channel on Telegram, Whatsapp, Slack",
      "on-premise":
        "$2,000 for integration support. This includes setting up support channel on Telegram, Whatsapp, Slack",
    },
  },
];

interface CreateAppModalProps {
  onClose?: () => void;
}

const CreateAppModal: React.FC<CreateAppModalProps> = ({ onClose }) => {
  const [step, setStep] = useState<"plans" | "form" | "success">("plans");
  const [expanded, setExpanded] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>("templates");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (label: string) => {
    setSelectedServices((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label],
    );
  };

  const renderBenefitValue = (
    _: PlanKey,
    value: BenefitRow["values"][PlanKey],
  ) => {
    if (value === "check" || value === "cross") {
      const isCheck = value === "check";
      return (
        <span
          className={clsx(
            "inline-flex h-5 w-5 items-center border border-[#434353] text-[#434353] justify-center rounded-full text-xs font-semibold",
            isCheck ? "bg-[#93E04B] " : "bg-[#FB9D9D87] ",
          )}
        >
          {isCheck ? "✓" : "✕"}
        </span>
      );
    }

    return <p className="text-xs text-[#4B5563] leading-snug">{value}</p>;
  };

  return (
    <ModalWrapper onClose={onClose}>
      <div className="w-full">
        <div className="mb-8 flex items-start justify-between">
          <div>
            {step !== "success" && (
              <h1 className="mb-1 text-[2rem] font-bold text-[#4F4F4F]">
                Create an App
              </h1>
            )}
            {step !== "success" && (
              <p className="text-sm text-[#2B2B3D]">
                How do you want to use Finswich?
              </p>
            )}
          </div>
        </div>

        {step === "plans" && (
          <>
            <div className="mb-8 grid grid-cols-3 gap-6">
              {/* Pre-built templates (recommended) */}
              <div
                className={clsx(
                  "relative rounded-3xl border px-6 pb-6 pt-10 bg-white cursor-pointer transition-shadow",
                  selectedPlan === "templates"
                    ? "border-[#5B26EF] shadow-[0_0_0_1px_#5B26EF]"
                    : "border-[#E5E7EB]",
                )}
                onClick={() => setSelectedPlan("templates")}
              >
                <div className="absolute -top-4 left-6 rounded-full bg-[#5B26EF] px-4 py-1 text-xs font-semibold text-white shadow-sm">
                  Recommended
                </div>
                <div className="mb-4">
                  <div className="flex gap-x-6 items-center mb-4">
                    <div className=" h-16 w-16 shrink-0">
                      <img
                        src={TemplatesIcon}
                        alt="Pre-built templates plan"
                        className="h-16 w-16"
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-[#606060] flex-1">
                      Pre-Built Templates
                    </h2>
                  </div>

                  <p className="mt-1 text-sm text-[#606060]">
                    I will select use pre-built templates on the platform to
                    launch my product.
                  </p>
                </div>
                <div className="mb-4">
                  <div className="inline-flex rounded-md bg-[#111827] px-4 py-2 text-sm font-semibold text-white">
                    $15,000.00
                  </div>
                </div>
                <div className="space-y-2">
                  <PrimaryButton
                    fullWidth
                    className="bg-[#5B26EF]"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPlan("templates");
                      setStep("form");
                    }}
                  >
                    Get Started
                  </PrimaryButton>
                  <button
                    type="button"
                    className="mt-1 w-full rounded-lg border border-[#5B26EF] px-4 py-2 text-sm font-semibold text-[#5B26EF]"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpanded((prev) => !prev);
                    }}
                  >
                    View all features
                  </button>
                </div>
              </div>

              {/* Build my own UI */}
              <div
                className={clsx(
                  "rounded-3xl border px-6 pb-6 pt-10 bg-white cursor-pointer transition-shadow",
                  selectedPlan === "custom-ui"
                    ? "border-[#5B26EF] shadow-[0_0_0_1px_#5B26EF]"
                    : "border-[#E5E7EB]",
                )}
                onClick={() => setSelectedPlan("custom-ui")}
              >
                <div className="mb-4">
                  <div className="flex gap-x-6 items-center mb-4">
                    <div className=" h-16 w-16">
                      <img
                        src={BuildUiIcon}
                        alt="Build my own UI plan"
                        className="h-16 w-16"
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-[#606060] flex-1">
                      Build my own UI
                    </h2>
                  </div>
                  <p className="mt-1 text-sm text-[#606060]">
                    Build your own frontend design on our API.
                    <span className="invisible">
                      {" "}
                      Lorem ipsum dolor sit amet.
                    </span>
                  </p>
                </div>
                <div className="mb-4">
                  <div className="inline-flex rounded-md bg-[#111827] px-4 py-2 text-sm font-semibold text-white">
                    $10,000.00
                  </div>
                </div>
                <PrimaryButton
                  fullWidth
                  className="bg-[#111827]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlan("custom-ui");
                    setStep("form");
                  }}
                >
                  Get Started
                </PrimaryButton>
              </div>

              {/* On-premise hosting */}
              <div
                className={clsx(
                  "rounded-3xl border px-6 pb-6 pt-10 bg-white cursor-pointer transition-shadow",
                  selectedPlan === "on-premise"
                    ? "border-[#5B26EF] shadow-[0_0_0_1px_#5B26EF]"
                    : "border-[#E5E7EB]",
                )}
                onClick={() => setSelectedPlan("on-premise")}
              >
                <div className="mb-4">
                  <div className="flex gap-x-6 items-center mb-4">
                    <div className="h-16 w-16">
                      <img
                        src={OnPremIcon}
                        alt="On-premise hosting plan"
                        className="h-16 w-16"
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-[#606060] flex-1">
                      On-premise hosting
                    </h2>
                  </div>

                  <p className="mt-1 text-sm text-[#606060]">
                    Download our open-source application, host on your premise
                    and customize.
                  </p>
                </div>
                <div className="mb-4">
                  <div className="inline-flex rounded-md bg-[#111827] px-4 py-2 text-sm font-semibold text-white">
                    Free
                  </div>
                </div>
                <PrimaryButton
                  fullWidth
                  className="bg-[#111827]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlan("on-premise");
                    setStep("form");
                  }}
                >
                  Get Started
                </PrimaryButton>
              </div>
            </div>

            {expanded && (
              <div className="mt-4 overflow-hidden rounded-3xl border border-[#EAECF0] bg-white">
                <table className="w-full text-sm">
                  <thead className="bg-[#F9FAFB] text-xs text-[#667085]">
                    <tr>
                      <th className="w-48 px-6 py-3 text-left font-medium">
                        Benefits
                      </th>
                      <th className="px-6 py-3 text-left font-medium">
                        Pre-Built Templates
                      </th>
                      <th className="px-6 py-3 text-left font-medium">
                        Build my own UI
                      </th>
                      <th className="px-6 py-3 text-left font-medium">
                        On-premise hosting
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {BENEFITS.map((row) => (
                      <tr key={row.label} className="border-t border-[#EAECF0]">
                        <td className="px-6 py-3 text-xs font-semibold text-[#111827]">
                          {row.label}
                        </td>
                        <td className="px-6 py-3 align-top">
                          {renderBenefitValue(
                            "templates",
                            row.values.templates,
                          )}
                        </td>
                        <td className="px-6 py-3 align-top">
                          {renderBenefitValue(
                            "custom-ui",
                            row.values["custom-ui"],
                          )}
                        </td>
                        <td className="px-6 py-3 align-top">
                          {renderBenefitValue(
                            "on-premise",
                            row.values["on-premise"],
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}

        {step === "form" && (
          <div className="mt-4 space-y-6">
            <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 items-start">
              {/* Left section */}
              <div className="space-y-6">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#767680]">
                    App Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your app name"
                    className="h-11 w-full rounded-xl border border-[#E5E7EB] bg-white px-3 text-sm text-[#111827] outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#767680]">
                    Company name (as registered)
                  </label>
                  <input
                    type="text"
                    placeholder="Enter company name"
                    className="h-11 w-full rounded-xl border border-[#E5E7EB] bg-white px-3 text-sm text-[#111827] outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#767680]">
                    Upload Logo for the App
                  </label>
                  <div className="flex h-40 w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[#D0D5DD] bg-[#F9FAFB] text-center">
                    <div className="mb-2 text-2xl text-[#9CA3AF]">☁️</div>
                    <p className="text-xs text-[#4B5563]">
                      Choose a file or drag &amp; drop it here
                    </p>
                    <button
                      type="button"
                      className="mt-3 rounded-lg bg-white px-4 py-1.5 text-xs font-semibold text-[#111827] shadow-sm"
                    >
                      Browse File
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#767680]">
                    App Description
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Description of product"
                    className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#111827] outline-none resize-none"
                  />
                </div>
              </div>

              {/* Right section */}
              <div className="space-y-4">
                <div className="mb-2 flex items-center gap-x-3">
                  <div className="border border-[#434353] shrink-0 flex justify-center items-center rounded-full bg-[#93E04B] h-6 w-6">
                    <svg
                      width="10"
                      height="7"
                      viewBox="0 0 10 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.572554 3.31934L2.19948 5.33359C2.61844 5.85229 3.39032 5.90451 3.87532 5.44695L9.04224 0.572404"
                        stroke="#434353"
                        strokeWidth="1.14458"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <p className="italic font-bold text-[#179E2B] text-xs mb-1">
                      URL is available
                    </p>
                    <p className="font-bold text-sm text-[#0F0F0F]">
                      https://app-name.bankiffy.com
                    </p>
                  </div>
                </div>
                {/* <div className="text-xs text-[#16A34A] mb-2">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#16A34A]">
                      <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
                    </span>
                    <span className="font-semibold">URL is available</span>
                  </div>
                  <p className="text-[11px] text-[#111827]">
                    https://app-name.bankiffy.com
                  </p>
                </div> */}

                <div className="px-6 py-6 bg-[#F8F8FF] rounded-xl">
                  <div className="flex  gap-x-4">
                    <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#33426F] ">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.63137 1.32706L13.1841 3.54813C13.4 3.63451 13.5728 3.89363 13.5728 4.12191V6.17025C13.5728 6.50959 13.2952 6.78722 12.9558 6.78722H1.85037C1.51103 6.78722 1.2334 6.50959 1.2334 6.17025V4.12191C1.2334 3.89363 1.40615 3.63451 1.62209 3.54813L7.17482 1.32706C7.29821 1.2777 7.50798 1.2777 7.63137 1.32706Z"
                          stroke="white"
                          strokeWidth="1.05766"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5728 13.5733H1.2334V11.7224C1.2334 11.3831 1.51103 11.1055 1.85037 11.1055H12.9558C13.2952 11.1055 13.5728 11.3831 13.5728 11.7224V13.5733Z"
                          stroke="white"
                          strokeWidth="1.05766"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.4668 11.1059V6.78711"
                          stroke="white"
                          strokeWidth="1.05766"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.93555 11.1059V6.78711"
                          stroke="white"
                          strokeWidth="1.05766"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.40332 11.1059V6.78711"
                          stroke="white"
                          strokeWidth="1.05766"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.87109 11.1059V6.78711"
                          stroke="white"
                          strokeWidth="1.05766"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.3398 11.1059V6.78711"
                          stroke="white"
                          strokeWidth="1.05766"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M0.616211 13.5732H14.1895"
                          stroke="white"
                          strokeWidth="1.05766"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.40202 5.24446C7.91313 5.24446 8.32747 4.83012 8.32747 4.31901C8.32747 3.80789 7.91313 3.39355 7.40202 3.39355C6.8909 3.39355 6.47656 3.80789 6.47656 4.31901C6.47656 4.83012 6.8909 5.24446 7.40202 5.24446Z"
                          stroke="white"
                          strokeWidth="1.05766"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#606060] mb-1.5">
                        Omanga Integrated Service
                      </h3>
                      <p className="text-xs text-[#606060]">
                        This is the name that will show when customers of other
                        financial institution on our network want to send money
                        to customers on your app through Finswich.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-1 py-3">
                  <p className="mb-3 text-xs font-semibold text-[#111827]">
                    Which of these services do you want to offer to your
                    customers?
                  </p>
                  <div className="flex flex-wrap gap-y-4 gap-x-4 text-xs text-[#111827]">
                    {[
                      "Bill & Utility",
                      "USD Virtual Card",
                      "Currency Swap",
                      "Crypto Deposit",
                      "E-Sim",
                      "E-commerce",
                      "Payment link",
                      "Invoicing",
                      "EUR Virtual Account",
                      "GBP Virtual Account",
                      "Local Wallets",
                      "Global Transfer",
                      "Card Funding",
                      "Account maintenance Charge",
                      "QR Payment",
                      "Request Payment API",
                      "What I need is not here",
                    ].map((label) => (
                      <ModalCheckbox
                        key={label}
                        label={label}
                        checked={selectedServices.includes(label)}
                        onChange={() => toggleService(label)}
                      />
                    ))}
                  </div>
                </div>

                <div className="px-1 py-2">
                  <p className="mb-2 text-xs font-semibold text-[#111827]">
                    If what you need is not in the above, tell us about it
                  </p>
                  <p className="mb-2 text-[11px] text-[#6B7280]">
                    If have a special use-case, you can select{" "}
                    <span className="font-semibold text-[#5B26EF]">
                      Request Payment API
                    </span>{" "}
                    this allow Fuspasy to provide you with Wallet service (local
                    &amp; global) while you use the Request Payment API to
                    engage in debiting user wallet.
                  </p>
                  <textarea
                    rows={3}
                    placeholder="Tell us about us"
                    className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#111827] outline-none resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex">
              <PrimaryButton
                className="bg-[#111827] text-sm!"
                onClick={() => setStep("success")}
              >
                Get Started
              </PrimaryButton>
            </div>
          </div>
        )}

        {step === "success" && (
          <div className="mt-10 flex flex-col items-center justify-center">
            <div className="mb-6 ">
              <img
                src={appsSuccessImg}
                alt="App created illustration"
                // className="h-24 w-24"
              />
            </div>
            <h1 className="text-[#4F4F4F] font-bold text-3xl mb-2.5">
              Created Successfully
            </h1>
            <p className="mb-3  text-[#606060] text-center max-w-md">
              Your App has been created successfully. Before your app can be
              published, you need to complete a few configurations.
            </p>
            <div className="mt-4 flex gap-x-5">
              <PrimaryButton className="px-10! bg-[#111827] ">
                Start Configuration
              </PrimaryButton>
              <button
                type="button"
                className="rounded-lg border border-[#111827] px-10 py-2 text-sm font-semibold text-[#111827] bg-white"
                onClick={onClose}
              >
                Skip, I&apos;ll do it later
              </button>
            </div>
          </div>
        )}
      </div>
    </ModalWrapper>
  );
};

export default CreateAppModal;
