import { useRef, useState } from "react";
import { MobilePreviewPlaceholder } from "@/components/configure-app/MobilePreviewPlaceholder";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export const SplashTab = () => {
  const [bgColor, setBgColor] = useState("#080C24");
  const [textColor, setTextColor] = useState("#2563EB");

  const bgInputRef = useRef<HTMLInputElement | null>(null);
  const textInputRef = useRef<HTMLInputElement | null>(null);

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
                  onChange={(e) => setBgColor(e.target.value)}
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
                  onChange={(e) => setTextColor(e.target.value)}
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
              className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3 py-2 text-sm outline-none resize-none"
            />
          </div>
        </div>

        <MobilePreviewPlaceholder title="Mobile Preview">
          <div className="flex flex-col items-center gap-4">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-xl border-2 border-dashed border-white/30 bg-white/10"
              style={{ backgroundColor: bgColor }}
            >
              <span className="text-xs text-white/80">Your LOGO</span>
            </div>
            <p className="text-center text-xs" style={{ color: textColor }}>
              Powered by {"{App Name}"}
            </p>
          </div>
        </MobilePreviewPlaceholder>
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
};
