import { useState } from "react";
import clsx from "clsx";
import ModalWrapper from "../common/modal";
import { ModalInput, ModalSelect } from "../common/modal/form";
import { PrimaryButton } from "../ui/PrimaryButton";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface GlobalTransferModalProps {
  onClose?: () => void;
  onSendMoney?: () => void;
}

const PLACEHOLDER_BENEFICIARIES = Array(5).fill({
  name: "CHARLES AVIS",
  account: "000123293483 | Berkly's Bank",
  lastSent: "Last Sent 12:04am 3 Jan 2026",
});

const GlobalTransferModal: React.FC<GlobalTransferModalProps> = (props) => {
  const [activeTab, setActiveTab] = useState<"beneficiaries" | "new-account">(
    "beneficiaries",
  );
  const [selectedBeneficiaryIndex, setSelectedBeneficiaryIndex] = useState(0);

  const handleSendMoney = () => {
    props.onSendMoney?.();
  };

  return (
    <ModalWrapper onClose={props.onClose}>
      <div className="w-full flex justify-between gap-8">
        <div className="flex-[0.55] min-w-0">
          <div className="mb-4">
            <h1 className="text-[#4F4F4F] text-[2rem] font-bold mb-1">
              Global Transfer
            </h1>
            <p className="text-[#2B2B3D] text-sm">
              Send money to different part of the world from your global wallet
            </p>
          </div>

          <div className="flex gap-6 border-b border-[#EAECF0] mb-6">
            <button
              type="button"
              onClick={() => setActiveTab("beneficiaries")}
              className={clsx(
                "pb-3 text-sm font-semibold border-b-2 -mb-px transition-colors",
                activeTab === "beneficiaries"
                  ? "text-[#1C1C1C] border-[#1C1C1C]"
                  : "text-[#5C5C60] border-transparent",
              )}
            >
              Beneficiaries
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("new-account")}
              className={clsx(
                "pb-3 text-sm font-semibold border-b-2 -mb-px transition-colors",
                activeTab === "new-account"
                  ? "text-[#1C1C1C] border-[#1C1C1C]"
                  : "text-[#5C5C60] border-transparent",
              )}
            >
              New Account
            </button>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMoney();
            }}
            className="space-y-6"
          >
            <div>
              <ModalSelect label="Select Currency" className="w-full">
                <option value="">Select Currency</option>
                <option value="ghs">🇬🇭 Ghana - GHS</option>
                <option value="ngn">🇳🇬 Nigeria - NGN</option>
                <option value="usd">🇺🇸 United States - USD</option>
              </ModalSelect>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <ModalInput
                label="Enter Amount"
                placeholder="Enter Amount"
                type="number"
              />
              <div>
                <label className="text-[#5C5C60] font-bold text-sm block mb-2">
                  Wallet Balance
                </label>
                <div className="rounded-md h-12 flex items-center justify-center bg-[#23232B] text-white text-sm font-semibold">
                  $10,243.34
                </div>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-[#3F3F3F]">
                <span>Receiver will get</span>
                <span className="font-medium">200,000.09 GHS</span>
              </div>
              <div className="flex justify-between text-[#3F3F3F]">
                <span>Exchange Rate</span>
                <span className="font-medium">14.32 GHS</span>
              </div>
              <div className="flex justify-between text-[#3F3F3F]">
                <span>Transaction fee</span>
                <span className="font-medium">0.00GHS</span>
              </div>
            </div>

            <PrimaryButton
              type="submit"
              className="bg-[#23232B] hover:bg-[#3F3F3F] focus-visible:ring-[#23232B]"
            >
              Send Money
            </PrimaryButton>
          </form>
        </div>

        <div className="flex-[0.4] shrink-0 flex flex-col">
          {activeTab === "beneficiaries" ? (
            <>
              <input
                type="text"
                placeholder="Search Beneficiary"
                className="w-full rounded-md h-12 text-sm p-2.5 mb-4 border border-[#C4C4C4] bg-[#FFFFFF6B] text-[#3F3F3F]"
              />
              <div className="flex flex-col gap-3 flex-1 overflow-y-auto min-h-0">
                {PLACEHOLDER_BENEFICIARIES.map((b, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedBeneficiaryIndex(i)}
                    className={clsx(
                      "text-left p-4 rounded-2xl border-2 transition-colors",
                      selectedBeneficiaryIndex === i
                        ? "border-[#5B26EF] bg-[##E1E1F5]"
                        : "border-[#EAECF0] bg-white hover:border-[#D0D5DD]",
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div className="h-14 w-14 rounded-full bg-[#33426F] flex items-center justify-center shrink-0">
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.2221 2.44318L24.5701 6.53406C24.9725 6.69315 25.2945 7.17041 25.2945 7.59086V11.3636C25.2945 11.9886 24.7771 12.5 24.1447 12.5H3.44861C2.81623 12.5 2.29883 11.9886 2.29883 11.3636V7.59086C2.29883 7.17041 2.62077 6.69315 3.0232 6.53406L13.3712 2.44318C13.6012 2.35227 13.9921 2.35227 14.2221 2.44318Z"
                            stroke="white"
                            strokeWidth="1.94805"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M25.2945 24.9995H2.29883V21.5905C2.29883 20.9655 2.81623 20.4541 3.44861 20.4541H24.1447C24.7771 20.4541 25.2945 20.9655 25.2945 21.5905V24.9995Z"
                            stroke="white"
                            strokeWidth="1.94805"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.59863 20.4545V12.5"
                            stroke="white"
                            strokeWidth="1.94805"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.19922 20.4545V12.5"
                            stroke="white"
                            strokeWidth="1.94805"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.7979 20.4545V12.5"
                            stroke="white"
                            strokeWidth="1.94805"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M18.3955 20.4545V12.5"
                            stroke="white"
                            strokeWidth="1.94805"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M22.9971 20.4545V12.5"
                            stroke="white"
                            strokeWidth="1.94805"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1.15039 24.999H26.4456"
                            stroke="white"
                            strokeWidth="1.94805"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.796 9.65908C14.7485 9.65908 15.5206 8.89593 15.5206 7.95454C15.5206 7.01315 14.7485 6.25 13.796 6.25C12.8435 6.25 12.0713 7.01315 12.0713 7.95454C12.0713 8.89593 12.8435 9.65908 13.796 9.65908Z"
                            stroke="white"
                            strokeWidth="1.94805"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex justify-between items-center">
                          <p className=" font-bold text-[#23232B]">{b.name}</p>
                          <p className="text-xs text-[#7D7D7D]">{b.lastSent}</p>
                        </div>
                        <p className="text-sm text-[#7D7D7D] mt-0.5">
                          {b.account}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 pt-4 mt-4 border-t border-[#EAECF0]">
                <button
                  type="button"
                  className="p-2 rounded-lg hover:bg-[#F2F4F7] text-[#5C5C60]"
                  aria-label="Previous page"
                >
                  <HiChevronLeft className="h-5 w-5" />
                </button>
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    className={clsx(
                      "min-w-8 h-8 rounded-lg text-sm font-medium",
                      n === 1
                        ? "bg-[#23232B] text-white"
                        : "text-[#5C5C60] hover:bg-[#F2F4F7]",
                    )}
                  >
                    {n}
                  </button>
                ))}
                <button
                  type="button"
                  className="p-2 rounded-lg hover:bg-[#F2F4F7] text-[#5C5C60]"
                  aria-label="Next page"
                >
                  <HiChevronRight className="h-5 w-5" />
                </button>
              </div>
            </>
          ) : (
            <div className="space-y-4">
              <ModalInput label="Account Name" placeholder="Enter last name" />
              <ModalInput
                label="Account Number"
                placeholder="Enter account number"
              />
              <div>
                <label className="text-[#5C5C60] font-bold text-sm block mb-2">
                  Recipient
                </label>
                <div className="rounded-md h-12 flex items-center px-3 bg-[#23232B] text-white text-sm">
                  @ Charles Avis A.
                </div>
              </div>
              <ModalSelect label="Select Bank/Financial institution">
                <option value="">Select Bank/Financial institution</option>
                <option value="berkly">Berkly&apos;s Bank</option>
              </ModalSelect>
            </div>
          )}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default GlobalTransferModal;
