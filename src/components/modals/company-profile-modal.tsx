import { useState } from "react";
import ModalWrapper from "../common/modal";
import { ModalCheckbox, ModalInput, ModalSelect } from "../common/modal/form";
import { PrimaryButton } from "../ui/PrimaryButton";

interface CompanyProfileModalProps {
  onClose?: () => void;
}

const CompanyProfileModal: React.FC<CompanyProfileModalProps> = (props) => {
  const [selectedVolumes, setSelectedVolumes] = useState<string[]>([]);

  const toggleVolume = (value: string) => {
    setSelectedVolumes((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  return (
    <ModalWrapper onClose={props.onClose}>
      <div className="w-[70%]">
        <div className="mb-8.5">
          <h1 className="text-[#4F4F4F] text-[2rem] font-bold mb-1">
            Company Profile
          </h1>
          <p className="text-[#2B2B3D] text-sm">
            Give us some information about your business to set your account up.
          </p>
        </div>

        <form>
          <div className="grid grid-cols-2 gap-8 mb-8">
            <ModalInput
              label="Company Name"
              placeholder="Legal registered name"
            />
            <ModalInput
              label="Registration Number"
              placeholder="Enter registration number"
            />
            <ModalInput label="Address" placeholder="Enter address" />
            <ModalInput label="Website" placeholder="Enter website url" />
            <ModalInput label="Email" placeholder="Enter email" type="email" />
            <ModalInput
              label="Phone Number"
              placeholder="Enter phone number"
              type="tel"
            />
            <ModalSelect label="Industry">
              <option value="">Select industry</option>
            </ModalSelect>
            <ModalInput
              label="Tax Identification Number"
              placeholder="Enter TIN"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-[#5C5C60] font-bold text-sm mb-2">
                Tell us about your monthly transaction volume
              </p>
              <div className="flex flex-col gap-2 text-sm text-[#3F3F3F]">
                <ModalCheckbox
                  label="$1k - $10k"
                  checked={selectedVolumes.includes("1k-10k")}
                  onChange={() => toggleVolume("1k-10k")}
                />
                <ModalCheckbox
                  label="$10k - $50k"
                  checked={selectedVolumes.includes("10k-50k")}
                  onChange={() => toggleVolume("10k-50k")}
                />
                <ModalCheckbox
                  label="$50k - $100k"
                  checked={selectedVolumes.includes("50k-100k")}
                  onChange={() => toggleVolume("50k-100k")}
                />
                <ModalCheckbox
                  label="$100k - $500k"
                  checked={selectedVolumes.includes("100k-500k")}
                  onChange={() => toggleVolume("100k-500k")}
                />
                <ModalCheckbox
                  label="$500k & above"
                  checked={selectedVolumes.includes("500k+")}
                  onChange={() => toggleVolume("500k+")}
                />
              </div>
            </div>

            <div>
              <p className="text-[#5C5C60] font-bold text-sm mb-2">
                Describe your business model
              </p>
              <textarea
                className="border border-[#C4C4C4] text-[#3F3F3F] rounded-md min-h-[120px] text-sm p-2.5 w-full bg-[#FFFFFF6B] resize-none"
                placeholder="Description of your product &amp; services..."
              />
            </div>
          </div>

          <PrimaryButton type="submit">Submit</PrimaryButton>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default CompanyProfileModal;

