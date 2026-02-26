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

interface OnboardingScreenComponentProps {
  title: string;
  description: string;
  onClick?: VoidFunction;
  children: React.ReactNode;
  className?: string;
}

export const OnboardingScreenComponent: React.FC<
  OnboardingScreenComponentProps
> = (props) => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <div className="mb-6 md:mb-16">
        <PageStepHeader
          title={props.title}
          description={props.description}
          button={
            <PageStepButton variant="light" onClick={props.onClick}>
              Skip
            </PageStepButton>
          }
        />
      </div>
      <PageStepsContainer>
        <PageStepsLeftComponent>
          <Step
            index={1}
            status="completed"
            title="License Status"
            onClick={() => navigate(ROUTES.ONBOARDING.LICENSE_STATUS)}
            isActive={location.pathname.includes(
              ROUTES.ONBOARDING.LICENSE_STATUS,
            )}
          />
          <Step
            index={2}
            status="pending"
            title="Verify your Account"
            onClick={() => navigate(ROUTES.ONBOARDING.VERIFY_ACCOUNT)}
            isActive={location.pathname.includes(
              ROUTES.ONBOARDING.VERIFY_ACCOUNT,
            )}
          />
          <Step
            index={3}
            status="pending"
            title="Sign Contract"
            onClick={() => navigate(ROUTES.ONBOARDING.SIGN_CONTRACT)}
            isActive={location.pathname.includes(
              ROUTES.ONBOARDING.SIGN_CONTRACT,
            )}
          />
          <Step
            index={4}
            status="completed"
            title="Company Profile"
            onClick={() => navigate(ROUTES.ONBOARDING.COMPANY_PROFILE)}
            isActive={location.pathname.includes(
              ROUTES.ONBOARDING.COMPANY_PROFILE,
            )}
          />
          <Step
            index={5}
            status="pending"
            title="Shareholders"
            onClick={() => navigate(ROUTES.ONBOARDING.SHAREHOLDERS)}
            isActive={location.pathname.includes(
              ROUTES.ONBOARDING.SHAREHOLDERS,
            )}
          />
          <Step
            index={6}
            status="pending"
            title="Company Documents"
            onClick={() => navigate(ROUTES.ONBOARDING.COMPANY_DOCUMENTS)}
            isActive={location.pathname.includes(
              ROUTES.ONBOARDING.COMPANY_DOCUMENTS,
            )}
          />
        </PageStepsLeftComponent>
        <PageStepsRightComponent className={props.className}>
          {props.children}
        </PageStepsRightComponent>
      </PageStepsContainer>
    </div>
  );
};
