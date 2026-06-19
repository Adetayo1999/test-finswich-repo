import { useRef, useState } from "react";
import clsx from "clsx";
import { FiUploadCloud, FiX } from "react-icons/fi";
import toast from "react-hot-toast";
import { OnboardingScreenPreview } from "@/components/configure-app/OnboardingScreenPreview";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { useFileUpload } from "@/hooks/useFileUpload";
import { revokePreviewUrl } from "@/lib/preview-url";
import type { ConfigureAppConfigData } from "../config-data";
import {
  createOnboardingSlide,
  revokeSlideImage,
  type OnboardingSlideConfig,
} from "./onboarding-slide";

type OnboardingTabProps = {
  value: ConfigureAppConfigData["onboarding"];
  onChange: (value: ConfigureAppConfigData["onboarding"]) => void;
  onPrevious: () => void;
  onNext: () => void;
  onSave: () => void;
  saving?: boolean;
};

export const OnboardingTab = ({
  value,
  onChange,
  onPrevious,
  onNext,
  onSave,
  saving,
}: OnboardingTabProps) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const slides = value.slides.length > 0 ? value.slides : [createOnboardingSlide()];
  const activeSlide = slides[activeSlideIndex];

  const bgPrimaryInputRef = useRef<HTMLInputElement | null>(null);
  const bgSecondaryInputRef = useRef<HTMLInputElement | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const textPrimaryInputRef = useRef<HTMLInputElement | null>(null);
  const textSecondaryInputRef = useRef<HTMLInputElement | null>(null);
  const btnPrimaryInputRef = useRef<HTMLInputElement | null>(null);
  const btnSecondaryInputRef = useRef<HTMLInputElement | null>(null);
  const btnTextInputRef = useRef<HTMLInputElement | null>(null);
  const imageUpload = useFileUpload();

  const setSlides = (getNextSlides: (slides: OnboardingSlideConfig[]) => OnboardingSlideConfig[]) => {
    onChange({ slides: getNextSlides(slides) });
  };

  const updateActiveSlide = (patch: Partial<OnboardingSlideConfig>) => {
    setSlides((previous) =>
      previous.map((slide, index) =>
        index === activeSlideIndex ? { ...slide, ...patch } : slide,
      ),
    );
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    event.target.value = "";

    try {
      const url = await imageUpload.upload(file);
      revokePreviewUrl(activeSlide.uploadedImage);
      updateActiveSlide({ uploadedImage: url });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to upload image",
      );
    }
  };

  const handleAddSlide = () => {
    setSlides((previous) => [...previous, createOnboardingSlide()]);
    setActiveSlideIndex(slides.length);
  };

  const handleRemoveSlide = (index: number) => {
    if (slides.length <= 1) return;

    const slideToRemove = slides[index];
    revokeSlideImage(slideToRemove);

    setSlides((previous) => previous.filter((_, slideIndex) => slideIndex !== index));
    setActiveSlideIndex((previous) => {
      if (previous > index) return previous - 1;
      if (previous === index) return Math.max(0, previous - 1);
      return previous;
    });
  };

  const handlePreviousSlide = () => {
    if (activeSlideIndex === 0) {
      onPrevious();
      return;
    }
    setActiveSlideIndex((previous) => previous - 1);
  };

  const handleNextSlide = () => {
    if (activeSlideIndex === slides.length - 1) {
      onNext();
      return;
    }
    setActiveSlideIndex((previous) => previous + 1);
  };

  if (!activeSlide) return null;

  const {
    titleText,
    subtitleText,
    buttonText,
    bgPrimaryColor,
    bgSecondaryColor,
    textPrimaryColor,
    textSecondaryColor,
    buttonPrimaryColor,
    buttonSecondaryColor,
    buttonTextColor,
    uploadedImage,
  } = activeSlide;

  return (
    <div className="w-full">
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <div className="inline-flex flex-wrap items-center gap-1 rounded-full border border-[#E5E7EB] bg-white px-2 py-1">
          {slides.map((slide, index) => (
            <div key={slide.id} className="inline-flex items-center">
              <button
                type="button"
                onClick={() => setActiveSlideIndex(index)}
                className={clsx(
                  "rounded-full px-6 py-2 text-sm font-semibold transition",
                  activeSlideIndex === index
                    ? "bg-[#111827] text-white"
                    : "text-[#6B7280]",
                )}
              >
                Slide {index + 1}
              </button>
              {slides.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveSlide(index)}
                  aria-label={`Remove slide ${index + 1}`}
                  className="ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full text-[#6B7280] transition hover:bg-[#FEE2E2] hover:text-[#DC2626]"
                >
                  <FiX className="h-4 w-4" />
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={handleAddSlide}
          className="rounded-full bg-[#111827] px-6 py-2 text-sm font-semibold text-white"
        >
          + Add Slide
        </button>
      </div>
      <div className="grid grid-cols-[1fr_auto] gap-10 items-start">
        <div className="space-y-6">
          <div>
            <div className="mb-2 flex gap-x-6">
              <label className="w-50 shrink-0 text-xs font-semibold text-[#767680]">
                Pick a Background Colour
              </label>
              <label className="w-56 shrink-0 text-xs font-semibold text-[#767680]">
                Upload Image
              </label>
              <div className="flex-1" aria-hidden />
            </div>
            <div className="flex items-stretch gap-x-6">
              <div className="inline-flex w-50 shrink-0 flex-col rounded-3xl border border-[#E5E7EB] bg-white p-4">
                <div className="space-y-3 text-[11px] text-[#6B7280]">
                  <div className="flex flex-col gap-2">
                    <span className="">Primary</span>
                    <div className="flex flex-1 items-center gap-2">
                      <div
                        className="h-8 flex-1 cursor-pointer rounded-md"
                        style={{ backgroundColor: bgPrimaryColor }}
                        onClick={() => bgPrimaryInputRef.current?.click()}
                      />
                      <button
                        type="button"
                        className="flex shrink-0  h-8 w-8 items-center justify-center rounded-lg border border-[#E5E7EB] bg-[#F3F4F6] text-xs font-semibold text-[#111827]"
                        onClick={() => bgPrimaryInputRef.current?.click()}
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
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="">Secondary</span>
                    <div className="flex flex-1 items-center gap-2">
                      <div
                        className="h-8 flex-1 cursor-pointer rounded-md"
                        style={{ backgroundColor: bgSecondaryColor }}
                        onClick={() => bgSecondaryInputRef.current?.click()}
                      />
                      <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E5E7EB] bg-[#F3F4F6] text-xs font-semibold text-[#111827]"
                        onClick={() => bgSecondaryInputRef.current?.click()}
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
                  </div>
                  <input
                    ref={bgPrimaryInputRef}
                    type="color"
                    className="hidden"
                    value={bgPrimaryColor}
                    onChange={(e) =>
                      updateActiveSlide({ bgPrimaryColor: e.target.value })
                    }
                  />
                  <input
                    ref={bgSecondaryInputRef}
                    type="color"
                    className="hidden"
                    value={bgSecondaryColor}
                    onChange={(e) =>
                      updateActiveSlide({ bgSecondaryColor: e.target.value })
                    }
                  />
                </div>
              </div>

              <div
                role="button"
                tabIndex={0}
                aria-label="Upload onboarding image"
                onClick={() =>
                  !imageUpload.isUploading && imageInputRef.current?.click()
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter") imageInputRef.current?.click();
                }}
                className="flex w-56 shrink-0 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[#D9DEF8] bg-[#F7F8FF] px-4 py-6"
              >
                {uploadedImage ? (
                  <img
                    src={uploadedImage}
                    alt="Uploaded onboarding illustration"
                    className="mb-2 max-h-24 w-full object-contain"
                  />
                ) : (
                  <FiUploadCloud className="mb-2 h-10 w-10 text-[#5C5C60]" />
                )}
                <p className="text-center text-xs text-[#4B5563]">
                  {imageUpload.isUploading
                    ? `Uploading${imageUpload.progress > 0 ? ` (${imageUpload.progress}%)` : "..."}`
                    : "Choose a file or drag & drop it here"}
                </p>
                <button
                  type="button"
                  className="mt-3 rounded-full border border-[#111827] bg-white px-4 py-1.5 text-xs font-semibold text-[#111827] shadow-sm disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={imageUpload.isUploading}
                  onClick={(event) => {
                    event.stopPropagation();
                    imageInputRef.current?.click();
                  }}
                >
                  {imageUpload.isUploading ? "Uploading..." : "Browse File"}
                </button>
                <input
                  key={activeSlide.id}
                  ref={imageInputRef}
                  type="file"
                  className="hidden"
                  accept="image/*"
                  disabled={imageUpload.isUploading}
                  onChange={handleImageChange}
                />
              </div>

              <div
                className="flex flex-1 flex-col justify-center rounded-xl px-14 py-6"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${bgPrimaryColor}, ${bgSecondaryColor})`,
                }}
              >
                <h3
                  className="mb-2 text-3xl font-semibold"
                  style={{ color: textPrimaryColor }}
                >
                  {titleText.trim() || "Title Text here"}
                </h3>
                <p className="text-lg" style={{ color: textSecondaryColor }}>
                  {subtitleText.trim() ||
                    "Color of subtitle text here and more can be here"}
                </p>
              </div>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-[#767680]">
              Pick a Text Colour
            </label>
            <div className="flex items-start gap-6">
              <div className="inline-block rounded-3xl border border-[#E5E7EB] bg-white p-4 w-50 shrink-0">
                <div className="space-y-3 text-[11px] text-[#6B7280]">
                  <div className="flex flex-col gap-2">
                    <span className="w-16">Primary</span>
                    <div className="flex flex-1 items-center gap-2">
                      <div
                        className="h-8 flex-1 cursor-pointer rounded-md"
                        style={{ backgroundColor: textPrimaryColor }}
                        onClick={() => textPrimaryInputRef.current?.click()}
                      />
                      <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E5E7EB] bg-[#F3F4F6] text-xs font-semibold text-[#111827]"
                        onClick={() => textPrimaryInputRef.current?.click()}
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
                  </div>
                  <input
                    ref={textPrimaryInputRef}
                    type="color"
                    className="hidden"
                    value={textPrimaryColor}
                    onChange={(e) =>
                      updateActiveSlide({ textPrimaryColor: e.target.value })
                    }
                  />
                  <div className="flex flex-col gap-2">
                    <span className="w-16">Secondary</span>
                    <div className="flex flex-1 items-center gap-2">
                      <div
                        className="h-8 flex-1 cursor-pointer rounded-md"
                        style={{ backgroundColor: textSecondaryColor }}
                        onClick={() => textSecondaryInputRef.current?.click()}
                      />
                      <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E5E7EB] bg-[#F3F4F6] text-xs font-semibold text-[#111827]"
                        onClick={() => textSecondaryInputRef.current?.click()}
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
                  </div>
                  <input
                    ref={textSecondaryInputRef}
                    type="color"
                    className="hidden"
                    value={textSecondaryColor}
                    onChange={(e) =>
                      updateActiveSlide({ textSecondaryColor: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)_auto_auto] items-center gap-4">
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-[#767680]">
                      Text Title
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Text title"
                      value={titleText}
                      onChange={(event) =>
                        updateActiveSlide({ titleText: event.target.value })
                      }
                      className="h-11 w-full rounded-xl border border-[#E5E7EB] bg-white px-3 text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-[#767680]">
                      Button Text
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Button Text"
                      value={buttonText}
                      onChange={(event) =>
                        updateActiveSlide({ buttonText: event.target.value })
                      }
                      className="h-11 w-full rounded-xl border border-[#E5E7EB] bg-white px-3 text-sm outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    className="mt-5 inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${buttonPrimaryColor}, ${buttonSecondaryColor})`,
                      color: buttonTextColor,
                    }}
                  >
                    {buttonText.trim() || "Get Started"}
                  </button>
                  <button
                    type="button"
                    className="mt-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#182FFF] bg-white text-[#111827]"
                  >
                    <svg
                      width="9"
                      height="8"
                      viewBox="0 0 9 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.60481 3.56638C8.60481 3.76856 8.53554 3.93705 8.397 4.07184L5.54393 6.9193C5.40165 7.06158 5.24253 7.13272 5.06655 7.13272C4.86436 7.13272 4.70149 7.07094 4.57793 6.94738C4.45437 6.82008 4.39259 6.66469 4.39259 6.48123C4.39259 6.37639 4.41132 6.28466 4.44876 6.20603C4.48994 6.12366 4.54236 6.05252 4.60601 5.99261L5.499 5.09401L6.99855 3.72925L7.2906 4.15609L5.51585 4.25718H0.71393C0.500511 4.25718 0.328278 4.19353 0.197232 4.06623C0.066185 3.93893 0.000661682 3.77231 0.000661682 3.56638C0.000661682 3.36419 0.066185 3.19945 0.197232 3.07215C0.328278 2.94484 0.500511 2.88119 0.71393 2.88119H5.51585L7.2906 2.98229L6.99855 3.40912L5.499 2.04437L4.60601 1.14014C4.54236 1.08024 4.48994 1.01097 4.44876 0.932342C4.41132 0.84997 4.39259 0.756365 4.39259 0.651528C4.39259 0.468063 4.45437 0.314551 4.57793 0.190993C4.70149 0.0636905 4.86436 3.92869e-05 5.06655 3.92869e-05C5.24253 3.92869e-05 5.40165 0.0711789 5.54393 0.213458L8.397 3.06091C8.53554 3.19945 8.60481 3.36794 8.60481 3.56638Z"
                        fill="#182FFF"
                      />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1.8fr)] items-center gap-4">
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-[#767680]">
                      Text Sub-Title
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Enter Sub-Text title"
                      value={subtitleText}
                      onChange={(event) =>
                        updateActiveSlide({ subtitleText: event.target.value })
                      }
                      className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3 py-2 text-sm outline-none resize-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-[#767680]">
                      Pick Button Colour
                    </label>
                    <div className="inline-flex items-center gap-4 rounded-xl border border-[#E5E7EB] bg-white px-4 py-3">
                      <div className="space-y-1 text-[11px] text-[#6B7280]">
                        <span className="block">Primary</span>
                        <div className="flex items-center gap-2">
                          <div
                            className="h-6 w-14 cursor-pointer rounded-md"
                            style={{ backgroundColor: buttonPrimaryColor }}
                            onClick={() => btnPrimaryInputRef.current?.click()}
                          />
                          <button
                            type="button"
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E5E7EB] bg-[#F3F4F6]"
                            onClick={() => btnPrimaryInputRef.current?.click()}
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
                      </div>
                      <input
                        ref={btnPrimaryInputRef}
                        type="color"
                        className="hidden"
                        value={buttonPrimaryColor}
                        onChange={(e) =>
                          updateActiveSlide({
                            buttonPrimaryColor: e.target.value,
                          })
                        }
                      />
                      <div className="space-y-1 text-[11px] text-[#6B7280]">
                        <span className="block">Secondary</span>
                        <div className="flex items-center gap-2">
                          <div
                            className="h-6 w-14 cursor-pointer rounded-md"
                            style={{ backgroundColor: buttonSecondaryColor }}
                            onClick={() =>
                              btnSecondaryInputRef.current?.click()
                            }
                          />
                          <button
                            type="button"
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E5E7EB] bg-[#F3F4F6]"
                            onClick={() =>
                              btnSecondaryInputRef.current?.click()
                            }
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
                      </div>
                      <input
                        ref={btnSecondaryInputRef}
                        type="color"
                        className="hidden"
                        value={buttonSecondaryColor}
                        onChange={(e) =>
                          updateActiveSlide({
                            buttonSecondaryColor: e.target.value,
                          })
                        }
                      />
                      <div className="space-y-1 text-[11px] text-[#6B7280]">
                        <span className="block">Button Text Color</span>
                        <div className="flex items-center gap-2">
                          <div
                            className="h-6 w-14 cursor-pointer rounded-md border border-[#E5E7EB]"
                            style={{ backgroundColor: buttonTextColor }}
                            onClick={() => btnTextInputRef.current?.click()}
                          />
                          <button
                            type="button"
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E5E7EB] bg-[#F3F4F6]"
                            onClick={() => btnTextInputRef.current?.click()}
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
                      </div>
                      <input
                        ref={btnTextInputRef}
                        type="color"
                        className="hidden"
                        value={buttonTextColor}
                        onChange={(e) =>
                          updateActiveSlide({
                            buttonTextColor: e.target.value.toLowerCase(),
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <OnboardingScreenPreview
          slideLabel={`Slide ${activeSlideIndex + 1} Preview`}
          bgPrimaryColor={bgPrimaryColor}
          bgSecondaryColor={bgSecondaryColor}
          titleColor={textPrimaryColor}
          subtitleColor={textSecondaryColor}
          title={titleText}
          subtitle={subtitleText}
          buttonText={buttonText}
          buttonPrimaryColor={buttonPrimaryColor}
          buttonSecondaryColor={buttonSecondaryColor}
          buttonTextColor={buttonTextColor}
          uploadedImage={uploadedImage}
          className="h-auto w-[320px] max-w-full"
        />
      </div>
      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={handlePreviousSlide}
          className={clsx(
            "rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-6 py-2 text-sm font-semibold text-[#111827]",
          )}
        >
          Previous
        </button>
        <PrimaryButton
          className="bg-[#111827] px-8"
          onClick={handleNextSlide}
        >
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
