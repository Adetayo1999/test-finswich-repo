import { useState } from "react";
import { FaCopy, FaTrash } from "react-icons/fa6";
import { useCopy } from "@/hooks/useCopy";

type KeyType = "production" | "development";

type ApiKeyEntry = {
  id: string;
  type: KeyType;
  createdDate: string;
  keyValue: string;
};

const MOCK_KEYS: ApiKeyEntry[] = [
  { id: "1", type: "production", createdDate: "Dec 1, 2025", keyValue: "pk_live_••••••••••••••••" },
  { id: "2", type: "production", createdDate: "Dec 5, 2025", keyValue: "pk_live_••••••••••••••••" },
  { id: "3", type: "development", createdDate: "Dec 8, 2025", keyValue: "pk_test_••••••••••••••••" },
];

const DeveloperPage = () => {
  const [keys, setKeys] = useState<ApiKeyEntry[]>(MOCK_KEYS);
  const { copyToClipboard } = useCopy();

  const removeKey = (id: string) => {
    setKeys((prev) => prev.filter((k) => k.id !== id));
  };

  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#11151F]">API Keys</h1>
          <p className="mt-1 text-sm text-[#767680]">
            Manage your API keys for integration
          </p>
        </div>
        <button
          type="button"
          className="shrink-0 rounded-xl bg-[#712EEB] text-white text-sm font-medium px-6 py-3 hover:bg-[#5B26EF] transition-colors"
        >
          Generate New Key
        </button>
      </div>

      <div className="bg-white rounded-xl border border-[#E4E7EC] p-4 sm:p-6">
        <div className="flex flex-col gap-3">
          {keys.map((entry) => (
            <div
              key={entry.id}
              className="flex flex-wrap items-center justify-between gap-4 rounded-lg bg-[#F2F2F2] px-4 py-3"
            >
              <div className="flex flex-wrap items-center gap-4 min-w-0">
                <span className="text-sm font-semibold text-[#11151F]">
                  {entry.type === "production" ? "Production Key" : "Development Key"}
                </span>
                <span className="text-sm text-[#767680]">
                  Created {entry.createdDate}
                </span>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => copyToClipboard(entry.keyValue)}
                  className="p-1.5 text-[#1C1C1C] hover:bg-[#E4E7EC] rounded transition-colors"
                  title="Copy"
                >
                  <FaCopy className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => removeKey(entry.id)}
                  className="p-1.5 text-red-500 hover:bg-red-50 rounded transition-colors"
                  title="Delete"
                >
                  <FaTrash className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-[#E4E7EC] p-6 flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-[#11151F]">
            API Docs for Custom UI
          </h2>
          <p className="text-sm text-[#767680] leading-relaxed">
            Our API documentation for Integrating our backend to your own
            customized frontend can be found here.
          </p>
          <button
            type="button"
            className="self-start rounded-xl bg-[#712EEB] text-white text-sm font-medium px-6 py-3 hover:bg-[#5B26EF] transition-colors"
          >
            View API Docs
          </button>
        </div>
        <div className="bg-white rounded-xl border border-[#E4E7EC] p-6 flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-[#11151F]">
            API Docs for Self-Host
          </h2>
          <p className="text-sm text-[#767680] leading-relaxed">
            Our API documentation to host the entire application on your
            environment can be found here.
          </p>
          <button
            type="button"
            className="self-start rounded-xl bg-[#712EEB] text-white text-sm font-medium px-6 py-3 hover:bg-[#5B26EF] transition-colors"
          >
            View API Docs
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeveloperPage;
