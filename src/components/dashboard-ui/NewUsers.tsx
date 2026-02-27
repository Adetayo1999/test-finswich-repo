export type NewUserItem = {
  id: string;
  name: string;
  avatar?: string;
  initials: string;
};

function UserAvatar({
  name,
  initials,
  src,
}: {
  name: string;
  initials: string;
  src?: string;
}) {
  if (src) {
    return (
      <span className="w-10 h-10 rounded-full overflow-hidden shrink-0 bg-[#E5E5E5] flex items-center justify-center">
        <img src={src} alt={name} className="w-full h-full object-cover" />
      </span>
    );
  }
  return (
    <span className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-[0.8125rem] font-medium text-[#1C1C1C] bg-[#F1F1F1]">
      {initials}
    </span>
  );
}

export function NewUsers({
  items = defaultItems,
  period = "last 3days",
}: {
  items?: NewUserItem[];
  period?: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex items-baseline gap-1.5 mb-4">
        <h3 className="text-sm font-bold text-[#1C1C1C]">New Users</h3>
        <span className="text-sm font-bold text-[#1C1C1C]">→</span>
        <span className="text-[0.8125rem] font-normal text-[#ABABBA]">
          {period}
        </span>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-3">
            <UserAvatar
              name={item.name}
              initials={item.initials}
              src={item.avatar}
            />
            <span className="text-[0.8125rem] font-normal text-[#1C1C1C]">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const defaultItems: NewUserItem[] = [
  { id: "1", name: "Natali Craig", initials: "NC" },
  { id: "2", name: "Drew Cano", initials: "DC" },
  { id: "3", name: "Orlando Diggs", initials: "OD" },
  { id: "4", name: "Andi Lane", initials: "AL" },
  { id: "5", name: "Kate Morrison", initials: "KM" },
  { id: "6", name: "Koray Okumus", initials: "KO" },
];
