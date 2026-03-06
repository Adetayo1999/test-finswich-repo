import { useEffect, useMemo, useRef, useState } from "react";

interface SimpleWysiwygProps {
  placeholder?: string;
  className?: string;
  minHeight?: string;
  defaultContent?: string;
}

export const SimpleWysiwyg = ({
  placeholder = "Write your content here...",
  className = "",
  minHeight = "200px",
  defaultContent = "",
}: SimpleWysiwygProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<"visual" | "text">("visual");
  const [content, setContent] = useState(defaultContent);

  const exec = (cmd: string, value?: string) => {
    document.execCommand(cmd, false, value);
    setContent(editorRef.current?.innerHTML ?? "");
    editorRef.current?.focus();
  };

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== content) {
      editorRef.current.innerHTML = content;
    }
  }, [content, mode]);

  const plainText = useMemo(
    () =>
      content
        .replace(/<br\s*\/?>/gi, " ")
        .replace(/<\/(p|div|li|h[1-6])>/gi, " ")
        .replace(/<[^>]+>/g, "")
        .replace(/\s+/g, " ")
        .trim(),
    [content],
  );

  const wordCount = plainText ? plainText.split(" ").length : 0;
  const readingTime = Math.max(1, Math.round(wordCount / 250));

  return (
    <div
      className={`overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white shadow-[0px_8px_24px_rgba(16,24,40,0.04)] ${className}`}
    >
      <div className="flex items-center justify-between border-b border-[#E5E7EB] px-4 py-3">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-2 text-sm font-semibold text-[#4B5563]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.66667 2H4.66667C3.93029 2 3.33334 2.59695 3.33334 3.33333V12.6667C3.33334 13.403 3.93029 14 4.66667 14H11.3333C12.0697 14 12.6667 13.403 12.6667 12.6667V6L8.66667 2Z"
              stroke="#6B7280"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.66666 2V6H12.6667"
              stroke="#6B7280"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 9.33331H10"
              stroke="#6B7280"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
          Add Media
        </button>
        <div className="inline-flex items-center gap-6 px-2 text-sm font-semibold">
          <button
            type="button"
            onClick={() => setMode("visual")}
            className={mode === "visual" ? "text-[#111827]" : "text-[#6B7280]"}
          >
            Visual
          </button>
          <button
            type="button"
            onClick={() => setMode("text")}
            className={mode === "text" ? "text-[#111827]" : "text-[#6B7280]"}
          >
            Text
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center border-b border-[#E5E7EB]">
        <button
          type="button"
          className="inline-flex items-center gap-2 border-r border-[#E5E7EB] px-4 py-3 text-sm text-[#374151]"
        >
          Paragraph
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="#6B7280"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <ToolbarButton onClick={() => exec("removeFormat")} label="A" />
        <ToolbarButton onClick={() => exec("hiliteColor", "#FEF3C7")} label="A" />
        <ToolbarButton onClick={() => exec("bold")} label="B" className="font-bold" />
        <ToolbarButton onClick={() => exec("italic")} label="I" className="italic" />
        <ToolbarButton onClick={() => exec("underline")} label="U" className="underline" />
        <ToolbarButton onClick={() => exec("strikeThrough")} label="S" className="line-through" />
        <ToolbarButton onClick={() => exec("justifyLeft")} label="≡" />
        <ToolbarButton onClick={() => exec("justifyCenter")} label="≣" />
        <ToolbarButton onClick={() => exec("justifyRight")} label="≡" />
        <ToolbarButton onClick={() => exec("insertOrderedList")} label="1." />
        <ToolbarButton onClick={() => exec("insertUnorderedList")} label="•" />
        <ToolbarButton onClick={() => exec("createLink", "https://example.com")} label="⌕" />
        <ToolbarButton onClick={() => exec("insertImage", "https://placehold.co/120x80")} label="▣" />
      </div>

      {mode === "visual" ? (
        <div
          ref={editorRef}
          contentEditable
          data-placeholder={placeholder}
          onInput={() => setContent(editorRef.current?.innerHTML ?? "")}
          className="min-w-0 px-5 py-4 text-base leading-9 text-[#374151] outline-none empty:before:content-[attr(data-placeholder)] empty:before:text-[#9CA3AF]"
          style={{ minHeight }}
          suppressContentEditableWarning
        />
      ) : (
        <textarea
          value={plainText}
          onChange={(e) => setContent(e.target.value.replace(/\n/g, "<br />"))}
          className="min-h-[240px] w-full resize-none px-5 py-4 text-base leading-8 text-[#374151] outline-none"
          style={{ minHeight }}
        />
      )}

      <div className="border-t border-[#E5E7EB] px-5 py-3 text-sm text-[#6B7280]">
        Word Count: {wordCount.toLocaleString()}{" "}
        <span className="px-2 text-[#D1D5DB]">•</span>
        Reading Time: ~{readingTime}min
      </div>
    </div>
  );
};

interface ToolbarButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const ToolbarButton = ({
  label,
  onClick,
  className = "",
}: ToolbarButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`border-r border-[#E5E7EB] px-4 py-3 text-sm text-[#4B5563] ${className}`}
  >
    {label}
  </button>
);
