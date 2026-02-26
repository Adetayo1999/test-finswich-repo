import { FinswichLogo } from "@/assets/icons/finswich-logo";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const AuthWrapper: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className="min-h-screen bg-[linear-gradient(228.87deg,#e3eaff_25.93%,#eee2d9_51.91%,#e9d3fd_78.77%)] flex flex-col pb-6 md:pb-10 overflow-x-hidden">
      <AuthHeader />
      <div className="flex-1 container mx-auto px-4 my-6 md:my-16 w-full">{props.children}</div>
      <AuthFooter />
    </div>
  );
};

export const AuthHeader = () => {
  return (
    <div>
      <div className="flex container py-4 md:py-5 px-4 md:px-6 items-center justify-between mx-auto">
        <div className="min-w-0 shrink-0">
          <FinswichLogo
            scale={0.9}
            className="w-24 h-auto md:w-[141px] md:h-[43px]"
          />
        </div>

        <div className="flex items-center gap-x-2 md:gap-x-4 shrink-0">
          <div className="">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9999 10.805C16.9999 10.459 16.9999 10.286 17.0519 10.132C17.2029 9.684 17.6019 9.511 18.0019 9.329C18.4499 9.124 18.6739 9.022 18.8969 9.004C19.1489 8.984 19.4019 9.038 19.6179 9.159C19.9039 9.319 20.1039 9.625 20.3079 9.873C21.2509 11.019 21.7229 11.592 21.8949 12.223C22.0349 12.733 22.0349 13.267 21.8949 13.776C21.6439 14.698 20.8489 15.47 20.2599 16.186C19.9589 16.551 19.8079 16.734 19.6179 16.841C19.3982 16.9628 19.1473 17.0168 18.8969 16.996C18.6739 16.978 18.4499 16.876 18.0009 16.671C17.6009 16.489 17.2029 16.316 17.0519 15.868C16.9999 15.714 16.9999 15.541 16.9999 15.195V10.805ZM6.99991 10.805C6.99991 10.369 6.98791 9.978 6.63591 9.672C6.50791 9.561 6.33791 9.484 5.99891 9.329C5.54991 9.125 5.32591 9.022 5.10291 9.004C4.43591 8.95 4.07691 9.406 3.69291 9.874C2.74891 11.019 2.27691 11.592 2.10391 12.224C1.96471 12.7323 1.96471 13.2687 2.10391 13.777C2.35591 14.698 3.15191 15.471 3.73991 16.186C4.11091 16.636 4.46591 17.047 5.10291 16.996C5.32591 16.978 5.54991 16.876 5.99891 16.671C6.33891 16.517 6.50791 16.439 6.63591 16.328C6.98791 16.022 6.99991 15.631 6.99991 15.196V10.805Z"
                stroke="#767680"
                strokeWidth="1.5"
              />
              <path
                d="M5 9C5 5.686 8.134 3 12 3C15.866 3 19 5.686 19 9"
                stroke="#767680"
                strokeWidth="1.5"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M19 17V17.8C19 19.567 17.21 21 15 21H13"
                stroke="#767680"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-[#767680] flex items-center gap-x-1.5 text-xs md:text-sm">
            <p>Need help?</p>
            <Link to="#" className="font-bold whitespace-nowrap">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AuthFooter = () => {
  return (
    <div className="flex justify-center gap-x-3  items-center">
      <p className="text-xs text-[#6E6E6E]">Powered By </p>
      <div className="">
        <svg
          width="57"
          height="15"
          viewBox="0 0 57 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7.26163" cy="7.38931" r="1.91836" fill="#182FFF" />
          <path
            d="M5.60968 2.94009C5.60968 4.48498 4.56407 5.73736 2.94561 5.73736C1.32715 5.73736 0.0151367 4.48498 0.0151367 2.94009C0.0151367 1.3952 1.32715 0.142822 2.94561 0.142822C4.56407 0.142822 5.60968 1.3952 5.60968 2.94009Z"
            fill="#182FFF"
          />
          <path
            d="M5.60968 2.94009C5.60968 4.48498 4.56407 5.73736 2.94561 5.73736C1.32715 5.73736 0.0151367 4.48498 0.0151367 2.94009C0.0151367 1.3952 1.32715 0.142822 2.94561 0.142822C4.56407 0.142822 5.60968 1.3952 5.60968 2.94009Z"
            fill="#182FFF"
          />
          <circle cx="10.9412" cy="2.88619" r="2.74349" fill="#182FFF" />
          <path
            d="M4.67725 0.808716C4.67725 0.808716 5.58359 1.75304 6.6753 1.87434C7.87413 2.00755 8.93975 1.07512 8.93975 1.07512L9.47257 5.20443C9.47257 5.20443 8.14053 4.0056 6.9417 4.0056C5.74287 4.0056 4.94365 4.80482 4.94365 4.80482L4.67725 0.808716Z"
            fill="#182FFF"
          />
          <ellipse
            cx="2.74349"
            cy="2.74349"
            rx="2.74349"
            ry="2.74349"
            transform="matrix(0.0340362 0.999421 0.999421 -0.0340362 0.148926 8.52686)"
            fill="#182FFF"
          />
          <path
            d="M0.414551 4.13904C0.414551 4.13904 1.61338 6.13709 1.74658 6.93631C1.94367 8.11883 0.680957 9.73358 0.680957 9.73358L5.25112 9.62843C5.25112 9.62843 4.00764 8.33797 3.96684 7.13984C3.92603 5.9417 5.07667 4.53865 5.07667 4.53865L0.414551 4.13904Z"
            fill="#182FFF"
          />
          <path
            d="M20.5398 2.2883C19.6678 2.2883 19.2262 2.70729 19.2262 3.5566V3.93029H21.1626V4.85887H19.2262V10H18.1391V4.85887H17.0859V3.93029H18.1391V3.53395C18.1391 2.09579 19.045 1.28046 20.4039 1.28046C20.8908 1.28046 21.3438 1.3937 21.7628 1.60886L21.4344 2.50346C21.0833 2.35625 20.7776 2.2883 20.5398 2.2883ZM24.6225 10.1472C23.0371 10.1472 22.0179 9.13937 22.0179 7.554V3.93029H23.105V7.52003C23.105 8.51655 23.6712 9.13937 24.6225 9.13937C25.585 9.13937 26.1512 8.51655 26.1512 7.52003V3.93029H27.227V7.554C27.227 9.17334 26.2418 10.1472 24.6225 10.1472ZM30.5305 10.1359C29.6246 10.1359 28.7413 9.69425 28.277 8.8223L29.0584 8.22212C29.4094 8.86759 30.0096 9.18467 30.5645 9.18467C31.21 9.18467 31.6403 8.81097 31.6403 8.34668C31.6403 8.02961 31.4591 7.76916 31.0854 7.57665C30.9608 7.5087 30.7004 7.39546 30.3267 7.23692C29.953 7.07839 29.7039 6.96515 29.5793 6.8972C28.9565 6.55748 28.6507 6.07054 28.6507 5.42507C28.6507 4.93814 28.8319 4.53047 29.1943 4.21339C29.5567 3.885 30.0323 3.72646 30.6324 3.72646C31.4025 3.72646 32.1499 4.05486 32.5575 4.68901L31.8668 5.3458C31.5384 4.88152 31.1081 4.64371 30.5645 4.64371C30.0209 4.64371 29.6926 4.97211 29.6926 5.37978C29.6926 5.69685 29.8624 5.93466 30.2021 6.09319L30.8703 6.38762C31.2326 6.53483 31.5044 6.6594 31.6856 6.76131C32.3764 7.11236 32.7161 7.62194 32.7161 8.29006C32.7161 8.81097 32.5122 9.25261 32.1046 9.60366C31.6969 9.9547 31.176 10.1359 30.5305 10.1359ZM37.4054 3.66984C38.2774 3.66984 39.0021 3.98691 39.5796 4.60974C40.1571 5.23256 40.4403 6.0026 40.4403 6.90853C40.4403 7.81445 40.1458 8.58449 39.5683 9.20731C38.9908 9.83014 38.266 10.1472 37.3941 10.1472C36.6354 10.1472 35.9899 9.86411 35.4577 9.28658V12.5366H33.861V3.82838H35.4463V4.58709C35.9786 3.97559 36.624 3.66984 37.4054 3.66984ZM37.1223 8.68641C37.6319 8.68641 38.0395 8.51655 38.3566 8.17682C38.6737 7.8371 38.8322 7.41811 38.8322 6.91985C38.8322 6.42159 38.6737 6.0026 38.3566 5.66288C38.0395 5.32315 37.6319 5.15329 37.1223 5.15329C36.624 5.15329 36.2164 5.32315 35.8993 5.66288C35.5822 6.0026 35.4237 6.42159 35.4237 6.91985C35.4237 7.41811 35.5822 7.8371 35.8993 8.17682C36.2164 8.51655 36.624 8.68641 37.1223 8.68641ZM46.2683 4.56444V3.82838H47.7858V10H46.2683V9.28658C45.7361 9.86411 45.0793 10.1472 44.298 10.1472C43.4147 10.1472 42.6786 9.84146 42.1011 9.21864C41.5236 8.59581 41.2405 7.81445 41.2405 6.88588C41.2405 5.9573 41.5349 5.18727 42.1124 4.58709C42.6899 3.97559 43.426 3.66984 44.298 3.66984C45.068 3.66984 45.7248 3.96427 46.2683 4.56444ZM46.291 6.90853C46.291 6.42159 46.1211 6.0026 45.7927 5.65155C45.4643 5.30051 45.0567 5.13065 44.5584 5.13065C44.0488 5.13065 43.6412 5.30051 43.3128 5.65155C42.9957 6.0026 42.8372 6.42159 42.8372 6.90853C42.8372 7.40679 42.9957 7.82578 43.3241 8.17682C43.6525 8.52787 44.0602 8.69773 44.5584 8.69773C45.0567 8.69773 45.4643 8.52787 45.7927 8.17682C46.1211 7.82578 46.291 7.40679 46.291 6.90853ZM52.0298 7.84842L53.434 3.82838H55.1779L52.6979 10.3058C52.0978 11.8798 51.3051 12.6272 50.0821 12.6272C49.6178 12.6272 49.2215 12.5253 48.8931 12.3214L49.1648 10.9852C49.4479 11.1211 49.7197 11.189 49.9575 11.189C50.4558 11.189 50.8521 10.8606 51.1579 10.2152L51.2824 9.93206L48.5873 3.82838H50.4331L52.0298 7.84842Z"
            fill="#23232B"
          />
        </svg>
      </div>
    </div>
  );
};

export const AuthToggle = ({
  active,
  primary,
  secondary,
}: {
  active: "primary" | "secondary";
  primary: { label: string; to: string };
  secondary: { label: string; to: string };
}) => {
  return (
    <div className="relative mb-6 md:mb-8 flex rounded-xl md:rounded-2xl bg-white p-1.5 text-sm">
      <Link
        to={primary.to}
        className="relative flex-1 rounded-xl px-4 py-4 text-center font-medium"
      >
        {active === "primary" && (
          <motion.div
            layoutId="auth-toggle"
            className="absolute inset-0 rounded-xl bg-[#23232B]"
            transition={{ type: "spring", stiffness: 500, damping: 40 }}
          />
        )}
        <span
          className={`relative z-10 ${
            active === "primary"
              ? "text-[#ABABBA]"
              : "text-[#ABABBA] hover:text-[#595d72]"
          }`}
        >
          {primary.label}
        </span>
      </Link>

      <Link
        to={secondary.to}
        className="relative flex-1 rounded-xl px-4 py-4 text-center font-medium"
      >
        {active === "secondary" && (
          <motion.div
            layoutId="auth-toggle"
            className="absolute inset-0 rounded-xl bg-[#23232B]"
            transition={{ type: "spring", stiffness: 500, damping: 40 }}
          />
        )}
        <span
          className={`relative z-10 ${
            active === "secondary"
              ? "text-[#ABABBA]"
              : "text-[#ABABBA] hover:text-[#595d72]"
          }`}
        >
          {secondary.label}
        </span>
      </Link>
    </div>
  );
};

export const AuthSplitCard: React.FC<{ children: React.ReactNode }> = (
  props,
) => {
  return (
    <div className="min-h-[400px] md:min-h-163 grid grid-cols-12 bg-[#FFFFFFAD] rounded-xl md:rounded-[1.375rem] overflow-hidden w-full max-w-full">
      <div className="col-span-12 md:col-span-5 py-6 px-4 sm:px-8 md:py-8 md:px-16">{props.children}</div>
      <div className="hidden md:block col-span-7 bg-[linear-gradient(52.33deg,#23232B_26.31%,#201861_65.03%)]"></div>
    </div>
  );
};

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: "mail" | "lock" | "company" | "otp";
  endAdornment?: React.ReactNode;
}

const iconPath: Record<AuthInputProps["icon"], React.ReactNode> = {
  mail: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.709 3.495C16.817 2.554 14.5 2 12 2C9.5 2 7.184 2.554 5.291 3.495C4.363 3.957 3.899 4.188 3.45 4.914C3.001 5.64 3 6.342 3 7.748V11.238C3 16.921 7.542 20.08 10.173 21.434C10.907 21.811 11.273 22 12 22C12.727 22 13.093 21.811 13.827 21.434C16.457 20.08 21 16.92 21 11.237V7.748C21 6.342 21 5.64 20.55 4.914C20.1 4.188 19.637 3.957 18.709 3.495Z"
        stroke="#D2D2D2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 14.498C8.5 14.0384 8.59053 13.5832 8.76642 13.1586C8.94231 12.734 9.20012 12.3481 9.52513 12.0231C9.85013 11.6981 10.236 11.4403 10.6606 11.2644C11.0852 11.0885 11.5404 10.998 12 10.998C12.4596 10.998 12.9148 11.0885 13.3394 11.2644C13.764 11.4403 14.1499 11.6981 14.4749 12.0231C14.7999 12.3481 15.0577 12.734 15.2336 13.1586C15.4095 13.5832 15.5 14.0384 15.5 14.498M14 9C14 9.53043 13.7893 10.0391 13.4142 10.4142C13.0391 10.7893 12.5304 11 12 11C11.4696 11 10.9609 10.7893 10.5858 10.4142C10.2107 10.0391 10 9.53043 10 9C10 8.46957 10.2107 7.96086 10.5858 7.58579C10.9609 7.21071 11.4696 7 12 7C12.5304 7 13.0391 7.21071 13.4142 7.58579C13.7893 7.96086 14 8.46957 14 9Z"
        stroke="#D2D2D2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  lock: (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.291 3.495C7.184 2.554 9.5 2 12.001 2C14.501 2 16.817 2.554 18.709 3.495C19.637 3.957 20.101 4.188 20.55 4.914C20.999 5.64 21 6.342 21 7.748V11.238C21 16.921 16.458 20.08 13.827 21.434C13.093 21.811 12.727 22 12 22C11.273 22 10.907 21.811 10.173 21.434C7.543 20.08 3 16.92 3 11.237V7.748C3 6.342 3 5.64 3.45 4.914C3.9 4.188 4.363 3.957 5.291 3.495Z"
          stroke="#D2D2D2"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 11C11.4696 11 10.9609 10.7893 10.5858 10.4142C10.2107 10.0391 10 9.53043 10 9C10 8.46957 10.2107 7.96086 10.5858 7.58579C10.9609 7.21071 11.4696 7 12 7C12.5304 7 13.0391 7.21071 13.4142 7.58579C13.7893 7.96086 14 8.46957 14 9C14 9.53043 13.7893 10.0391 13.4142 10.4142C13.0391 10.7893 12.5304 11 12 11ZM12 11V13.5M12 13.5V15C12 15.2652 11.8946 15.5196 11.7071 15.7071C11.5196 15.8946 11.2652 16 11 16H10M12 13.5H10.5"
          stroke="#D2D2D2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  ),
  company: (
    <>
      <path
        d="M4.5 18h15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 18V9.6L12 6l6 3.6V18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11.2h1.2m2.6 0H14m-5 2.8h1.2m2.6 0H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </>
  ),

  otp: (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.177 18.456C16.477 18.6 16.85 18.973 17.031 19.274C17.091 19.694 17.391 18.071 18.859 17.109M21.5 18.001C21.5 19.0618 21.0786 20.0793 20.3284 20.8294C19.5783 21.5795 18.5609 22.001 17.5 22.001C16.4391 22.001 15.4217 21.5795 14.6716 20.8294C13.9214 20.0793 13.5 19.0618 13.5 18.001C13.5 16.9401 13.9214 15.9227 14.6716 15.1725C15.4217 14.4224 16.4391 14.001 17.5 14.001C18.5609 14.001 19.5783 14.4224 20.3284 15.1725C21.0786 15.9227 21.5 16.9401 21.5 18.001Z"
          stroke="#D2D2D2"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M11.0078 14.001C12.1124 14.001 13.0078 13.1055 13.0078 12.001C13.0078 10.8964 12.1124 10.001 11.0078 10.001C9.90324 10.001 9.00781 10.8964 9.00781 12.001C9.00781 13.1055 9.90324 14.001 11.0078 14.001Z"
          stroke="#D2D2D2"
          strokeWidth="1.5"
        />
        <path
          d="M7.50765 18.001C8.45765 17.101 9.25765 16.601 11.0327 16.501M19.5077 11.501C19.5077 10.701 19.5327 8.25105 19.4077 7.25105C19.3327 6.42605 19.1077 5.30105 18.0827 4.65105C17.4577 4.32605 16.8577 4.02605 13.9827 4.00105M7.95765 4.00105C5.80765 4.00105 4.13265 4.17605 3.30765 5.20105C2.60765 6.15805 2.64865 7.25105 2.58265 7.60105C2.43265 9.47605 2.53265 16.026 2.53265 17.126C2.53265 18.276 2.45765 20.613 4.03265 21.401C5.38265 22.076 6.78265 21.976 11.5327 22.001M10.8577 2.00105C10.2577 2.00105 9.75765 2.00105 9.25765 2.52605C8.83265 2.92605 8.89765 3.27905 8.73265 3.90105C8.49865 4.77605 8.38265 5.23805 8.70765 5.60105C9.00565 5.99105 9.50665 5.99305 9.94965 5.99405H9.95765C10.3827 6.02405 11.8107 6.01005 12.2327 5.99405C12.6847 5.97605 13.0497 5.95105 13.3577 5.55105C13.6327 5.19405 13.4697 4.59905 13.3077 3.97605C13.1477 3.36205 13.2077 3.05105 12.7827 2.52605C12.1827 1.92605 11.4577 2.00105 10.8577 2.00105Z"
          stroke="#D2D2D2"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </>
  ),
};

export const AuthInput = ({
  label,
  icon,
  endAdornment,
  className = "",
  ...props
}: AuthInputProps) => (
  <label className="block">
    <span className="mb-2 block text-xs md:text-sm text-[#969696]">{label}</span>
    <span
      className={`flex h-12 md:h-14 items-center rounded-xl border border-[#969696] bg-white px-3 md:px-4 focus-within:border-[#3C0DCB] focus-within:shadow-[0_0_0_3px_rgba(114,105,235,0.18)] ${className}`}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        className="mr-3 shrink-0 text-[#c2c4ce]"
        aria-hidden="true"
      >
        {iconPath[icon]}
      </svg>
      <input
        {...props}
        className="h-full w-full border-0 bg-transparent text-sm text-[#33364a] placeholder:text-[#D2D2D2] focus:outline-none"
      />
      {endAdornment ? (
        <span className="ml-3 shrink-0">{endAdornment}</span>
      ) : null}
    </span>
  </label>
);

interface AuthActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const AuthActionButton: React.FC<AuthActionButtonProps> = ({
  children,
  ...rest
}) => (
  <button
    className="h-12 md:h-14 w-full text-white rounded-xl bg-[#3C0DCB] cursor-pointer text-sm md:text-base"
    {...rest}
  >
    {children}
  </button>
);
