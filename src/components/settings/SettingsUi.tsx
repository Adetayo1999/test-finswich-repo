import clsx from "clsx";

interface SettingsInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const SettingsInput: React.FC<SettingsInputProps> = ({
  label,
  ...props
}) => {
  return (
    <div className="">
      <label className="text-[#4C535F] font-medium text-sm block mb-1.5">
        {label}
      </label>
      <input
        type="text"
        {...props}
        className="border border-[#E0E4EC] placeholder:text-[#8D98AA] text-sm bg-[#EDF2F6] rounded-md h-13 px-2.5 py-1 w-full"
      />
    </div>
  );
};

const mockActiveSessions = [
  {
    device_name: "Chrome on MacBook Pro",
    location: "Lagos, Nigeria",
    is_current: true,
    status: "Active now",
  },
  {
    device_name: "Safari on iPhone 14",
    location: "Lagos, Nigeria",
    is_current: false,
    status: "2 hours ago",
  },
  {
    device_name: "Chrome on Windows",
    location: "Lagos, Nigeria",
    is_current: false,
    status: "Yesterday",
  },
];

export const ActiveSessions = () => {
  return (
    <div className="">
      <div className="mb-6">
        <h2 className="text-2xl text-[#000000] mb-1.5 font-semibold">
          Active Sessions
        </h2>
        <p className="text-sm text-[#667185]">
          Manage your active login sessions across devices
        </p>
      </div>

      <div className="bg-[#F0F2F5] rounded-xl px-10 py-6 flex flex-col gap-y-6">
        {mockActiveSessions.map((item, key) => (
          <div
            className="bg-white border border-[#C7DAFF] rounded-md px-4 py-4 flex justify-between items-center cursor-pointer"
            key={key}
          >
            <div className="">
              <h4 className=" font-medium">{item.device_name}</h4>
              <p className="flex items-center gap-x-1 text-[#98A2B3] text-sm">
                <span>{item.location}</span>
                <span>.</span>
                <span>{item.status}</span>
              </p>
            </div>

            <button
              className={clsx(
                "font-semibold text-sm",
                item.is_current ? "text-[#56C025]" : "text-[#F33232]",
              )}
            >
              {item.is_current ? "Active" : "Revoke"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
