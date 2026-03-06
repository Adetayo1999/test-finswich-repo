interface MobilePreviewPlaceholderProps {
  title?: string;
  children?: React.ReactNode;
}

export const MobilePreviewPlaceholder = ({
  title = "Mobile Preview",
  children,
}: MobilePreviewPlaceholderProps) => {
  return (
    <div className="flex flex-col  ">
      {title && (
        <h3 className="mb-3 w-full text-left text-sm font-semibold text-[#111827]">
          {title}
        </h3>
      )}
      <div className="flex h-150 w-78 flex-col overflow-hidden rounded-[30px] border-10 border-[#1e3a5f] bg-[#1e3a5f] shadow-xl">
        <div className="flex flex-1 flex-col items-center justify-center bg-[#2d4a6f] p-4">
          {children ?? (
            <div className="flex h-24 w-24 items-center justify-center rounded-xl border-2 border-dashed border-white/30 bg-white/10">
              <span className="text-center text-xs font-medium text-white/80">
                Your LOGO
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
