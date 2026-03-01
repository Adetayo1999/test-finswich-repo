const TcPolicyPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="rounded-xl bg-[#F2F2F2] p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold text-[#11151F]">
            Terms of Service Summary
          </h2>
          <button
            type="button"
            className="shrink-0 rounded-xl bg-[#712EEB] text-white text-sm font-medium px-6 py-3 hover:bg-[#5B26EF] transition-colors"
          >
            Update
          </button>
        </div>
        <p className="font-semibold text-[#11151F] mb-2">
          Effective Date: January 1, 2025
        </p>
        <p className="text-sm text-[#344054] leading-relaxed mb-6">
          This document governs your rights and obligations when using our
          services, effective from the date above.
        </p>
        <ol className="list-decimal list-inside space-y-4 text-sm text-[#344054]">
          <li>
            <span className="font-semibold text-[#11151F]">Introduction:</span>{" "}
            Welcome to SpringTD. By using our app or website, you agree to these
            Terms and Conditions.
          </li>
          <li>
            <span className="font-semibold text-[#11151F]">Eligibility:</span>{" "}
            You must be at least 18 years old and provide accurate, complete
            information upon registration.
          </li>
          <li>
            <span className="font-semibold text-[#11151F]">Services:</span> We
            offer digital wallet services, peer-to-peer transfers, card
            management, and international transactions. We reserve the right to
            modify or terminate services.
          </li>
          <li>
            <span className="font-semibold text-[#11151F]">Fees and Charges:</span>{" "}
            Our fees are transparent. Please refer to our Pricing Page for
            details.
          </li>
          <li>
            <span className="font-semibold text-[#11151F]">User Responsibilities:</span>{" "}
            You are responsible for keeping your account confidential and
            reporting any unauthorized use.
          </li>
        </ol>
      </div>

      <div className="rounded-xl bg-[#F2F2F2] p-6 sm:p-8">
        <h2 className="text-xl font-bold text-[#11151F] mb-4">
          Privacy Policy Summary
        </h2>
        <p className="font-semibold text-[#11151F] mb-2">
          Effective Date: January 1, 2025
        </p>
        <p className="text-sm text-[#344054] leading-relaxed mb-6">
          This policy outlines how we handle your personal data starting from
          the date shown above.
        </p>
        <ol className="list-decimal list-inside space-y-4 text-sm text-[#344054]">
          <li>
            <span className="font-semibold text-[#11151F]">Overview:</span> Your
            privacy is important to us. This Privacy Policy explains how Finswich
            collects, uses, and protects your personal information.
          </li>
          <li>
            <span className="font-semibold text-[#11151F]">
              Information We Collect:
            </span>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Full name, email address, and phone number</li>
              <li>Payment card information</li>
              <li>Transaction history</li>
              <li>Location data (with permission)</li>
              <li>Device information</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold text-[#11151F]">
              How We Use Your Data:
            </span>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Provide and improve our services</li>
              <li>Process transactions</li>
              <li>Prevent fraud and ensure security</li>
              <li>Send account-related notifications</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold text-[#11151F]">Data Sharing:</span> We
            may share data with:
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Regulatory authorities (when required by law)</li>
              <li>Payment partners and financial institutions</li>
              <li>Service providers under confidentiality agreements</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default TcPolicyPage;
