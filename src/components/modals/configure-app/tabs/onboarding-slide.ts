export type OnboardingSlideConfig = {
  id: string;
  titleText: string;
  subtitleText: string;
  buttonText: string;
  bgPrimaryColor: string;
  bgSecondaryColor: string;
  textPrimaryColor: string;
  textSecondaryColor: string;
  buttonPrimaryColor: string;
  buttonSecondaryColor: string;
  buttonTextColor: string;
  uploadedImage: string | null;
};

export function createOnboardingSlide(): OnboardingSlideConfig {
  return {
    id: crypto.randomUUID(),
    titleText: "",
    subtitleText: "",
    buttonText: "",
    bgPrimaryColor: "#D1FADF",
    bgSecondaryColor: "#D1FADF",
    textPrimaryColor: "#414142",
    textSecondaryColor: "#606060",
    buttonPrimaryColor: "#182FFF",
    buttonSecondaryColor: "#182FFF",
    buttonTextColor: "#ffffff",
    uploadedImage: null,
  };
}

export function revokeSlideImage(slide: OnboardingSlideConfig) {
  if (slide.uploadedImage?.startsWith("blob:")) {
    URL.revokeObjectURL(slide.uploadedImage);
  }
}
