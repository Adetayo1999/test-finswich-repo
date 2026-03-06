import { useState } from "react";
import clsx from "clsx";
import ModalWrapper from "../../common/modal";
import { AppAssetsTab } from "./tabs/AppAssetsTab";
import { SplashTab } from "./tabs/SplashTab";
import { OnboardingTab } from "./tabs/OnboardingTab";
import { PolicyTermsTab } from "./tabs/PolicyTermsTab";
import { SupportTab } from "./tabs/SupportTab";
import { PublishTab } from "./tabs/PublishTab";

const TABS = [
  { id: "assets", label: "App Assets" },
  { id: "splash", label: "Splash Screen" },
  { id: "onboarding", label: "Onboarding" },
  { id: "policy", label: "Policy & Terms" },
  { id: "support", label: "Support" },
  { id: "publish", label: "Publish" },
] as const;

type TabId = (typeof TABS)[number]["id"];

interface ConfigureAppModalProps {
  onClose?: () => void;
}

const ConfigureAppModal = ({ onClose }: ConfigureAppModalProps) => {
  const [activeTab, setActiveTab] = useState<TabId>("assets");

  const renderContent = () => {
    switch (activeTab) {
      case "assets":
        return <AppAssetsTab />;
      case "splash":
        return <SplashTab />;
      case "onboarding":
        return <OnboardingTab />;
      case "policy":
        return <PolicyTermsTab />;
      case "support":
        return <SupportTab />;
      case "publish":
        return <PublishTab />;
      default:
        return <AppAssetsTab />;
    }
  };

  return (
    <ModalWrapper onClose={onClose}>
      <div className="w-full">
        <h1 className="mb-6 text-[2rem] font-bold text-[#4F4F4F]">
          Configure App
        </h1>
        <nav
          className="mb-10 flex gap-1 border-b border-[#EAECF0]"
          aria-label="Configure sections"
        >
          {TABS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveTab(id)}
              className={clsx(
                "border-b-2 px-4 py-3 text-sm font-semibold transition",
                activeTab === id
                  ? "border-[#5B26EF] text-[#5B26EF]"
                  : "border-transparent text-[#667085] hover:text-[#111827]",
              )}
            >
              {label}
            </button>
          ))}
        </nav>
        {renderContent()}
      </div>
    </ModalWrapper>
  );
};

export default ConfigureAppModal;
