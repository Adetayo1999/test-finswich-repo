"use client";

import { useRef } from "react";
import { FiUploadCloud } from "react-icons/fi";
import toast from "react-hot-toast";
import { AppAssetsPreview } from "@/components/configure-app/AppAssetsPreview";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { useFileUpload } from "@/hooks/useFileUpload";
import { revokePreviewUrl } from "@/lib/preview-url";
import type { AppAssetsConfig } from "../config-data";

type AppAssetsTabProps = {
  appName?: string;
  value: AppAssetsConfig;
  onChange: (value: AppAssetsConfig) => void;
  onNext: () => void;
  onSave: () => void;
  saving?: boolean;
};

export const AppAssetsTab = ({
  appName,
  value,
  onChange,
  onNext,
  onSave,
  saving,
}: AppAssetsTabProps) => {
  const logoInputRef = useRef<HTMLInputElement | null>(null);
  const faviconInputRef = useRef<HTMLInputElement | null>(null);
  const logoUpload = useFileUpload();
  const faviconUpload = useFileUpload();

  const updateValue = (patch: Partial<AppAssetsConfig>) => {
    onChange({ ...value, ...patch });
  };

  const handleLogoChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    event.target.value = "";

    try {
      const url = await logoUpload.upload(file);
      revokePreviewUrl(value.app_logo);
      updateValue({ app_logo: url });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to upload logo",
      );
    }
  };

  const handleFaviconChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    event.target.value = "";

    try {
      const url = await faviconUpload.upload(file);
      revokePreviewUrl(value.app_favicon);
      updateValue({ app_favicon: url });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to upload favicon",
      );
    }
  };

  return (
    <div className="w-full max-w-6xl">
      <div className="grid grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)] items-start gap-x-20 gap-y-10">
        <div>
          <div className="mb-10 grid grid-cols-2 gap-8">
            <div>
              <label className="mb-2 block text-xs font-semibold text-[#767680]">
                Upload Logo for the App
              </label>
              <div
                role="button"
                tabIndex={0}
                onClick={() => !logoUpload.isUploading && logoInputRef.current?.click()}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    logoInputRef.current?.click();
                  }
                }}
                className="flex h-44 w-full cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[#D9DEF8] bg-[#F7F8FF]"
              >
                {value.app_logo ? (
                  <img
                    src={value.app_logo}
                    alt="Uploaded logo preview"
                    className="mb-2 h-16 w-16 rounded-lg object-contain"
                  />
                ) : (
                  <FiUploadCloud className="mb-2 h-10 w-10 text-[#5C5C60]" />
                )}
                <p className="text-center text-xs text-[#4B5563]">
                  {logoUpload.isUploading
                    ? `Uploading${logoUpload.progress > 0 ? ` (${logoUpload.progress}%)` : "..."}`
                    : "Choose a file or drag & drop it here"}
                </p>
                <button
                  type="button"
                  className="mt-3 rounded-full border border-[#111827] bg-white px-4 py-1.5 text-xs font-semibold text-[#111827] shadow-sm disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={logoUpload.isUploading}
                  onClick={(event) => {
                    event.stopPropagation();
                    logoInputRef.current?.click();
                  }}
                >
                  {logoUpload.isUploading ? "Uploading..." : "Browse File"}
                </button>
                <input
                  ref={logoInputRef}
                  type="file"
                  className="hidden"
                  accept="image/*"
                  disabled={logoUpload.isUploading}
                  onChange={handleLogoChange}
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold text-[#767680]">
                Upload Logo favicon
              </label>
              <div
                role="button"
                tabIndex={0}
                onClick={() =>
                  !faviconUpload.isUploading && faviconInputRef.current?.click()
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    faviconInputRef.current?.click();
                  }
                }}
                className="flex h-44 w-full cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[#D9DEF8] bg-[#F7F8FF]"
              >
                {value.app_favicon ? (
                  <img
                    src={value.app_favicon}
                    alt="Uploaded favicon preview"
                    className="mb-2 h-12 w-12 rounded-md object-contain"
                  />
                ) : (
                  <FiUploadCloud className="mb-2 h-10 w-10 text-[#5C5C60]" />
                )}
                <p className="text-center text-xs text-[#4B5563]">
                  {faviconUpload.isUploading
                    ? `Uploading${faviconUpload.progress > 0 ? ` (${faviconUpload.progress}%)` : "..."}`
                    : "Choose a file or drag & drop it here"}
                </p>
                <button
                  type="button"
                  className="mt-3 rounded-full border border-[#111827] bg-white px-4 py-1.5 text-xs font-semibold text-[#111827] shadow-sm disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={faviconUpload.isUploading}
                  onClick={(event) => {
                    event.stopPropagation();
                    faviconInputRef.current?.click();
                  }}
                >
                  {faviconUpload.isUploading ? "Uploading..." : "Browse File"}
                </button>
                <input
                  ref={faviconInputRef}
                  type="file"
                  className="hidden"
                  accept="image/*"
                  disabled={faviconUpload.isUploading}
                  onChange={handleFaviconChange}
                />
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
              value={value.site_description}
              onChange={(event) =>
                updateValue({ site_description: event.target.value })
              }
              className="w-full resize-none rounded-xl border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#111827] outline-none"
            />
          </div>
          <div className="mb-2">
            <label className="mb-1 block text-xs font-semibold text-[#767680]">
              Primary Font Family
            </label>
            <div className="flex items-center gap-6">
              <select
                value={value.primary_font_family}
                onChange={(event) =>
                  updateValue({ primary_font_family: event.target.value })
                }
                className="h-11 w-full max-w-xs rounded-xl border border-[#E5E7EB] bg-white px-3 text-sm text-[#111827] outline-none"
              >
                <option value="">Select Font Family</option>
                <option value="axioforma">Axioforma</option>
              </select>
              <span className="text-base font-semibold text-[#111827]">
                {value.primary_font_family || "Axioforma"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-2">
          <AppAssetsPreview
            faviconSrc={value.app_favicon}
            logoSrc={value.app_logo}
            appName={appName}
          />
        </div>
      </div>
      <div className="mt-8 flex gap-3">
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
