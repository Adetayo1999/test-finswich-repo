import { useState } from "react";
import clsx from "clsx";
import { SimpleWysiwyg } from "@/components/configure-app/SimpleWysiwyg";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const SAMPLE_COPY = `
  <h2 style="font-size: 20px; line-height: 1.5; font-weight: 700; color: #111827; margin-bottom: 20px;">Input Policy</h2>
  <p style="margin-bottom: 24px;">The sun had barely begun its ascent, casting a pale, ethereal glow over the sprawling cityscape of NeoLux. X_AE_B-22 had spent the night in a state of deep computational analysis, sifting through the myriad data streams that defined the pulse of the city.</p>
  <p style="margin-bottom: 24px;">The quiet hum of its processors was the only sound in the dimly lit control room. Suddenly, an encrypted transmission broke through the digital silence, bearing the hallmark of a high-priority message from an unknown source.</p>
  <p style="margin-bottom: 24px;">The message contained coordinates, leading X_AE_B-22 to an obscure sector of NeoLux rarely ventured into by the city's inhabitants. Intrigued, and bound by its core directive to protect and serve, X_AE_B-22 embarked on the journey.</p>
  <p>Upon reaching the coordinates, X_AE_B-22 found itself standing before a dilapidated chapel, a relic from centuries past.</p>
`;

export const PolicyTermsTab = () => (
  <div className="w-full max-w-295">
    <div className="space-y-12">
      <DocumentSection
        title="Policy"
        urlPrompt="Enter URL to your Privacy Policy"
        urlLabel="Privacy Policy URL"
      />
      <DocumentSection
        title="Terms & Conditions"
        urlPrompt="Enter URL to your Terms & Condition"
        urlLabel="Terms & Condition URL"
      />
    </div>
    <div className="mt-8 flex gap-3">
      <button
        type="button"
        className="rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-6 py-2 text-sm font-semibold text-[#111827]"
      >
        Previous
      </button>
      <PrimaryButton className="bg-[#111827] px-8">Next</PrimaryButton>
      <button
        type="button"
        className="rounded-lg border border-[#111827] px-6 py-2 text-sm font-semibold text-[#111827]"
      >
        Save
      </button>
    </div>
  </div>
);

interface DocumentSectionProps {
  title: string;
  urlPrompt: string;
  urlLabel: string;
}

const DocumentSection = ({
  title,
  urlPrompt,
  urlLabel,
}: DocumentSectionProps) => {
  const [format, setFormat] = useState<"standard" | "aside" | "link">(
    "standard",
  );

  return (
    <section className="space-y-8">
      <div className="rounded-2xl bg-[#F8FAFC] px-12 py-8">
        <div className="grid grid-cols-[minmax(0,1.25fr)_minmax(280px,1fr)] items-center gap-4">
          <div>
            <label className="mb-3 block text-sm font-medium text-[#3F3F46]">
              {urlPrompt}
            </label>
            <input
              type="url"
              placeholder="Enter URL"
              className="h-11 w-full rounded-xl border border-[#D9DDE5] bg-white px-4 text-sm text-[#111827] outline-none"
            />
          </div>
          <div className="flex items-center justify-between gap-4 pt-6">
            <div>
              <p className="text-sm text-[#A1A1AA]">{urlLabel}</p>
              <p className="text-xl font-semibold text-[#18181B]">
                https://store.storak.com/yourusername
              </p>
            </div>
            <CircleIconButton>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.16663 10.8333L15.8333 4.16663"
                  stroke="#111827"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <path
                  d="M15.8334 4.16663L11.6667 15.8333L9.16675 10.8333L4.16675 8.33329L15.8334 4.16663Z"
                  stroke="#111827"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
            </CircleIconButton>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="h-px flex-1 bg-[#E5E7EB]" />
        <span className="text-lg font-semibold tracking-[0.16em] text-[#3F3F46]">
          OR
        </span>
        <div className="h-px flex-1 bg-[#E5E7EB]" />
      </div>

      <div className="rounded-[28px] bg-white px-5 py-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827]">
            {title}
          </h2>
          <div className="flex items-center gap-3">
            <CircleIconButton>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                  stroke="#6B7280"
                  strokeWidth="1.7"
                />
                <path
                  d="M16.1667 10.0001C16.1667 10.6084 15.575 11.1084 15.4083 11.6751C15.2333 12.2667 15.4083 13.0251 15.0917 13.5667C14.7667 14.1251 13.9917 14.2917 13.5417 14.7417C13.0917 15.1917 12.925 15.9667 12.3667 16.2917C11.825 16.6084 11.0667 16.4334 10.475 16.6084C9.90833 16.7751 9.40833 17.3667 8.8 17.3667C8.19167 17.3667 7.69167 16.7751 7.125 16.6084C6.53333 16.4334 5.775 16.6084 5.23333 16.2917C4.675 15.9667 4.50833 15.1917 4.05833 14.7417C3.60833 14.2917 2.83333 14.1251 2.50833 13.5667C2.19167 13.0251 2.36667 12.2667 2.19167 11.6751C2.025 11.1084 1.43333 10.6084 1.43333 10.0001C1.43333 9.39175 2.025 8.89175 2.19167 8.32508C2.36667 7.73341 2.19167 6.97508 2.50833 6.43341C2.83333 5.87508 3.60833 5.70841 4.05833 5.25841C4.50833 4.80841 4.675 4.03341 5.23333 3.70841C5.775 3.39175 6.53333 3.56675 7.125 3.39175C7.69167 3.22508 8.19167 2.63341 8.8 2.63341C9.40833 2.63341 9.90833 3.22508 10.475 3.39175C11.0667 3.56675 11.825 3.39175 12.3667 3.70841C12.925 4.03341 13.0917 4.80841 13.5417 5.25841C13.9917 5.70841 14.7667 5.87508 15.0917 6.43341C15.4083 6.97508 15.2333 7.73341 15.4083 8.32508C15.575 8.89175 16.1667 9.39175 16.1667 10.0001Z"
                  stroke="#6B7280"
                  strokeWidth="1.4"
                />
              </svg>
            </CircleIconButton>
            <CircleIconButton>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 5.25H14.25"
                  stroke="#6B7280"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M7.5 8.25V12"
                  stroke="#6B7280"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M10.5 8.25V12"
                  stroke="#6B7280"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M5.25 5.25V14.25C5.25 14.6642 5.58579 15 6 15H12C12.4142 15 12.75 14.6642 12.75 14.25V5.25"
                  stroke="#6B7280"
                  strokeWidth="1.6"
                />
                <path
                  d="M7.125 5.25V3.75C7.125 3.33579 7.46079 3 7.875 3H10.125C10.5392 3 10.875 3.33579 10.875 3.75V5.25"
                  stroke="#6B7280"
                  strokeWidth="1.6"
                />
              </svg>
            </CircleIconButton>
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111B47] text-white"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 4.16663V15.8333"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M4.16675 10H15.8334"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-[280px_minmax(0,1fr)] gap-6">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-[0px_8px_24px_rgba(16,24,40,0.04)]">
              <div className="flex items-center justify-between border-b border-[#E5E7EB] px-6 py-5">
                <h3 className="text-[18px] font-semibold text-[#111827]">
                  Publish
                </h3>
                <ChevronUp />
              </div>
              <div className="space-y-4 px-6 py-5 text-[15px] text-[#374151]">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <RowDocIcon />
                    <span>Status: Draft</span>
                  </div>
                  <button
                    type="button"
                    className="text-sm font-semibold text-[#7C3AED]"
                  >
                    Edit
                  </button>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <RowEyeIcon />
                    <span>Visibility: Public</span>
                  </div>
                  <button
                    type="button"
                    className="text-sm font-semibold text-[#7C3AED]"
                  >
                    Edit
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3 border-t border-[#E5E7EB] px-6 py-5">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-6 py-2.5 text-sm font-semibold text-[#52525B]"
                >
                  Save Draft
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-[#9333EA] px-6 py-2.5 text-sm font-semibold text-white"
                >
                  Publish
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white shadow-[0px_8px_24px_rgba(16,24,40,0.04)]">
              <div className="flex items-center justify-between border-b border-[#E5E7EB] px-6 py-5">
                <h3 className="text-[18px] font-semibold text-[#111827]">
                  Format
                </h3>
                <ChevronUp />
              </div>
              <div className="space-y-4 px-6 py-5">
                <FormatOption
                  label="Standard"
                  icon={<PinIcon />}
                  active={format === "standard"}
                  onClick={() => setFormat("standard")}
                />
                <FormatOption
                  label="Aside"
                  icon={<AsideIcon />}
                  active={format === "aside"}
                  onClick={() => setFormat("aside")}
                />
                <FormatOption
                  label="Link"
                  icon={<LinkIcon />}
                  active={format === "link"}
                  onClick={() => setFormat("link")}
                />
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-center justify-between rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-3 shadow-[0px_8px_24px_rgba(16,24,40,0.04)]">
              <span className="text-[20px] font-medium text-[#18181B]">
                Legend Of X, Part 3
              </span>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full text-[#9CA3AF]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.75 2.25011C12.9489 2.0512 13.2187 1.93945 13.5 1.93945C13.7813 1.93945 14.0511 2.0512 14.25 2.25011L15.75 3.75011C15.9489 3.94903 16.0607 4.21881 16.0607 4.50011C16.0607 4.78142 15.9489 5.0512 15.75 5.25011L6 15.0001L2.25 15.7501L3 12.0001L12.75 2.25011Z"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <SimpleWysiwyg
              placeholder={`Write your ${title.toLowerCase()} here...`}
              minHeight="520px"
              defaultContent={SAMPLE_COPY}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface FormatOptionProps {
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

const FormatOption = ({ label, icon, active, onClick }: FormatOptionProps) => (
  <button
    type="button"
    onClick={onClick}
    className="flex w-full items-center justify-between text-left"
  >
    <div className="flex items-center gap-3 text-[15px] text-[#374151]">
      {icon}
      <span>{label}</span>
    </div>
    <span
      className={clsx(
        "flex h-6 w-6 items-center justify-center rounded-full border",
        active ? "border-[#C084FC] bg-white" : "border-[#E5E7EB] bg-white",
      )}
    >
      {active && <span className="h-3 w-3 rounded-full bg-[#7C3AED]" />}
    </span>
  </button>
);

const CircleIconButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E7E7EC] bg-[#FAFAFA]"
  >
    {children}
  </button>
);

const ChevronUp = () => (
  <svg
    width="16"
    height="10"
    viewBox="0 0 16 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 8L8 2L14 8"
      stroke="#9CA3AF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RowDocIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 2.25H5.25C4.42157 2.25 3.75 2.92157 3.75 3.75V14.25C3.75 15.0784 4.42157 15.75 5.25 15.75H12.75C13.5784 15.75 14.25 15.0784 14.25 14.25V6L10.5 2.25Z"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 2.25V6H14.25"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RowEyeIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 9C2.7 5.625 5.475 3.75 9 3.75C12.525 3.75 15.3 5.625 16.5 9C15.3 12.375 12.525 14.25 9 14.25C5.475 14.25 2.7 12.375 1.5 9Z"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z"
      stroke="#9CA3AF"
      strokeWidth="1.5"
    />
  </svg>
);

const PinIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.625 2.25L15.75 6.375L12.75 7.125L10.5 9.375L8.625 7.5L10.875 5.25L11.625 2.25Z"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 10.5L3.75 14.25"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const AsideIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2.25"
      y="3"
      width="13.5"
      height="12"
      rx="2"
      stroke="#9CA3AF"
      strokeWidth="1.5"
    />
    <path
      d="M6 6.75H12"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M6 9H12"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M6 11.25H9.75"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const LinkIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.125 10.875L10.875 7.125"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M6 12.75H4.875C3.21815 12.75 1.875 11.4069 1.875 9.75C1.875 8.09315 3.21815 6.75 4.875 6.75H6"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 6.75H13.125C14.7819 6.75 16.125 8.09315 16.125 9.75C16.125 11.4069 14.7819 12.75 13.125 12.75H12"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
