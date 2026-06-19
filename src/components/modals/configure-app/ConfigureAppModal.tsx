import { useState } from "react";
import clsx from "clsx";
import toast from "react-hot-toast";
import type { MerchantApp } from "@/api/merchants";
import { useCreateMerchantAppConfig } from "@/hooks/api/useMerchantApps";
import ModalWrapper from "../../common/modal";
import { AppAssetsTab } from "./tabs/AppAssetsTab";
import { SplashTab } from "./tabs/SplashTab";
import { OnboardingTab } from "./tabs/OnboardingTab";
import { PolicyTermsTab } from "./tabs/PolicyTermsTab";
import { SupportTab } from "./tabs/SupportTab";
import { PublishTab } from "./tabs/PublishTab";
import {
  cloneDefaultAppConfig,
  type ConfigureAppConfigData,
} from "./config-data";

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
  app?: Pick<MerchantApp, "id" | "name"> | null;
}

const ConfigureAppModal = ({ onClose, app }: ConfigureAppModalProps) => {
  const [activeTab, setActiveTab] = useState<TabId>("assets");
  const [configData, setConfigData] = useState<ConfigureAppConfigData>(() =>
    cloneDefaultAppConfig(),
  );
  const createConfig = useCreateMerchantAppConfig();

  const activeTabIndex = TABS.findIndex((tab) => tab.id === activeTab);
  const canGoPrevious = activeTabIndex > 0;
  const canGoNext = activeTabIndex < TABS.length - 1;

  const goToPrevious = () => {
    if (!canGoPrevious) return;
    setActiveTab(TABS[activeTabIndex - 1].id);
  };

  const goToNext = () => {
    if (!canGoNext) return;
    setActiveTab(TABS[activeTabIndex + 1].id);
  };

  const updateConfigSection = <Section extends keyof ConfigureAppConfigData>(
    section: Section,
    value: ConfigureAppConfigData[Section],
  ) => {
    setConfigData((previous) => ({
      ...previous,
      [section]: value,
    }));
  };

  const handleSave = (isPublished = false) => {
    if (!app?.id) {
      toast.error("App not found. Please reopen the configure modal.");
      return;
    }

    createConfig.mutate(
      {
        appId: app.id,
        body: {
          configData: configData as unknown as Record<string, unknown>,
          isPublished,
        },
      },
      {
        onSuccess: (response) => {
          toast.success(
            response.message ||
              (isPublished
                ? "App configuration published"
                : "App configuration saved"),
          );
        },
        onError: (error) => {
          toast.error(
            error instanceof Error
              ? error.message
              : "Failed to save app configuration",
          );
        },
      },
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case "assets":
        return (
          <AppAssetsTab
            appName={app?.name}
            value={configData.app_assets}
            onChange={(value) => updateConfigSection("app_assets", value)}
            onNext={goToNext}
            onSave={() => handleSave(false)}
            saving={createConfig.isPending}
          />
        );
      case "splash":
        return (
          <SplashTab
            appName={app?.name}
            value={configData.splash_screen}
            onChange={(value) => updateConfigSection("splash_screen", value)}
            onPrevious={goToPrevious}
            onNext={goToNext}
            onSave={() => handleSave(false)}
            saving={createConfig.isPending}
          />
        );
      case "onboarding":
        return (
          <OnboardingTab
            value={configData.onboarding}
            onChange={(value) => updateConfigSection("onboarding", value)}
            onPrevious={goToPrevious}
            onNext={goToNext}
            onSave={() => handleSave(false)}
            saving={createConfig.isPending}
          />
        );
      case "policy":
        return (
          <PolicyTermsTab
            value={configData.policy_terms}
            onChange={(value) => updateConfigSection("policy_terms", value)}
            onPrevious={goToPrevious}
            onNext={goToNext}
            onSave={() => handleSave(false)}
            saving={createConfig.isPending}
          />
        );
      case "support":
        return (
          <SupportTab
            value={configData.support}
            onChange={(value) => updateConfigSection("support", value)}
            onPrevious={goToPrevious}
            onNext={goToNext}
            onSave={() => handleSave(false)}
            saving={createConfig.isPending}
          />
        );
      case "publish":
        return (
          <PublishTab
            appId={app?.id}
            onPrevious={goToPrevious}
            onSave={() => handleSave(false)}
            onPublish={() => handleSave(true)}
            saving={createConfig.isPending}
          />
        );
      default:
        return null;
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
