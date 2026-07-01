import { useRef, useState } from "react";
import toast from "react-hot-toast";
import ModalWrapper from "../common/modal";
import { ModalSelect } from "../common/modal/form";
import { PrimaryButton } from "../ui/PrimaryButton";
import { FiUploadCloud, FiFileText, FiX } from "react-icons/fi";
import { uploadFileAndWait } from "@/api/files";
import type { BusinessDocumentPayload } from "@/api/compliance";
import { useComplianceDraft } from "@/hooks/useComplianceDraft";

interface UploadBusinessDocumentsModalProps {
  onClose?: () => void;
}

const DOCUMENT_TYPES = [
  {
    label: "Certificate of Incorporation",
    value: "certificate_of_incorporation",
    required: true,
  },
  {
    label: "Articles of Association",
    value: "articles_of_association",
    required: true,
  },
  {
    label: "List of Shareholders",
    value: "list_of_shareholders",
    required: true,
  },
  {
    label: "Proof of Address",
    value: "proof_of_address",
    required: true,
  },
  {
    label: "Bank Statement",
    value: "bank_statement",
    required: true,
  },
  {
    label: "AML Policies",
    value: "aml_policies",
    required: true,
  },
  {
    label: "Data Privacy Policy",
    value: "data_privacy_policy",
    required: true,
  },
];

const UploadBusinessDocumentsModal: React.FC<UploadBusinessDocumentsModalProps> = (props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { draft, saveDraft } = useComplianceDraft();
  const [documentType, setDocumentType] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [documents, setDocuments] = useState<BusinessDocumentPayload[]>(
    draft.documents,
  );
  const [isUploading, setIsUploading] = useState(false);

  const handleAddDocument = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!documentType) {
      toast.error("Select a document type");
      return;
    }

    if (!selectedFile) {
      toast.error("Choose a file to upload");
      return;
    }

    setIsUploading(true);

    try {
      const uploadedDocument = await uploadFileAndWait(selectedFile);
      const nextDocument: BusinessDocumentPayload = {
        type: documentType,
        fileName: uploadedDocument.fileName || selectedFile.name,
        fileType:
          uploadedDocument.fileType ||
          selectedFile.type ||
          "application/octet-stream",
        fileSize: uploadedDocument.fileSize || selectedFile.size,
        fileUrl: uploadedDocument.url || "",
      };
      const nextDocuments = [
        ...documents.filter((document) => document.type !== documentType),
        nextDocument,
      ];

      setDocuments(nextDocuments);
      saveDraft({
        ...draft,
        documents: nextDocuments,
      });
      setDocumentType("");
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      toast.success("Document added");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "File upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  const removeDocument = (type: string) => {
    const nextDocuments = documents.filter((document) => document.type !== type);
    setDocuments(nextDocuments);
    saveDraft({
      ...draft,
      documents: nextDocuments,
    });
  };

  const getDocumentLabel = (type: string) =>
    DOCUMENT_TYPES.find((documentTypeOption) => documentTypeOption.value === type)
      ?.label || type;

  return (
    <ModalWrapper onClose={props.onClose}>
      <div className="w-full flex justify-between gap-8">
        <div className="flex-[0.55] min-w-0">
          <div className="mb-8.5">
            <h1 className="text-[#4F4F4F] text-[2rem] font-bold mb-1">
              Upload Business Documents
            </h1>
            <p className="text-[#2B2B3D] text-sm">
              Upload company documents as listed below.
            </p>
          </div>

          <form onSubmit={handleAddDocument} className="space-y-6">
            <ModalSelect
              label="Document Type"
              value={documentType}
              onChange={(event) => setDocumentType(event.target.value)}
              required
            >
              <option value="">Select document type</option>
              {DOCUMENT_TYPES.map((documentTypeOption) => (
                <option
                  key={documentTypeOption.value}
                  value={documentTypeOption.value}
                >
                  {documentTypeOption.label}
                  {documentTypeOption.required ? " (Required)" : ""}
                </option>
              ))}
            </ModalSelect>

            <div>
              <p className="text-[#5C5C60] font-bold text-sm mb-2">
                Upload File
              </p>
              <div
                role="button"
                tabIndex={0}
                onClick={() => fileInputRef.current?.click()}
                onKeyDown={(event) =>
                  event.key === "Enter" && fileInputRef.current?.click()
                }
                className="border border-dashed border-[#C4C4C4] rounded-md min-h-[140px] flex flex-col items-center justify-center gap-4 p-8 bg-[#FFFFFF6B] cursor-pointer hover:bg-[#FFFFFF99] transition-colors"
              >
                <FiUploadCloud className="h-8 w-8 text-[#5C5C60]" />
                <span className="text-sm text-[#3F3F3F] max-w-full truncate">
                  {selectedFile?.name || "Choose a file or drag & drop it here"}
                </span>
                <button
                  type="button"
                  className="text-sm font-bold px-3 py-1.5 rounded-lg bg-[#23232B] text-white inline-flex items-center gap-2"
                  onClick={(event) => {
                    event.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                >
                  <FiFileText className="h-4 w-4" />
                  Browse File
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx,image/*"
                  onChange={(event) =>
                    setSelectedFile(event.target.files?.[0] || null)
                  }
                />
              </div>
            </div>

            <div>
              <p className="text-[#5C5C60] font-bold text-sm mb-2">
                Required Documents:
              </p>
              <ol className="list-decimal list-inside text-sm text-[#3F3F3F] space-y-1">
                {DOCUMENT_TYPES.map((documentTypeOption) => (
                  <li key={documentTypeOption.value}>
                    {documentTypeOption.label}
                    {documentTypeOption.required ? " (Required)" : ""}
                  </li>
                ))}
              </ol>
            </div>

            <PrimaryButton
              type="submit"
              className="mt-4"
              loading={isUploading}
              loadingText="Uploading..."
            >
              Add Document
            </PrimaryButton>
          </form>
        </div>

        <div className="flex-[0.4] shrink-0 bg-[#FFFFFF96] rounded-3xl p-12">
          <h2 className="text-[#4F4F4F] text-lg font-bold mb-6">
            List of Company Documents
          </h2>
          {documents.length ? (
            <div className="flex flex-col gap-4">
              {documents.map((document) => (
                <div key={document.type} className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#E0E7FF] flex items-center justify-center shrink-0">
                    <FiFileText className="h-5 w-5 text-[#4F46E5]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-[#1C1C1C] truncate">
                      {getDocumentLabel(document.type)}
                    </p>
                    <p className="text-xs text-[#1C1C1C66] mt-0.5 truncate">
                      {document.fileName}
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center gap-2">
                    <button
                      type="button"
                      className="h-8 w-8 rounded-full bg-[#CD2C2C] text-white flex items-center justify-center"
                      aria-label="Delete"
                      onClick={() => removeDocument(document.type)}
                    >
                      <FiX className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-[#1C1C1C66]">
              Uploaded company documents will appear here.
            </p>
          )}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default UploadBusinessDocumentsModal;
