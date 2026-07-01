import { useRef, useState } from "react";
import toast from "react-hot-toast";
import ModalWrapper from "../common/modal";
import { ModalInput, ModalSelect } from "../common/modal/form";
import { PrimaryButton } from "../ui/PrimaryButton";
import { FiCopy, FiFileText, FiTrash2, FiUploadCloud } from "react-icons/fi";
import { uploadFileAndWait } from "@/api/files";
import type { ComplianceDocument, ShareholderPayload } from "@/api/compliance";
import { useCreateShareholders, useShareholders } from "@/hooks/api/useCompliance";
import { useCopy } from "@/hooks/useCopy";

interface ShareholdersModalProps {
  onClose?: () => void;
}

type ShareholderForm = {
  fullName: string;
  delegation: string;
  email: string;
  phoneNumber: string;
  bvn: string;
  bankAccount: string;
  ownershipPercentage: string;
};

type UploadedFileState = {
  file: File;
  document: ComplianceDocument;
};

const initialForm: ShareholderForm = {
  fullName: "",
  delegation: "",
  email: "",
  phoneNumber: "",
  bvn: "",
  bankAccount: "",
  ownershipPercentage: "",
};

function toComplianceDocument(file: File, document: Awaited<ReturnType<typeof uploadFileAndWait>>): ComplianceDocument {
  return {
    fileName: document.fileName || file.name,
    fileType: document.fileType || file.type || "application/octet-stream",
    fileSize: document.fileSize || file.size,
    fileUrl: document.url || "",
  };
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

function statusClasses(status?: string) {
  const normalizedStatus = status?.toLowerCase();

  if (normalizedStatus === "verified" || normalizedStatus === "approved") {
    return "bg-[#179E2B42] text-[#286040] border-[#179E2B42]";
  }

  return "border-[#FF9E42] bg-[#FFECBD] text-[#C7660A]";
}

const ShareholdersModal: React.FC<ShareholdersModalProps> = (props) => {
  const bankStatementInputRef = useRef<HTMLInputElement>(null);
  const uboDocumentInputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState<ShareholderForm>(initialForm);
  const [uboDocument, setUboDocument] = useState<UploadedFileState | null>(null);
  const [bankStatement, setBankStatement] = useState<UploadedFileState | null>(
    null,
  );
  const [queuedShareholders, setQueuedShareholders] = useState<
    ShareholderPayload[]
  >([]);
  const [uploadingField, setUploadingField] = useState<
    "uboDocument" | "bankStatement" | null
  >(null);

  const shareholdersQuery = useShareholders();
  const createShareholdersMutation = useCreateShareholders();
  const { copyToClipboard } = useCopy();

  const updateForm =
    (field: keyof ShareholderForm) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleFileUpload = async (
    file: File | undefined,
    field: "uboDocument" | "bankStatement",
  ) => {
    if (!file) return;

    setUploadingField(field);

    try {
      const uploadedDocument = await uploadFileAndWait(file);
      const nextDocument = {
        file,
        document: toComplianceDocument(file, uploadedDocument),
      };

      if (field === "uboDocument") {
        setUboDocument(nextDocument);
      } else {
        setBankStatement(nextDocument);
      }

      toast.success(`${file.name} uploaded successfully`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "File upload failed");
    } finally {
      setUploadingField(null);
    }
  };

  const resetCurrentEntry = () => {
    setForm(initialForm);
    setUboDocument(null);
    setBankStatement(null);
    if (uboDocumentInputRef.current) uboDocumentInputRef.current.value = "";
    if (bankStatementInputRef.current) {
      bankStatementInputRef.current.value = "";
    }
  };

  const handleAddToBatch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const ownershipPercentage = Number(form.ownershipPercentage);

    if (
      !form.fullName ||
      !form.delegation ||
      !form.email ||
      !form.phoneNumber ||
      !form.bvn ||
      !form.bankAccount
    ) {
      toast.error("Please complete all shareholder fields");
      return;
    }

    if (!Number.isFinite(ownershipPercentage) || ownershipPercentage <= 0) {
      toast.error("Enter a valid ownership percentage");
      return;
    }

    if (!uboDocument || !bankStatement) {
      toast.error("Upload both UBO document and bank statement");
      return;
    }

    setQueuedShareholders((current) => [
      ...current,
      {
        fullName: form.fullName.trim(),
        delegation: form.delegation,
        email: form.email.trim(),
        phoneNumber: form.phoneNumber.trim(),
        bvn: form.bvn.trim(),
        bankAccount: form.bankAccount.trim(),
        ownershipPercentage,
        uboDocument: uboDocument.document,
        bankStatement: bankStatement.document,
      },
    ]);
    resetCurrentEntry();
    toast.success("Shareholder added to batch");
  };

  const handleSubmitBatch = async () => {
    if (!queuedShareholders.length) {
      toast.error("Add at least one shareholder before submitting");
      return;
    }

    try {
      const response = await createShareholdersMutation.mutateAsync({
        shareholders: queuedShareholders,
      });

      toast.success(response.message || "Shareholders created successfully");
      setQueuedShareholders([]);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to create shareholders",
      );
    }
  };

  const removeQueuedShareholder = (index: number) => {
    setQueuedShareholders((current) =>
      current.filter((_shareholder, currentIndex) => currentIndex !== index),
    );
  };

  return (
    <ModalWrapper onClose={props.onClose}>
      <div className="w-full flex justify-between gap-8">
        <div className="flex-[0.55] min-w-0">
          <div className="mb-8.5">
            <h1 className="text-[#4F4F4F] text-[2rem] font-bold mb-1">
              Shareholders Details
            </h1>
            <p className="text-[#2B2B3D] text-sm">
              Add multiple shareholders, directors and their share quota before
              submitting.
            </p>
          </div>

          <form onSubmit={handleAddToBatch} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <ModalInput
                label="Full Name"
                placeholder="Enter full legal name"
                value={form.fullName}
                onChange={updateForm("fullName")}
              />
              <ModalSelect
                label="Select Designation"
                value={form.delegation}
                onChange={updateForm("delegation")}
              >
                <option value="">Select Designation</option>
                <option value="director">Director</option>
                <option value="shareholder">Shareholder</option>
              </ModalSelect>
              <ModalInput
                label="Email"
                placeholder="Enter email"
                type="email"
                value={form.email}
                onChange={updateForm("email")}
              />
              <ModalInput
                label="Phone Number"
                placeholder="+2347012345678"
                type="tel"
                value={form.phoneNumber}
                onChange={updateForm("phoneNumber")}
              />
              <ModalInput
                label="BVN"
                placeholder="Enter BVN"
                inputMode="numeric"
                value={form.bvn}
                onChange={updateForm("bvn")}
              />
              <ModalInput
                label="Bank Account"
                placeholder="Enter bank account number"
                inputMode="numeric"
                value={form.bankAccount}
                onChange={updateForm("bankAccount")}
              />
              <ModalInput
                label="Percentage Ownership"
                placeholder="e.g. 50"
                type="number"
                min="0"
                step="0.01"
                value={form.ownershipPercentage}
                onChange={updateForm("ownershipPercentage")}
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <FilePicker
                label="UBO Document"
                fileName={uboDocument?.file.name}
                isUploading={uploadingField === "uboDocument"}
                inputRef={uboDocumentInputRef}
                onClick={() => uboDocumentInputRef.current?.click()}
                onFileChange={(file) => handleFileUpload(file, "uboDocument")}
              />
              <FilePicker
                label="Bank statement (Recent 3 months)"
                fileName={bankStatement?.file.name}
                isUploading={uploadingField === "bankStatement"}
                inputRef={bankStatementInputRef}
                onClick={() => bankStatementInputRef.current?.click()}
                onFileChange={(file) => handleFileUpload(file, "bankStatement")}
              />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <PrimaryButton type="submit" disabled={Boolean(uploadingField)}>
                Add to Batch
              </PrimaryButton>
              <PrimaryButton
                type="button"
                className="bg-[#23232B] hover:bg-[#101014] px-8"
                loading={createShareholdersMutation.isPending}
                loadingText="Submitting..."
                onClick={handleSubmitBatch}
                disabled={!queuedShareholders.length || Boolean(uploadingField)}
              >
                Submit {queuedShareholders.length || ""} Shareholder
                {queuedShareholders.length === 1 ? "" : "s"}
              </PrimaryButton>
            </div>
          </form>
        </div>

        <div className="flex-[0.4] shrink-0 bg-[#FFFFFF96] rounded-3xl p-8">
          <h2 className="text-[#4F4F4F] text-lg font-bold mb-6">
            List of Shareholders
          </h2>

          <div className="mb-6">
            <p className="text-[#5C5C60] font-bold text-sm mb-3">
              Current batch
            </p>
            {queuedShareholders.length ? (
              <div className="flex flex-col gap-3">
                {queuedShareholders.map((shareholder, index) => (
                  <ShareholderRow
                    key={`${shareholder.email}-${index}`}
                    name={shareholder.fullName}
                    subtitle={shareholder.delegation}
                    percent={`${shareholder.ownershipPercentage}%`}
                    status="queued"
                    action={
                      <button
                        type="button"
                        className="h-8 w-8 rounded-full bg-[#FAD6D6] text-[#CD2C2C] flex items-center justify-center"
                        onClick={() => removeQueuedShareholder(index)}
                        aria-label="Remove shareholder"
                      >
                        <FiTrash2 className="h-4 w-4" />
                      </button>
                    }
                  />
                ))}
              </div>
            ) : (
              <p className="text-sm text-[#1C1C1C66]">
                Added shareholders will appear here before submission.
              </p>
            )}
          </div>

          <div>
            <p className="text-[#5C5C60] font-bold text-sm mb-3">
              Submitted shareholders
            </p>
            {shareholdersQuery.isLoading ? (
              <p className="text-sm text-[#1C1C1C66]">Loading shareholders...</p>
            ) : shareholdersQuery.isError ? (
              <p className="text-sm text-[#CD2C2C]">
                {shareholdersQuery.error instanceof Error
                  ? shareholdersQuery.error.message
                  : "Unable to fetch shareholders"}
              </p>
            ) : shareholdersQuery.data?.length ? (
              <div className="flex flex-col gap-3">
                {shareholdersQuery.data.map((shareholder, index) => (
                  <ShareholderRow
                    key={`${shareholder.email}-${shareholder.kyc?.providerReference || index}`}
                    name={shareholder.fullName}
                    subtitle={shareholder.delegation}
                    percent={`${shareholder.ownershipPercentage}%`}
                    status={shareholder.status || shareholder.kyc?.status}
                    action={
                      shareholder.kyc?.url ? (
                        <button
                          type="button"
                          className="h-8 w-8 rounded-full bg-[#23232B] text-white flex items-center justify-center"
                          onClick={() => copyToClipboard(shareholder.kyc!.url)}
                          aria-label="Copy KYC URL"
                        >
                          <FiCopy className="h-4 w-4" />
                        </button>
                      ) : null
                    }
                  />
                ))}
              </div>
            ) : (
              <p className="text-sm text-[#1C1C1C66]">
                No shareholders submitted yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

type FilePickerProps = {
  label: string;
  fileName?: string;
  isUploading: boolean;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onClick: VoidFunction;
  onFileChange: (file: File | undefined) => void;
};

const FilePicker: React.FC<FilePickerProps> = ({
  label,
  fileName,
  isUploading,
  inputRef,
  onClick,
  onFileChange,
}) => (
  <div>
    <p className="text-[#5C5C60] font-bold text-sm mb-2">{label}</p>
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(event) => event.key === "Enter" && onClick()}
      className="border border-dashed border-[#C4C4C4] rounded-md min-h-28 flex flex-col items-center justify-center gap-2 bg-[#FFFFFF6B] cursor-pointer hover:bg-[#FFFFFF99] transition-colors p-4 text-center"
    >
      {fileName ? (
        <FiFileText className="h-7 w-7 text-[#712EEB]" />
      ) : (
        <FiUploadCloud className="h-7 w-7 text-[#5C5C60]" />
      )}
      <span className="text-sm text-[#3F3F3F] max-w-full truncate">
        {isUploading
          ? "Uploading..."
          : fileName || "Choose a file or drag & drop it here"}
      </span>
      <button
        type="button"
        className="text-sm font-bold text-[#712EEB]"
        onClick={(event) => {
          event.stopPropagation();
          onClick();
        }}
      >
        Browse file
      </button>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept=".pdf,.doc,.docx,image/*"
        onChange={(event) => onFileChange(event.target.files?.[0])}
      />
    </div>
  </div>
);

type ShareholderRowProps = {
  name: string;
  subtitle?: string;
  percent: string;
  status?: string;
  action?: React.ReactNode;
};

const ShareholderRow: React.FC<ShareholderRowProps> = ({
  name,
  subtitle,
  percent,
  status,
  action,
}) => (
  <div className="flex items-center gap-3">
    <div className="h-10 w-10 rounded-full bg-[#E9D3FD] flex items-center justify-center text-sm font-bold text-[#712EEB] shrink-0">
      {getInitials(name) || "S"}
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-sm text-[#1C1C1C] font-medium truncate">
        {name} - {percent}
      </p>
      <p className="text-xs text-[#1C1C1C66] mt-0.5 capitalize truncate">
        {subtitle || "Shareholder"}
      </p>
    </div>
    <div className="shrink-0 flex items-center gap-2">
      {status && (
        <span
          className={`text-xs font-semibold px-3 py-1.5 rounded-full shadow-[0px_0.81px_1.61px_0px_#1018280D] border min-w-16 text-center capitalize ${statusClasses(status)}`}
        >
          {status}
        </span>
      )}
      {action}
    </div>
  </div>
);

export default ShareholdersModal;
