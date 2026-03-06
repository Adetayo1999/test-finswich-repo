import { PrimaryButton } from "@/components/ui/PrimaryButton";

export const SupportTab = () => (
  <div className="w-full">
    <div className="grid max-w-3xl grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <label className="mb-1 block text-xs font-semibold text-[#767680]">
            Contact Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="h-11 w-full rounded-xl border border-[#E5E7EB] bg-white px-3 text-sm outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-[#767680]">
            Legal Email
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="h-11 w-full rounded-xl border border-[#E5E7EB] bg-white px-3 text-sm outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-[#767680]">
            Support Email
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="h-11 w-full rounded-xl border border-[#E5E7EB] bg-white px-3 text-sm outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-[#767680]">
            Contact Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter Phone"
            className="h-11 w-full rounded-xl border border-[#E5E7EB] bg-white px-3 text-sm outline-none"
          />
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <label className="mb-1 block text-xs font-semibold text-[#767680]">
            Website
          </label>
          <input
            type="url"
            placeholder="Enter website url"
            className="h-11 w-full rounded-xl border border-[#E5E7EB] bg-white px-3 text-sm outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-[#767680]">
            IG Handle
          </label>
          <input
            type="text"
            placeholder="Enter handle"
            className="h-11 w-full rounded-xl border border-[#E5E7EB] bg-white px-3 text-sm outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-[#767680]">
            X handle
          </label>
          <input
            type="text"
            placeholder="Enter handle"
            className="h-11 w-full rounded-xl border border-[#E5E7EB] bg-white px-3 text-sm outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-[#767680]">
            Tiktok Handle
          </label>
          <input
            type="text"
            placeholder="Enter handle"
            className="h-11 w-full rounded-xl border border-[#E5E7EB] bg-white px-3 text-sm outline-none"
          />
        </div>
      </div>
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
