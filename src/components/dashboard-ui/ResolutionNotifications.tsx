import { FiAlertCircle, FiUser, FiRadio } from "react-icons/fi";

export type ResolutionNotificationItem = {
  id: string;
  type: "bug" | "user" | "subscription";
  message: string;
  timestamp: string;
};

const iconMap = {
  bug: FiAlertCircle,
  user: FiUser,
  subscription: FiRadio,
};

function NotificationIcon({
  type,
}: {
  type: ResolutionNotificationItem["type"];
}) {
  const Icon = iconMap[type];
  return (
    <span className="w-10 h-10 rounded-full border-2 border-[#7DD3FC] bg-white flex items-center justify-center shrink-0">
      <Icon className="w-5 h-5 text-[#7DD3FC]" strokeWidth={1.5} />
    </span>
  );
}

export function ResolutionNotifications({
  items = defaultItems,
}: {
  items?: ResolutionNotificationItem[];
}) {
  return (
    <div className="p-6">
      <h3 className="text-sm font-bold text-[#1C1C1C] mb-4">
        Resolution Notifications
      </h3>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id} className="flex gap-3">
            <NotificationIcon type={item.type} />
            <div className="min-w-0 flex-1">
              <p className="text-[0.8125rem] font-medium text-[#1C1C1C] truncate">
                {item.message}
              </p>
              <p className="text-[0.75rem] font-normal text-[#767680] mt-0.5">
                {item.timestamp}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const defaultItems: ResolutionNotificationItem[] = [
  {
    id: "1",
    type: "bug",
    message: "You have a bug that needs...",
    timestamp: "Just now",
  },
  {
    id: "2",
    type: "user",
    message: "New user registered",
    timestamp: "59 minutes ago",
  },
  {
    id: "3",
    type: "bug",
    message: "You have a bug that needs...",
    timestamp: "12 hours ago",
  },
  {
    id: "4",
    type: "subscription",
    message: "Andi Lane subscribed to you",
    timestamp: "Today, 11:59 AM",
  },
];
