import { useRef } from "react";
import ModalWrapper from "../common/modal";
import { ModalInput, ModalSelect } from "../common/modal/form";
import { PrimaryButton } from "../ui/PrimaryButton";
import { FiUploadCloud, FiFileText, FiX } from "react-icons/fi";

interface UploadBusinessDocumentsModalProps {
  onClose?: () => void;
}

const REQUIRED_DOCUMENTS = [
  "Certificate of Incorporation (Required)",
  "Memorandum of Association or Reinstated Charter (Required)",
  "AML Policies (Required)",
  "3 Months Recent Bank Statement",
  "Company Status",
];

const PLACEHOLDER_DOCUMENTS = [
  { name: "Certificate of incorporation", timestamp: "Today, 11:59 AM", status: "edit" as const },
  { name: "Bank Statement", timestamp: "Today, 11:59 AM", status: "Verified" as const },
  { name: "Memert/Article of Association", timestamp: "Today, 11:59 AM", status: "Pending" as const },
];

const UploadBusinessDocumentsModal: React.FC<UploadBusinessDocumentsModalProps> = (props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <ModalWrapper onClose={props.onClose}>
      <div className="w-full flex justify-between gap-8">
        <div className="flex-[0.55] min-w-0">
          <div className="mb-8.5">
            <h1 className="text-[#4F4F4F] text-[2rem] font-bold mb-1">
              Upload Business Documents
            </h1>
            <p className="text-[#2B2B3D] text-sm">
              Upload company documents as listed below
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <ModalInput
                label="Name of File"
                placeholder="Description of Document"
              />
              <ModalSelect label="File Type">
                <option value="">Select Type</option>
                <option value="pdf">PDF</option>
                <option value="doc">Document</option>
                <option value="image">Image</option>
              </ModalSelect>
            </div>

            <div>
              <p className="text-[#5C5C60] font-bold text-sm mb-2">
                Upload File
              </p>
              <div
                role="button"
                tabIndex={0}
                onClick={() => fileInputRef.current?.click()}
                onKeyDown={(e) =>
                  e.key === "Enter" && fileInputRef.current?.click()
                }
                className="border border-dashed border-[#C4C4C4] rounded-md min-h-[140px] flex flex-col items-center justify-center gap-4 p-8 bg-[#FFFFFF6B] cursor-pointer hover:bg-[#FFFFFF99] transition-colors"
              >
                <FiUploadCloud className="h-8 w-8 text-[#5C5C60]" />
                <span className="text-sm text-[#3F3F3F]">
                  Choose a file or drag & drop it here
                </span>
                <button
                  type="button"
                  className="text-sm font-bold px-3 py-1.5 rounded-lg bg-[#23232B] text-white inline-flex items-center gap-2"
                  onClick={(e) => {
                    e.stopPropagation();
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
                />
              </div>
            </div>

            <div>
              <p className="text-[#5C5C60] font-bold text-sm mb-2">
                Required Documents:
              </p>
              <ol className="list-decimal list-inside text-sm text-[#3F3F3F] space-y-1">
                {REQUIRED_DOCUMENTS.map((doc, i) => (
                  <li key={i}>{doc}</li>
                ))}
              </ol>
            </div>

            <PrimaryButton type="submit" className="mt-4">
              Add Document
            </PrimaryButton>
          </form>
        </div>

        <div className="flex-[0.4] shrink-0 bg-[#FFFFFF96] rounded-3xl p-16">
          <h2 className="text-[#4F4F4F] text-lg font-bold mb-6">
            List of Company Documents
          </h2>
          <div className="flex flex-col gap-4">
            {PLACEHOLDER_DOCUMENTS.map((doc, i) => (
              <div
                key={`${doc.name}-${i}`}
                className="flex items-center gap-3"
              >
                <div className="h-10 w-10 rounded-lg bg-[#E0E7FF] flex items-center justify-center shrink-0">
                  <FiFileText className="h-5 w-5 text-[#4F46E5]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-[#1C1C1C] truncate">
                    {doc.name}
                  </p>
                  <p className="text-xs text-[#1C1C1C66] mt-0.5">
                    {doc.timestamp}
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-2">
                  {doc.status === "Verified" && (
                    <span className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-[#179E2B42] text-[#286040] border border-[#179E2B42]">
                      Verified
                    </span>
                  )}
                  {(doc.status === "edit" || doc.status === "Pending") && (
                    <>
                      {doc.status === "Pending" && (
                        <span className="text-xs font-semibold px-3.5 py-1.5 rounded-full border border-[#FF9E42] bg-[#FFECBD] text-[#C7660A]">
                          Pending
                        </span>
                      )}
                      <button
                        type="button"
                        className="text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-[#23232B] text-white"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="h-8 w-8 rounded-full bg-[#CD2C2C] text-white flex items-center justify-center"
                        aria-label="Delete"
                      >
                        <FiX className="h-4 w-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default UploadBusinessDocumentsModal;
