import ModalWrapper from "../common/modal";
import { PrimaryButton } from "../ui/PrimaryButton";

interface CurrencySwapModalProps {
  onClose?: () => void;
}

const CurrencySwapModal: React.FC<CurrencySwapModalProps> = (props) => {
  return (
    <ModalWrapper onClose={props.onClose}>
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-[#4F4F4F] text-[2rem] font-bold mb-1 text-center">
            Currency swap
          </h1>
          <p className="text-[#2B2B3D] text-sm text-center">
            We&apos;ve made it simple for you to swap between two currencies.
          </p>
        </div>

        <div className="rounded-2xl bg-[#F2F4F7] border border-[#EAECF0] p-6 mb-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-[#5C5C60] font-bold text-sm">Swap From</p>
              <div>
                <label className="text-[#5C5C60] font-bold text-sm block mb-2 sr-only">Currency</label>
                <select className="border border-[#C4C4C4] text-[#3F3F3F] rounded-md h-12 text-sm p-2.5 w-full bg-white">
                  <option value="ngn">🇳🇬 Nigeria - NGN</option>
                  <option value="ghs">🇬🇭 Ghana - GHS</option>
                </select>
              </div>
              <div>
                <label className="text-[#5C5C60] font-bold text-sm block mb-2">Amount</label>
                <div className="rounded-md h-12 flex items-center justify-between px-3 border border-[#C4C4C4] bg-white text-sm text-[#3F3F3F]">
                  <span>10,000</span>
                  <span className="text-[#5C5C60]">NGN</span>
                </div>
              </div>
              <p className="text-xs text-[#5C5C60]">
                Wallet Balance <span className="font-medium text-[#3F3F3F]">NGN 100,000.23</span>
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-[#5C5C60] font-bold text-sm">Swap To</p>
              <div>
                <label className="text-[#5C5C60] font-bold text-sm block mb-2 sr-only">Currency</label>
                <select className="border border-[#C4C4C4] text-[#3F3F3F] rounded-md h-12 text-sm p-2.5 w-full bg-white">
                  <option value="ghs">🇬🇭 Ghana - GHS</option>
                  <option value="ngn">🇳🇬 Nigeria - NGN</option>
                </select>
              </div>
              <div>
                <label className="text-[#5C5C60] font-bold text-sm block mb-2">Amount</label>
                <div className="rounded-md h-12 flex items-center justify-between px-3 border border-[#C4C4C4] bg-white text-sm text-[#3F3F3F]">
                  <span>1,000</span>
                  <span className="text-[#5C5C60]">GHS</span>
                </div>
              </div>
              <p className="text-xs text-[#5C5C60]">
                Wallet Balance <span className="font-medium text-[#3F3F3F]">GHS 100,000.23</span>
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white border border-[#EAECF0] p-4 mb-6 space-y-2">
          <div className="flex justify-between text-sm text-[#3F3F3F]">
            <span>Receiver will get</span>
            <span className="font-medium">200,000.09 GHS</span>
          </div>
          <div className="flex justify-between text-sm text-[#3F3F3F]">
            <span>Exchange Rate</span>
            <span className="font-medium">14.32 NGN → 4.0 GHS</span>
          </div>
          <div className="flex justify-between text-sm text-[#3F3F3F]">
            <span>Transaction fee</span>
            <span className="font-medium">0.00GHS</span>
          </div>
        </div>

        <PrimaryButton
          type="button"
          className="w-full bg-[#23232B] hover:bg-[#3F3F3F] focus-visible:ring-[#23232B]"
        >
          Swap
        </PrimaryButton>
      </div>
    </ModalWrapper>
  );
};

export default CurrencySwapModal;
