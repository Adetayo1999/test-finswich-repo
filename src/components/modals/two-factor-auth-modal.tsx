import { useState, useRef } from "react";
import ModalWrapper from "../common/modal";
import { PrimaryButton } from "../ui/PrimaryButton";
import { FiShield } from "react-icons/fi";

interface TwoFactorAuthModalProps {
  onClose?: () => void;
  onVerify?: (code: string) => void;
  maskedEmail?: string;
}

const OTP_LENGTH = 6;

const TwoFactorAuthModal: React.FC<TwoFactorAuthModalProps> = (props) => {
  const [digits, setDigits] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const maskedEmail = props.maskedEmail ?? "h****r@gmail.com";

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      const chars = value.replace(/\D/g, "").slice(0, OTP_LENGTH).split("");
      const next = [...digits];
      chars.forEach((c, i) => {
        if (index + i < OTP_LENGTH) next[index + i] = c;
      });
      setDigits(next);
      const nextFocus = Math.min(index + chars.length, OTP_LENGTH - 1);
      inputRefs.current[nextFocus]?.focus();
      return;
    }
    const char = value.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[index] = char;
    setDigits(next);
    if (char && index < OTP_LENGTH - 1) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
      const next = [...digits];
      next[index - 1] = "";
      setDigits(next);
    }
  };

  const code = digits.join("");
  const handleVerify = () => {
    if (code.length === OTP_LENGTH) props.onVerify?.(code);
  };

  return (
    <ModalWrapper onClose={props.onClose}>
      <div className="max-w-md mx-auto flex flex-col items-center">
        <h1 className="text-[#4F4F4F] text-[2rem] font-bold mb-1 text-center">
          Two-factor Authentication
        </h1>
        <p className="text-[#2B2B3D] text-sm text-center mb-6">
          You are required to authorise this payment
        </p>

        <div className="rounded-full h-20 w-20 flex items-center justify-center border-2 border-[#712EEB] bg-[#F5F3FF] mb-6">
          <FiShield className="h-10 w-10 text-[#712EEB]" />
        </div>

        <p className="text-sm text-[#3F3F3F] text-center mb-6">
          Before you continue, enter the code sent to {maskedEmail}
        </p>

        <div className="flex gap-2 justify-center mb-6">
          {digits.map((d, i) => (
            <input
              key={i}
              ref={(el) => { inputRefs.current[i] = el; }}
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={d}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="w-12 h-12 rounded-lg border-2 border-[#712EEB] bg-white text-center text-lg font-bold text-[#1C1C1C] focus:outline-none focus:ring-2 focus:ring-[#712EEB] focus:ring-offset-1"
            />
          ))}
        </div>

        <p className="text-sm text-[#5C5C60] mb-1">
          Didn&apos;t receive the code?
        </p>
        <button
          type="button"
          className="text-sm font-semibold text-[#2563EB] underline hover:no-underline mb-8"
        >
          Resend OTP
        </button>

        <PrimaryButton
          type="button"
          onClick={handleVerify}
          disabled={code.length !== OTP_LENGTH}
          className="bg-[#23232B] hover:bg-[#3F3F3F] focus-visible:ring-[#23232B] min-w-[200px]"
        >
          Verify
        </PrimaryButton>
      </div>
    </ModalWrapper>
  );
};

export default TwoFactorAuthModal;
