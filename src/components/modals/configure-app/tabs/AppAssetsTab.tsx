import { MobilePreviewPlaceholder } from "@/components/configure-app/MobilePreviewPlaceholder";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export const AppAssetsTab = () => (
  <div className="w-full max-w-6xl">
    <div className="grid grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)] items-start gap-y-10 gap-x-20">
      <div>
        <div className="mb-10 grid grid-cols-2 gap-8">
          <div>
            <label className="mb-2 block text-xs font-semibold text-[#767680]">
              Upload Logo for the App
            </label>
            <div className="flex h-44 w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[#D9DEF8] bg-[#F7F8FF]">
              <div className="mb-2 text-2xl text-[#9CA3AF]">☁️</div>
              <p className="text-xs text-[#4B5563]">
                Choose a file or drag &amp; drop it here
              </p>
              <button
                type="button"
                className="mt-2 rounded-full border border-[#111827] bg-white px-4 py-1.5 text-xs font-semibold text-[#111827] shadow-sm"
              >
                Browse File
              </button>
            </div>
          </div>
          <div>
            <label className="mb-2 block text-xs font-semibold text-[#767680]">
              Upload Logo favicon
            </label>
            <div className="flex h-44 w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[#D9DEF8] bg-[#F7F8FF]">
              <div className="mb-2 text-2xl text-[#9CA3AF]">☁️</div>
              <p className="text-xs text-[#4B5563]">
                Choose a file or drag &amp; drop it here
              </p>
              <button
                type="button"
                className="mt-2 rounded-full border border-[#111827] bg-white px-4 py-1.5 text-xs font-semibold text-[#111827] shadow-sm"
              >
                Browse File
              </button>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label className="mb-1 block text-xs font-semibold text-[#767680]">
            Site Description
          </label>
          <textarea
            rows={3}
            placeholder="Description of product"
            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#111827] outline-none resize-none"
          />
        </div>
        <div className="mb-2">
          <label className="mb-1 block text-xs font-semibold text-[#767680]">
            Primary Font Family
          </label>
          <div className="flex items-center gap-6">
            <select className="h-11 w-full max-w-xs rounded-xl border border-[#E5E7EB] bg-white px-3 text-sm text-[#111827] outline-none">
              <option value="">Select Font Family</option>
              <option value="axioforma">Axioforma</option>
            </select>
            <span className="text-base font-semibold text-[#111827]">
              Axioforma
            </span>
          </div>
        </div>
      </div>
      <div className="pt-2">
        <MobilePreviewPlaceholder title="Mobile Preview" />
      </div>
    </div>
    <div className="mt-8 flex gap-3">
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
