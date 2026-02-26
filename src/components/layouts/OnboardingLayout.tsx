import { Outlet } from "react-router-dom";
import useProgressBar from "@/hooks/useProgressBar";
import { AuthFooter, AuthHeader } from "@/components/auth/AuthUI";

const OnboardingLayout = () => {
  useProgressBar();

  return (
    <div className="min-h-screen bg-[linear-gradient(228.87deg,#e3eaff_25.93%,#eee2d9_51.91%,#e9d3fd_78.77%)] flex flex-col overflow-x-hidden">
      <AuthHeader />
      <div className="flex-1 w-full container mx-auto px-4 md:px-6 pt-6 md:pt-10 pb-8 md:pb-12">
        <Outlet />
      </div>
      <AuthFooter />
    </div>
  );
};

export default OnboardingLayout;
