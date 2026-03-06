import { useRef } from "react";
import ModalWrapper from "../common/modal";
import { ModalInput, ModalSelect } from "../common/modal/form";
import { PrimaryButton } from "../ui/PrimaryButton";
import { FiUploadCloud } from "react-icons/fi";

interface ShareholdersModalProps {
  onClose?: () => void;
}

const PLACEHOLDER_SHAREHOLDERS = [
  {
    name: "Avis Charles",
    subtitle: "Director",
    percent: "22%",
    status: "sent",
  },
  {
    name: "Teslim Ayantola",
    subtitle: "Shareholders",
    percent: "13%",
    status: "Verified",
  },
  {
    name: "John Graham",
    subtitle: "Shareholders",
    percent: "54%",
    status: "Pending",
  },
  {
    name: "Michael Nicholas E.",
    subtitle: "Today, 11:59 AM",
    percent: "4.5%",
    status: "Verified",
  },
  {
    name: "Michael Nicholas E.",
    subtitle: "Today, 11:59 AM",
    percent: "4.5%",
    status: "Verified",
  },
  {
    name: "Michael Nicholas E.",
    subtitle: "Today, 11:59 AM",
    percent: "4.5%",
    status: "Verified",
  },
];

const ShareholdersModal: React.FC<ShareholdersModalProps> = (props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <ModalWrapper onClose={props.onClose}>
      <div className="w-full flex justify-between  gap-8">
        <div className="flex-[0.55] min-w-0">
          <div className="mb-8.5">
            <h1 className="text-[#4F4F4F] text-[2rem] font-bold mb-1">
              Shareholders Details
            </h1>
            <p className="text-[#2B2B3D] text-sm">
              Add company shareholders, directors and their share quota.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <ModalInput
                label="First Name of Shareholder"
                placeholder="Enter first name"
              />
              <ModalInput
                label="Last Name of Shareholder"
                placeholder="Enter last name"
              />
              <ModalInput
                label="Email"
                placeholder="Enter email"
                type="email"
              />
              <ModalInput
                label="Phone Number"
                placeholder="Enter phone number"
                type="tel"
              />
              <ModalSelect label="Select Designation">
                <option value="">Select Designation</option>
                <option value="director">Director</option>
                <option value="shareholder">Shareholder</option>
              </ModalSelect>
              <ModalInput
                label="Percentage Ownership"
                placeholder="% | e.g 5.5%"
              />
            </div>

            <div>
              <p className="text-[#5C5C60] font-bold text-sm mb-2">
                Bank statement (Recent 3 months)
              </p>
              <div
                role="button"
                tabIndex={0}
                onClick={() => fileInputRef.current?.click()}
                onKeyDown={(e) =>
                  e.key === "Enter" && fileInputRef.current?.click()
                }
                className="border border-dashed border-[#C4C4C4] rounded-md min-h-25 flex flex-col items-center justify-center gap-2 bg-[#FFFFFF6B] cursor-pointer hover:bg-[#FFFFFF99] transition-colors"
              >
                <FiUploadCloud className="h-8 w-8 text-[#5C5C60]" />
                <span className="text-sm text-[#3F3F3F]">
                  Choose a file or drag & drop it here
                </span>
                <button
                  type="button"
                  className="text-sm font-bold text-[#712EEB]"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                >
                  Browse file
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx,image/*"
                />
              </div>
            </div>

            <PrimaryButton type="submit" className="mt-20">
              Add Shareholder
            </PrimaryButton>
          </form>
        </div>

        <div className="flex-[0.4] shrink-0 bg-[#FFFFFF96] rounded-3xl p-16  ">
          <h2 className="text-[#4F4F4F] text-lg font-bold mb-6">
            List of Shareholders
          </h2>
          <div className="flex flex-col">
            {PLACEHOLDER_SHAREHOLDERS.map((s, i) => (
              <div
                key={`${s.name}-${i}`}
                className="flex items-start gap-3  first:pt-0 last:pb-0"
              >
                <div className="flex flex-col items-center shrink-0 w-10">
                  <div className="h-10 w-10 rounded-full bg-[#E9D3FD] flex items-center justify-center text-sm font-bold text-[#712EEB]">
                    {s.name.charAt(0)}
                  </div>
                  {i < PLACEHOLDER_SHAREHOLDERS.length - 1 && (
                    <div className="w-0.5 flex-1 min-h-7.5 bg-[#D0D5DD]" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="text-base text-[#1C1C1C] font-medium">
                      {s.status === "sent"
                        ? `${s.name} sent → ${s.percent}`
                        : `${s.name} → ${s.percent}`}
                    </p>

                    <div className=" flex items-center gap-x-5">
                      {s.status === "sent" ? (
                        <>
                          <button
                            type="button"
                            className="text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-[#23232B] shadow-[0px_0.81px_1.61px_0px_#1018280D] text-white"
                          >
                            Copy KYC URL
                          </button>
                          <button
                            type="button"
                            className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-[#179E2B42] text-[#286040] border border-[#179E2B42] shadow-[0px_0.81px_1.61px_0px_#1018280D] min-w-16"
                          >
                            Edit
                          </button>
                        </>
                      ) : (
                        <span
                          className={`
                          text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-[0px_0.81px_1.61px_0px_#1018280D] border   min-w-16
                          ${s.status === "Verified" ? "bg-[#179E2B42] text-[#286040]  border-[#179E2B42]  " : ""}
                          ${s.status === "Pending" ? "border-[#FF9E42] bg-[#FFECBD]  text-[#C7660A]" : ""}
                        `}
                        >
                          {s.status}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-[#1C1C1C66] mt-0.5">
                    {s.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ShareholdersModal;
