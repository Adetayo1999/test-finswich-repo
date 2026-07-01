import { useState } from "react";
import toast from "react-hot-toast";
import ModalWrapper from "../common/modal";
import { ModalCheckbox, ModalInput, ModalSelect } from "../common/modal/form";
import { PrimaryButton } from "../ui/PrimaryButton";
import { useComplianceDraft } from "@/hooks/useComplianceDraft";

interface CompanyProfileModalProps {
  onClose?: () => void;
}

const BUSINESS_TYPES = [
  { label: "Sole Proprietorship", value: "sole_proprietorship" },
  { label: "Partnership", value: "partnership" },
  { label: "Limited Liability Company", value: "limited_liability_company" },
  { label: "Corporation", value: "corporation" },
  { label: "Non Profit", value: "non_profit" },
  { label: "Government Entity", value: "government_entity" },
];

const INDUSTRIES = [
  "Software Development",
  "Financial Services",
  "E-commerce",
  "Education",
  "Healthcare",
  "Logistics",
  "Other",
];

const CompanyProfileModal: React.FC<CompanyProfileModalProps> = (props) => {
  const { draft, saveDraft } = useComplianceDraft();
  const [form, setForm] = useState(draft);

  const updateBusinessInfo =
    (field: keyof typeof form.businessInfo) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((current) => ({
        ...current,
        businessInfo: {
          ...current.businessInfo,
          [field]: event.target.value,
        },
      }));
    };

  const updateBusinessSurvey =
    (field: keyof typeof form.businessSurvey) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const value =
        field === "monthlyProcessedVolume"
          ? Number(event.target.value)
          : event.target.value;

      setForm((current) => ({
        ...current,
        businessSurvey: {
          ...current.businessSurvey,
          [field]: value,
        },
      }));
    };

  const updateRiskAssessment =
    (field: keyof typeof form.riskAssessment) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm((current) => ({
        ...current,
        riskAssessment: {
          ...current.riskAssessment,
          [field]: Number(event.target.value),
        },
      }));
    };

  const toggleRiskAssessment =
    (field: keyof typeof form.riskAssessment) => (checked: boolean) => {
      setForm((current) => ({
        ...current,
        riskAssessment: {
          ...current.riskAssessment,
          [field]: checked,
        },
      }));
    };

  const handleBusinessDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const value = event.target.value;
    setForm((current) => ({
      ...current,
      businessInfo: {
        ...current.businessInfo,
        businessDescription: value,
      },
      businessSurvey: {
        ...current.businessSurvey,
        businessModel: value,
      },
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    saveDraft(form);
    toast.success("Company profile saved");
    props.onClose?.();
  };

  return (
    <ModalWrapper onClose={props.onClose}>
      <div className="w-[82%]">
        <div className="mb-8.5">
          <h1 className="text-[#4F4F4F] text-[2rem] font-bold mb-1">
            Company Profile
          </h1>
          <p className="text-[#2B2B3D] text-sm">
            Give us some information about your business to set your account up.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <section>
            <h2 className="text-[#4F4F4F] text-lg font-bold mb-4">
              Business Information
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <ModalInput
                label="Company Name"
                placeholder="Legal registered name"
                value={form.businessInfo.companyName}
                onChange={updateBusinessInfo("companyName")}
                required
              />
              <ModalInput
                label="Registration Number"
                placeholder="Enter registration number"
                value={form.businessInfo.registrationNumber}
                onChange={updateBusinessInfo("registrationNumber")}
                required
              />
              <ModalInput
                label="Address"
                placeholder="Enter address"
                value={form.businessInfo.address}
                onChange={updateBusinessInfo("address")}
                required
              />
              <ModalInput
                label="Website"
                placeholder="https://example.com"
                value={form.businessInfo.website}
                onChange={updateBusinessInfo("website")}
                required
              />
              <ModalInput
                label="Email"
                placeholder="Enter email"
                type="email"
                value={form.businessInfo.email}
                onChange={updateBusinessInfo("email")}
                required
              />
              <ModalInput
                label="Phone Number"
                placeholder="+2347012345678"
                type="tel"
                value={form.businessInfo.phoneNumber}
                onChange={updateBusinessInfo("phoneNumber")}
                required
              />
              <ModalSelect
                label="Industry"
                value={form.businessInfo.industry}
                onChange={updateBusinessInfo("industry")}
                required
              >
                <option value="">Select industry</option>
                {INDUSTRIES.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </ModalSelect>
              <ModalInput
                label="Tax Identification Number"
                placeholder="Enter TIN"
                value={form.businessInfo.taxIdentificationNumber}
                onChange={updateBusinessInfo("taxIdentificationNumber")}
                required
              />
              <ModalInput
                label="Country"
                placeholder="Nigeria"
                value={form.businessInfo.country}
                onChange={updateBusinessInfo("country")}
                required
              />
              <ModalInput
                label="Company Logo URL"
                placeholder="https://..."
                value={form.businessInfo.companyLogoUrl}
                onChange={updateBusinessInfo("companyLogoUrl")}
                required
              />
            </div>
          </section>

          <section>
            <h2 className="text-[#4F4F4F] text-lg font-bold mb-4">
              Business Survey
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <ModalSelect
                label="Business Type"
                value={form.businessSurvey.businessType}
                onChange={updateBusinessSurvey("businessType")}
                required
              >
                <option value="">Select business type</option>
                {BUSINESS_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </ModalSelect>
              <ModalInput
                label="Survey Country"
                placeholder="Nigeria"
                value={form.businessSurvey.country}
                onChange={updateBusinessSurvey("country")}
                required
              />
              <ModalInput
                label="Monthly Processed Volume"
                placeholder="700000"
                type="number"
                min="0"
                value={form.businessSurvey.monthlyProcessedVolume || ""}
                onChange={updateBusinessSurvey("monthlyProcessedVolume")}
                required
              />
              <div>
                <p className="text-[#5C5C60] font-bold text-sm mb-2">
                  Business Description / Model
                </p>
                <textarea
                  className="border border-[#C4C4C4] text-[#3F3F3F] rounded-md min-h-[120px] text-sm p-2.5 w-full bg-[#FFFFFF6B] resize-none"
                  placeholder="Description of your product and services..."
                  value={form.businessInfo.businessDescription}
                  onChange={handleBusinessDescriptionChange}
                  required
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[#4F4F4F] text-lg font-bold mb-4">
              Risk Assessment
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <ModalInput
                label="Annual Turnover"
                placeholder="1000000"
                type="number"
                min="0"
                value={form.riskAssessment.annualTurnover || ""}
                onChange={updateRiskAssessment("annualTurnover")}
                required
              />
              <ModalInput
                label="Expected Transaction Volume"
                placeholder="50000"
                type="number"
                min="0"
                value={form.riskAssessment.expectedTransactionVolume || ""}
                onChange={updateRiskAssessment("expectedTransactionVolume")}
                required
              />
              <div className="flex flex-col gap-3 text-sm text-[#3F3F3F]">
                <ModalCheckbox
                  label="High-risk jurisdiction"
                  checked={form.riskAssessment.highRiskJurisdiction}
                  onChange={toggleRiskAssessment("highRiskJurisdiction")}
                />
                <ModalCheckbox
                  label="Sanction list check completed"
                  checked={form.riskAssessment.sanctionListCheck}
                  onChange={toggleRiskAssessment("sanctionListCheck")}
                />
                <ModalCheckbox
                  label="Adverse media check completed"
                  checked={form.riskAssessment.adverseMediaCheck}
                  onChange={toggleRiskAssessment("adverseMediaCheck")}
                />
              </div>
            </div>
          </section>

          <PrimaryButton type="submit">Save Profile</PrimaryButton>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default CompanyProfileModal;
