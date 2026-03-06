import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface ModalWrapperProps {
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

const ModalWrapper: React.FC<ModalWrapperProps> = (props) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <motion.div
      className="bg-[#00000042] flex flex-col justify-end top-0 left-0 w-full h-screen fixed backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="bg-[#27222280] text-xs absolute top-[10%] left-12 text-white rounded-xl flex gap-x-2 items-center px-4 py-1.5 z-1000">
        <span>Powered By </span>
        <span>
          {" "}
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.09619 0.699219C3.98749 -0.215939 5.45143 -0.234972 6.3667 0.65625C6.89672 1.17235 7.12392 1.87991 7.05029 2.5625C7.10872 2.91185 7.30686 3.72935 7.92529 4.21094C8.3971 4.5782 9.02454 4.69145 9.40967 4.72656C10.0301 4.6518 10.67 4.84572 11.1968 5.3584C12.1745 6.31043 12.2305 7.83919 11.3218 8.77246C10.8806 9.22545 10.2933 9.45262 9.69385 9.45996C9.09214 9.64318 8.25978 9.92236 7.92529 10.168C7.37168 10.5746 7.10878 11.4985 6.99658 12.0488C6.98428 12.6406 6.74639 13.2278 6.28564 13.6699C5.36373 14.5544 3.89862 14.5244 3.01416 13.6025C2.1297 12.6806 2.1606 11.2155 3.08252 10.3311C3.41153 10.0155 3.80996 9.818 4.22607 9.73438L4.22412 9.73242C4.22412 9.73242 4.23056 9.73104 4.24268 9.73047C4.38365 9.70322 4.52646 9.68934 4.66943 9.68848C5.1734 9.61965 5.98667 9.44266 6.46436 8.98438C6.89741 8.56861 7.11641 7.86157 7.2251 7.35645C7.21055 7.19521 7.21449 7.03305 7.23682 6.87207C7.20559 6.5888 7.07443 5.89027 6.51123 5.3418C6.03759 4.88059 5.22771 4.69582 4.72412 4.62305C4.57869 4.62123 4.43367 4.60723 4.29053 4.57812C4.28163 4.57766 4.27686 4.57715 4.27686 4.57715L4.27881 4.5752C3.86326 4.48843 3.46582 4.28879 3.13916 3.9707C2.22392 3.07941 2.20494 1.61452 3.09619 0.699219ZM3.16748 6.06934C3.7907 5.4293 4.81553 5.41584 5.45557 6.03906C6.09536 6.66225 6.10883 7.68619 5.48584 8.32617C4.86262 8.9662 3.83877 8.97965 3.19873 8.35645C2.55874 7.73327 2.5444 6.70938 3.16748 6.06934Z"
              fill="white"
            />
          </svg>
        </span>
        <span> fuspay</span>
      </div>

      <button
        type="button"
        onClick={props.onClose}
        className="border border-[#CD2C2C] bg-[#FAD6D6] min-w-32 p-2  rounded-full text-[#CD2C2C] absolute top-[13%] right-4 flex justify-between items-center z-1000"
      >
        <span className="flex-1 font-bold text-sm">Close</span>
        <span className="shrink-0 h-6.5 w-6.5 rounded-full flex justify-center items-center bg-[#CD2C2C]">
          <svg
            width="12"
            height="12"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.362467 0.362516C0.564654 0.160328 0.838881 0.0462506 1.12482 0.0462512C1.41075 0.0462514 1.68498 0.160328 1.88717 0.362516L6.95845 5.4338L12.0297 0.362516C12.2319 0.160328 12.5061 0.0462506 12.7921 0.0462512C13.078 0.0462507 13.3522 0.160328 13.5544 0.362516C13.7566 0.564703 13.8707 0.838929 13.8707 1.12487C13.8707 1.4108 13.7566 1.68503 13.5544 1.88721L8.48315 6.9585L13.5544 12.0298C13.7566 12.232 13.8707 12.5062 13.8707 12.7921C13.8707 13.0781 13.7566 13.3523 13.5544 13.5545C13.3522 13.7567 13.078 13.8707 12.7921 13.8707C12.5061 13.8707 12.2319 13.7567 12.0297 13.5545L6.95845 8.4832L1.88717 13.5545C1.68498 13.7567 1.41075 13.8707 1.12482 13.8707C0.838881 13.8707 0.564654 13.7567 0.362467 13.5545C0.160279 13.3523 0.0462024 13.0781 0.0462024 12.7921C0.0462023 12.5062 0.160279 12.232 0.362467 12.0298L5.43375 6.9585L0.362467 1.88721C0.160279 1.68503 0.0462023 1.4108 0.0462024 1.12487C0.0462024 0.838929 0.160279 0.564703 0.362467 0.362516Z"
              fill="white"
              stroke="white"
              strokeWidth="0.09375"
            />
          </svg>
        </span>
      </button>

      <motion.div
        className={clsx(
          "bgf-[linear-gradient(228.87deg,#e3eaff_25.93%,#eee2d9_51.91%,#e9d3fd_78.77%)] bg-white h-[85%]  backdrop-blur-[26px] rounded-tr-[30px] rounded-tl-[30px] py-15 px-25 overflow-y-auto",
          props.className,
        )}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {props.children}
      </motion.div>
    </motion.div>
  );
};

export default ModalWrapper;
