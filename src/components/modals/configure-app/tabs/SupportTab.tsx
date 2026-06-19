import { PrimaryButton } from "@/components/ui/PrimaryButton";
import type { SupportConfig } from "../config-data";

type SupportTabProps = {
  value: SupportConfig;
  onChange: (value: SupportConfig) => void;
  onPrevious: () => void;
  onNext: () => void;
  onSave: () => void;
  saving?: boolean;
};

export const SupportTab = ({
  value,
  onChange,
  onPrevious,
  onNext,
  onSave,
  saving,
}: SupportTabProps) => {
  const updateValue = (patch: Partial<SupportConfig>) => {
    onChange({ ...value, ...patch });
  };

  return (
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
            value={value.contact_email}
            onChange={(event) =>
              updateValue({ contact_email: event.target.value })
            }
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
            value={value.legal_email}
            onChange={(event) =>
              updateValue({ legal_email: event.target.value })
            }
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
            value={value.support_email}
            onChange={(event) =>
              updateValue({ support_email: event.target.value })
            }
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
            value={value.contact_phone_number}
            onChange={(event) =>
              updateValue({ contact_phone_number: event.target.value })
            }
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
            value={value.website}
            onChange={(event) => updateValue({ website: event.target.value })}
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
            value={value.instagram_handle}
            onChange={(event) =>
              updateValue({ instagram_handle: event.target.value })
            }
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
            value={value.x_handle}
            onChange={(event) => updateValue({ x_handle: event.target.value })}
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
            value={value.tiktok_handle}
            onChange={(event) =>
              updateValue({ tiktok_handle: event.target.value })
            }
            className="h-11 w-full rounded-xl border border-[#E5E7EB] bg-white px-3 text-sm outline-none"
          />
        </div>
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
