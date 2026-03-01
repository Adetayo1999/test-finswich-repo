import {
  FaCircleQuestion,
  FaRegCircleQuestion,
  FaPhone,
  FaChevronRight,
} from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const SUPPORT_OPTIONS = [
  {
    id: "customer-support",
    label: "Customer Support",
    icon: FaCircleQuestion,
    iconClassName: "bg-[#1C1C1C] text-white rounded-full p-2",
  },
  {
    id: "website",
    label: "Website",
    icon: FaRegCircleQuestion,
    iconClassName: "text-[#767680] border border-[#E4E7EC] rounded-full p-2",
  },
  {
    id: "phone",
    label: "Phone",
    icon: FaPhone,
    iconClassName: "text-[#767680] border border-[#E4E7EC] rounded-full p-2",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: FaWhatsapp,
    iconClassName: "text-[#767680] border border-[#E4E7EC] rounded-full p-2",
  },
] as const;

const ContactSupportPage = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#11151F]">
            Customer Support
          </h1>
          <p className="mt-1 text-sm text-[#767680]">
            Add more information on how your customer can reach you.
          </p>
        </div>
        <button
          type="button"
          className="shrink-0 rounded-xl bg-[#712EEB] text-white text-sm font-medium px-6 py-3 hover:bg-[#5B26EF] transition-colors"
        >
          Update
        </button>
      </div>

      <div className="rounded-xl bg-[#F2F2F2] p-4 flex flex-col gap-3">
        {SUPPORT_OPTIONS.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white rounded-lg border border-[#E4E7EC] shadow-sm hover:shadow hover:border-[#E4E7EC]/80 transition-shadow"
            >
              <div className="flex items-center gap-4 min-w-0">
                <span className={item.iconClassName}>
                  <Icon className="w-4 h-4" />
                </span>
                <span className="text-sm font-medium text-[#11151F]">
                  {item.label}
                </span>
              </div>
              <FaChevronRight className="w-4 h-4 text-[#767680] shrink-0" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ContactSupportPage;
