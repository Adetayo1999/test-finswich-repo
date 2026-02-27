export type TxnActivityItem = {
  id: string;
  avatar?: string;
  initials: string;
  description: string;
  timestamp: string;
  avatarBg?: string;
};

function Avatar({
  initials,
  src,
  bg = "bg-[#86EFAC]",
}: {
  initials: string;
  src?: string;
  bg?: string;
}) {
  if (src) {
    return (
      <span className="w-10 h-10 rounded-full overflow-hidden shrink-0 bg-[#E5E5E5] flex items-center justify-center">
        <img src={src} alt="" className="w-full h-full object-cover" />
      </span>
    );
  }
  return (
    <span
      className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-[0.8125rem] font-medium text-[#1C1C1C] ${bg}`}
    >
      {initials}
    </span>
  );
}

export function OngoingTxnActivities({
  items = defaultItems,
}: {
  items?: TxnActivityItem[];
}) {
  return (
    <div className="bg-white rounded-xl p-6">
      <h3 className="text-sm font-bold text-[#1C1C1C] mb-5">
        Ongoing Txn Activities
      </h3>
      <div className="relative">
        <div
          className="absolute left-5 top-5 bottom-5 w-px bg-[#E5E5E5]"
          aria-hidden
        />
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="flex gap-3 relative">
              <div className="relative z-10">
                <Avatar
                  initials={item.initials}
                  src={item.avatar}
                  bg={item.avatarBg}
                />
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <p className="text-[0.8125rem] font-normal text-[#1C1C1C]">
                  {item.description}
                </p>
                <p className="text-[0.75rem] font-normal text-[#767680] mt-0.5">
                  {item.timestamp}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const defaultItems: TxnActivityItem[] = [
  {
    id: "1",
    initials: "AC",
    description: "Avis Charles sent $23",
    timestamp: "Just now",
    avatarBg: "bg-[#86EFAC]",
  },
  {
    id: "2",
    initials: "TA",
    description: "Teslim Ay.. $0.34 airtime p...",
    timestamp: "59 minutes ago",
    avatarBg: "bg-[#D4A574]",
  },
  {
    id: "3",
    initials: "JD",
    description: "John do.. $16k global transf..",
    timestamp: "12 hours ago",
    avatarBg: "bg-[#7DD3FC]",
  },
  {
    id: "4",
    initials: "M",
    description: "Modified A data in Page X",
    timestamp: "Today, 11:59 AM",
    avatarBg: "bg-[#94A3B8]",
  },
  {
    id: "5",
    initials: "D",
    description: "Deleted a page in Project X",
    timestamp: "Feb 2, 2023",
    avatarBg: "bg-[#E5E5E5]",
  },
];
