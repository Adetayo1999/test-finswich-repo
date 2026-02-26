import {
  PageComponentDescription,
  PageComponentTitle,
  PageStepButton,
} from "@/components/common/pages-steps-ui";
import { OnboardingScreenComponent } from "@/components/onboarding";
import clsx from "clsx";
import { useState } from "react";

function LicenseStatusPage() {
  const [selected, setSelected] = useState(false);

  return (
    <OnboardingScreenComponent
      title="Licenses Status"
      description="Are you currently licensed in your country?"
      className="flex flex-col justify-between"
    >
      <div className="">
        <PageComponentTitle text="License Status" classname="mb-4" />
        <PageComponentDescription
          text="Are you currently licensed in your  country?"
          classname="mb-9"
        />
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-x-5 mb-6">
          {[
            { title: "Yes! We are Licensed", value: true },
            { title: "No! We are not Licensed", value: false },
          ].map((item) => (
            <button
              className={clsx(
                "text-sm text-[#344054] cursor-pointer font-bold w-full sm:w-28 px-4 py-3 sm:px-2 sm:py-1 min-h-[72px] sm:h-20 rounded-xl",
                selected === item.value
                  ? "border-[#5B26EF] border-2 bg-[#E9EFFA]"
                  : "border-[#D0D5DD] border bg-white",
              )}
              onClick={() => setSelected(item.value)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <p className="text-xs text-[#DD4C13] max-w-full md:max-w-70">
          Don’t worry if you don’t have a license, we work with different level
          of businesses.
        </p>
      </div>

      <div className="">
        <PageStepButton variant="light">Next Step</PageStepButton>
      </div>
    </OnboardingScreenComponent>
  );
}

export default LicenseStatusPage;
