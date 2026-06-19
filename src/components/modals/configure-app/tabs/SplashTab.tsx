import { useRef } from "react";
import { SplashScreenPreview } from "@/components/configure-app/SplashScreenPreview";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import type { SplashScreenConfig } from "../config-data";

type SplashTabProps = {
  appName?: string;
  value: SplashScreenConfig;
  onChange: (value: SplashScreenConfig) => void;
  onPrevious: () => void;
  onNext: () => void;
  onSave: () => void;
  saving?: boolean;
};

export const SplashTab = ({
  appName = "Your App",
  value,
  onChange,
  onPrevious,
  onNext,
  onSave,
  saving,
}: SplashTabProps) => {
  const bgInputRef = useRef<HTMLInputElement | null>(null);
  const textInputRef = useRef<HTMLInputElement | null>(null);
  const bgColor = value.background_color;
  const textColor = value.text_color;

  const updateValue = (patch: Partial<SplashScreenConfig>) => {
    onChange({ ...value, ...patch });
  };

  return (
    <div className="w-full">
      <div className="grid  grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)] items-start gap-y-10 gap-x-20 ">
        <div className="space-y-6">
          <div className="flex gap-6">
            <div>
              <label className="mb-1 block text-xs font-semibold text-[#767680]">
                Pick a Background Colour
              </label>
              <div className="inline-block rounded-3xl border border-[#E5E7EB] bg-white p-4">
                <div
                  className="h-28 w-44 cursor-pointer rounded-2xl"
                  style={{ backgroundColor: bgColor }}
                  onClick={() => bgInputRef.current?.click()}
                />
                <div className="mt-4 flex items-center gap-2">
                  <div
                    className="h-8 flex-1 cursor-pointer rounded-md"
                    style={{ backgroundColor: bgColor }}
                    onClick={() => bgInputRef.current?.click()}
                  />
                  <button
                    type="button"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E5E7EB] bg-[#F3F4F6] text-xs font-semibold text-[#111827]"
                    onClick={() => bgInputRef.current?.click()}
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.70801 4.12516L5.49967 7.3335L2.29134 4.12516"
                        stroke="#111827"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <input
                  ref={bgInputRef}
                  type="color"
                  className="hidden"
                  value={bgColor}
                  onChange={(e) =>
                    updateValue({ background_color: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-[#767680]">
                Pick a Text Colour
              </label>
              <div className="inline-block rounded-3xl border border-[#E5E7EB] bg-white p-4">
                <div
                  className="flex h-28 w-44 cursor-pointer items-center justify-center rounded-2xl bg-white"
                  onClick={() => textInputRef.current?.click()}
                >
                  <span
                    className="text-3xl font-bold"
                    style={{ color: textColor }}
                  >
                    ABC
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <div
                    className="h-8 flex-1 cursor-pointer rounded-md"
                    style={{ backgroundColor: textColor }}
                    onClick={() => textInputRef.current?.click()}
                  />
                  <button
                    type="button"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E5E7EB] bg-[#F3F4F6] text-xs font-semibold text-[#111827]"
                    onClick={() => textInputRef.current?.click()}
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.70801 4.12516L5.49967 7.3335L2.29134 4.12516"
                        stroke="#111827"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <input
                  ref={textInputRef}
                  type="color"
                  className="hidden"
                  value={textColor}
                  onChange={(e) =>
                    updateValue({ text_color: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-[#767680]">
              Text Description
            </label>
            <textarea
              rows={3}
              placeholder="Enter any text or leave it empty"
              value={value.text_description}
              onChange={(event) =>
                updateValue({ text_description: event.target.value })
              }
              className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3 py-2 text-sm outline-none resize-none"
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          {/* <h3 className="mb-3 w-full text-left text-sm font-semibold text-[#111827]">
            Mobile Preview
          </h3> */}
          <SplashScreenPreview
            bgColor={bgColor}
            textColor={textColor}
            appName={appName}
            className="h-auto w-[250px] max-w-full"
          />
        </div>
      </div>

      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={onPrevious}
          className="rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-6 py-2 text-sm font-semibold text-[#111827]"
        >
          Previous
        </button>
        <PrimaryButton className="bg-[#111827] px-8" onClick={onNext}>
          Next
        </PrimaryButton>
        <button
          type="button"
          onClick={onSave}
          disabled={saving}
          className="rounded-lg border border-[#111827] px-6 py-2 text-sm font-semibold text-[#111827]"
        >
          {saving ? "Saving..." : "Save"}
        </button>
      </div>
    </div>
  );
};
