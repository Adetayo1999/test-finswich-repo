import { Outlet } from "react-router-dom";
import { AuthWrapper } from "../auth/AuthUI";
import useProgressBar from "@/hooks/useProgressBar";

const AuthLayout = () => {
  useProgressBar();

  return (
    <AuthWrapper>
      <Outlet />
    </AuthWrapper>
  );
};

export default AuthLayout;
