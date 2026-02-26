import { ROUTES } from "@/routes/paths";
import {
  PageStepButton,
  PageStepHeader,
  PageStepsContainer,
  PageStepsLeftComponent,
  PageStepsRightComponent,
  Step,
} from "../common/pages-steps-ui";
import { useNavigate } from "react-router-dom";

interface AuthScreenComponentProps {
  title: string;
  description: string;
  onClick?: VoidFunction;
  children: React.ReactNode;
  className?: string;
}

export const AuthScreenComponent: React.FC<AuthScreenComponentProps> = (
  props,
) => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <div className="mb-6 md:mb-16">
        <PageStepHeader
          title={props.title}
          description={props.description}
          button={
            <PageStepButton variant="light" onClick={props.onClick}>
              Back to login
            </PageStepButton>
          }
        />
      </div>
      <PageStepsContainer>
        <PageStepsLeftComponent>
          <Step
            index={1}
            status="completed"
            title="Verify it's you"
            onClick={() => navigate(ROUTES.AUTH.REQUEST_OTP)}
            isActive={location.pathname.includes(ROUTES.AUTH.REQUEST_OTP)}
          />
          <Step
            index={2}
            status="pending"
            title="Enter OTP"
            onClick={() => navigate(ROUTES.AUTH.VERIFY_OTP)}
            isActive={location.pathname.includes(ROUTES.AUTH.VERIFY_OTP)}
          />
          <Step
            index={3}
            status="pending"
            title="New Password"
            onClick={() => navigate(ROUTES.AUTH.CHANGE_PASSWORD)}
            isActive={location.pathname.includes(ROUTES.AUTH.CHANGE_PASSWORD)}
          />
        </PageStepsLeftComponent>
        <PageStepsRightComponent className={props.className}>
          {props.children}
        </PageStepsRightComponent>
      </PageStepsContainer>
    </div>
  );
};
