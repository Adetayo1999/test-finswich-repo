import { useState } from "react";
import { FaPaperPlane, FaCheck } from "react-icons/fa6";
import { CopyableText } from "../common/copyable-text";
import { FilterDropdown } from "../wallets/WalletsUI";
import clsx from "clsx";

type DisputeItem = {
  id: string;
  country: string;
  countryFlag: string;
  amount: string;
  currency: string;
  timestamp: string;
  customerName: string;
  customerEmail: string;
  unreadCount: number;
};

const MOCK_DISPUTES: DisputeItem[] = [
  {
    id: "1",
    country: "Ghana",
    countryFlag: "🇬🇭",
    amount: "50.00",
    currency: "GHS",
    timestamp: "12:23am 12th Sept, 2025",
    customerName: "Charles Avis A",
    customerEmail: "talktoavischarles@gmail.com",
    unreadCount: 3,
  },
  {
    id: "2",
    country: "Kenya",
    countryFlag: "🇰🇪",
    amount: "12.43",
    currency: "KES",
    timestamp: "12:23am 12th Sept, 2025",
    customerName: "Charles Avis A",
    customerEmail: "talktoavischarles@gmail.com",
    unreadCount: 2,
  },
  {
    id: "3",
    country: "Nigeria",
    countryFlag: "🇳🇬",
    amount: "5000.66",
    currency: "NGN",
    timestamp: "12:23am 12th Sept, 2025",
    customerName: "Charles Avis A",
    customerEmail: "talktoavischarles@gmail.com",
    unreadCount: 4,
  },
];

const WORKFLOW_STEPS = [
  { label: "New Issue", done: true, color: "blue" },
  { label: "Under Review", done: false, color: "orange" },
  { label: "Mark as Resolved", done: false, color: "green" },
] as const;

const CHAT_MESSAGES = [
  {
    id: "1",
    from: "customer",
    text: "Hello, I made a transaction recharge my phone but I am yet to receive the value.",
    time: "12:23am 12th Sept, 2025",
  },
  {
    id: "2",
    from: "customer",
    text: "Please help look into this",
    time: "12:23am 12th Sept, 2025",
  },
  {
    id: "3",
    from: "agent",
    text: "Dear Charles, Thanks for reaching out. We appologise for any inconvenience. We have escalated this for resolution. You will hear from us in 24 hours. Thanks",
    time: "12:23am 12th Sept, 2025",
  },
];

export const AllDisputesView = () => {
  const [selectedId, setSelectedId] = useState(MOCK_DISPUTES[0]?.id ?? "");
  const [message, setMessage] = useState("");
  const [resolvedToggled, setResolvedToggled] = useState(false);

  const selected = MOCK_DISPUTES.find((d) => d.id === selectedId);

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-12rem)] min-h-0">
      <div className="lg:w-88 flex flex-col min-h-0 border border-[#E4E7EC] rounded-xl bg-white overflow-hidden">
        <div className="p-4 border-b border-[#E4E7EC] shrink-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h1 className="text-lg font-bold text-[#11151F]">All Disputes</h1>
            <FilterDropdown
              value="all"
              onValueChange={() => {}}
              options={[{ value: "all", label: "ALL COUNTRIES" }]}
              placeholder="ALL COUNTRIES"
            />
          </div>
          <p className="text-sm text-[#767680]">
            See and manage all transaction dispute here.
          </p>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-2">
          {MOCK_DISPUTES.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => setSelectedId(d.id)}
              className={clsx(
                "w-full text-left p-3 rounded-lg border transition-colors",
                selectedId === d.id
                  ? "bg-[#E8F4FD] border-[#0243EC]/30"
                  : "bg-white border-[#E4E7EC] hover:bg-[#F7F9FB]"
              )}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg shrink-0" aria-hidden>{d.countryFlag}</span>
                <span className="text-sm font-semibold text-[#11151F] min-w-0 flex-1">
                  {d.currency} {d.amount}
                </span>
                {d.unreadCount > 0 && (
                  <span className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#0243EC] text-white text-xs font-medium">
                    {d.unreadCount}
                  </span>
                )}
              </div>
              <p className="text-xs text-[#767680] mb-2">{d.timestamp}</p>
              <p className="text-xs text-[#344054] truncate">
                {d.customerName} + {d.customerEmail}
              </p>
            </button>
          ))}
        </div>
        <div className="p-3 border-t border-[#E4E7EC] flex items-center justify-center gap-1 shrink-0">
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center rounded text-[#767680] hover:bg-[#F2F2F2]"
          >
            ‹
          </button>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              className={clsx(
                "min-w-7 h-8 rounded flex items-center justify-center text-sm",
                n === 1
                  ? "bg-[#0243EC] text-white font-medium"
                  : "text-[#344054] hover:bg-[#F2F2F2]"
              )}
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center rounded text-[#767680] hover:bg-[#F2F2F2]"
          >
            ›
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col min-h-0 border border-[#E4E7EC] rounded-xl bg-white overflow-hidden">
        {!selected ? (
          <div className="flex-1 flex items-center justify-center text-[#767680] text-sm">
            Select a dispute
          </div>
        ) : (
          <>
            <div className="p-6 border-b border-[#E4E7EC] shrink-0 space-y-3">
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                <div>
                  <span className="text-[#767680]">Transaction Amount:</span>{" "}
                  <span className="font-medium text-[#11151F]">
                    {selected.currency} {selected.amount}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#767680]">Transaction Ref:</span>
                  <CopyableText
                    text="TXN-0990003439343"
                    className="font-medium text-[#11151F] max-w-none"
                  />
                </div>
                <div>
                  <span className="text-[#767680]">Timestamp:</span>{" "}
                  <span className="text-[#11151F]">
                    12:00PM (12th Jan 2026)
                  </span>
                </div>
                <div>
                  <span className="text-[#767680]">Transaction Type:</span>{" "}
                  <span className="text-[#11151F]">Utility</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#767680]">Account:</span>
                  <CopyableText
                    text="+3357045274781"
                    className="font-medium text-[#11151F] max-w-none"
                  />
                </div>
                <div>
                  <span className="text-[#767680]">Provider:</span>{" "}
                  <span className="text-[#11151F]">MTN</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#767680]">Currency:</span>{" "}
                  <span className="text-[#11151F]">{selected.currency}</span>{" "}
                  <span aria-hidden>{selected.countryFlag}</span>
                </div>
                <div>
                  <span className="text-[#767680]">Customer:</span>{" "}
                  <span className="text-[#11151F]">
                    {selected.customerName}. {selected.customerEmail}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <span className="text-xs font-medium text-[#767680]">
                  Resolution Workflow:
                </span>
                {WORKFLOW_STEPS.map((step) => (
                  <div
                    key={step.label}
                    className={clsx(
                      "flex items-center gap-1.5 px-2.5 py-1 rounded",
                      step.color === "blue" && "bg-[#E8F4FD]",
                      step.color === "orange" && "bg-[#FEF3E2]",
                      step.color === "green" && "bg-[#E8F5E9]"
                    )}
                  >
                    {step.done ? (
                      <FaCheck className="w-3.5 h-3.5 text-[#0243EC]" />
                    ) : (
                      <span
                        className={clsx(
                          "w-3.5 h-3.5 rounded-full border-2",
                          step.color === "orange" && "border-amber-400",
                          step.color === "green" && "border-green-500"
                        )}
                      />
                    )}
                    <span className="text-xs font-medium text-[#344054]">
                      {step.label}
                    </span>
                  </div>
                ))}
                <button
                  type="button"
                  role="switch"
                  aria-checked={resolvedToggled}
                  onClick={() => setResolvedToggled((p) => !p)}
                  className={clsx(
                    "w-10 h-5 rounded-full transition-colors",
                    resolvedToggled ? "bg-red-500" : "bg-red-300"
                  )}
                >
                  <span
                    className={clsx(
                      "block w-4 h-4 rounded-full bg-white shadow transition-transform",
                      resolvedToggled && "translate-x-6"
                    )}
                  />
                </button>
              </div>
            </div>

            <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
              <div className="p-4 border-b border-[#E4E7EC] flex items-center gap-3 shrink-0">
                <div className="w-8 h-8 rounded-full bg-[#E4E7EC] flex items-center justify-center text-[#767680] text-sm">
                  👤
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#11151F]">
                    {selected.customerName}
                  </p>
                  <p className="text-xs text-[#767680]">
                    {selected.customerEmail}
                  </p>
                </div>
                <span className="text-lg ml-auto" aria-hidden>
                  {selected.countryFlag}
                </span>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {CHAT_MESSAGES.map((m) => (
                  <div
                    key={m.id}
                    className={clsx(
                      "flex",
                      m.from === "agent" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={clsx(
                        "max-w-[85%] rounded-lg px-4 py-2 bg-[#F2F2F2]",
                        m.from === "agent" ? "rounded-br-none" : "rounded-bl-none"
                      )}
                    >
                      <p className="text-sm text-[#344054]">{m.text}</p>
                      <p className="text-xs text-[#767680] mt-1">{m.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-[#E4E7EC] flex gap-2 shrink-0">
                <input
                  type="text"
                  placeholder="Send message to customer..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 rounded-lg border border-[#E4E7EC] px-4 py-3 text-sm text-[#344054] placeholder:text-[#767680] focus:outline-none focus:ring-2 focus:ring-[#0243EC]/20"
                />
                <button
                  type="button"
                  className="p-3 rounded-lg bg-[#0243EC] text-white hover:bg-[#0232b8] transition-colors"
                  title="Send"
                >
                  <FaPaperPlane className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

type WorkflowItem = {
  id: string;
  countryFlag: string;
  currency: string;
  amount: string;
  timestamp: string;
  customerName: string;
  customerEmail: string;
  unreadCount: number;
};

const WORKFLOW_CARD_DATA: WorkflowItem[] = [
  {
    id: "1",
    countryFlag: "🇬🇭",
    currency: "GHS",
    amount: "50.00",
    timestamp: "12:23am 12th Sept, 2025",
    customerName: "Charles Avis A",
    customerEmail: "talktoavischarles@gmail.com",
    unreadCount: 3,
  },
  {
    id: "2",
    countryFlag: "🇬🇭",
    currency: "GHS",
    amount: "50.50",
    timestamp: "12:23am 12th Sept, 2025",
    customerName: "Charles Avis A",
    customerEmail: "talktoavischarles@gmail.com",
    unreadCount: 2,
  },
  {
    id: "3",
    countryFlag: "🇰🇪",
    currency: "KES",
    amount: "12.43",
    timestamp: "12:23am 12th Sept, 2025",
    customerName: "Charles Avis A",
    customerEmail: "talktoavischarles@gmail.com",
    unreadCount: 4,
  },
  {
    id: "4",
    countryFlag: "🇳🇬",
    currency: "NGN",
    amount: "5000.66",
    timestamp: "12:23am 12th Sept, 2025",
    customerName: "Charles Avis A",
    customerEmail: "talktoavischarles@gmail.com",
    unreadCount: 2,
  },
  {
    id: "5",
    countryFlag: "🇬🇭",
    currency: "GHS",
    amount: "50.50",
    timestamp: "12:23am 12th Sept, 2025",
    customerName: "Charles Avis A",
    customerEmail: "talktoavischarles@gmail.com",
    unreadCount: 1,
  },
];

export type WorkflowColumnId = "yetToStart" | "inProgress" | "completed";

const WorkflowCard = ({
  item,
  columnId,
  onDragStart,
  isDragging,
}: {
  item: WorkflowItem;
  columnId: WorkflowColumnId;
  onDragStart: (e: React.DragEvent, itemId: string) => void;
  isDragging?: boolean;
}) => (
  <div
    draggable
    onDragStart={(e) => onDragStart(e, item.id)}
    className={clsx(
      "p-3 rounded-lg border border-[#E4E7EC] bg-white text-left cursor-grab active:cursor-grabbing transition-opacity",
      isDragging && "opacity-50"
    )}
  >
    <div className="flex items-start justify-between gap-2 mb-2">
      <div className="flex items-center gap-2 min-w-0 flex-1">
        <span className="text-lg shrink-0" aria-hidden>{item.countryFlag}</span>
        <span className="text-sm font-semibold text-[#11151F] min-w-0 truncate">
          {item.currency} {item.amount}
        </span>
        {item.unreadCount > 0 && (
          <span className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#0243EC] text-white text-xs font-medium">
            {item.unreadCount}
          </span>
        )}
      </div>
      <span className="text-xs text-[#767680] shrink-0 whitespace-nowrap">
        {item.timestamp}
      </span>
    </div>
    <p className="text-xs text-[#344054] truncate">
      {item.customerName} {item.customerEmail}
    </p>
  </div>
);

const WorkflowColumn = ({
  columnId,
  title,
  subtitle,
  variant,
  items,
  onDragStart,
  onDrop,
  onDragEnter,
  onDragLeave,
  draggingItemId,
  isDropTarget,
}: {
  columnId: WorkflowColumnId;
  title: string;
  subtitle: string;
  variant: "grey" | "orange" | "green";
  items: WorkflowItem[];
  onDragStart: (e: React.DragEvent, itemId: string, sourceColumnId: WorkflowColumnId) => void;
  onDrop: (e: React.DragEvent, targetColumnId: WorkflowColumnId) => void;
  onDragEnter: (e: React.DragEvent, columnId: WorkflowColumnId) => void;
  onDragLeave: (e: React.DragEvent) => void;
  draggingItemId: string | null;
  isDropTarget: boolean;
}) => {
  const headerClass = {
    grey: "bg-[#E4E7EC] text-[#344054]",
    orange: "bg-[#FEF3E2] text-[#344054]",
    green: "bg-[#E8F5E9] text-[#344054]",
  }[variant];

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    onDrop(e, columnId);
  };

  return (
    <div className="flex flex-col min-w-0 flex-1 min-h-112 border border-[#E4E7EC] rounded-xl overflow-hidden bg-[#F7F9FB]">
      <div className={clsx("px-4 py-3 shrink-0", headerClass)}>
        <h2 className="text-sm font-bold">{title}</h2>
        <p className="text-xs mt-0.5 opacity-90">{subtitle}</p>
      </div>
      <div
        className={clsx(
          "flex-1 overflow-y-auto p-3 space-y-2 min-h-0 transition-colors",
          isDropTarget && "bg-[#0243EC]/8"
        )}
        onDragOver={handleDragOver}
        onDragEnter={(e) => onDragEnter(e, columnId)}
        onDragLeave={onDragLeave}
        onDrop={handleDrop}
      >
        {items.map((item) => (
          <WorkflowCard
            key={item.id}
            item={item}
            columnId={columnId}
            onDragStart={(e, itemId) => onDragStart(e, itemId, columnId)}
            isDragging={draggingItemId === item.id}
          />
        ))}
      </div>
      <div className="p-3 border-t border-[#E4E7EC] flex items-center justify-center gap-1 shrink-0 bg-white">
        <button type="button" className="w-8 h-8 flex items-center justify-center rounded text-[#767680] hover:bg-[#F2F2F2] text-sm">
          ‹
        </button>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            className={clsx(
              "min-w-7 h-8 rounded flex items-center justify-center text-sm",
              n === 1 ? "bg-[#E4E7EC] text-[#344054] font-medium" : "text-[#344054] hover:bg-[#F2F2F2]"
            )}
          >
            {n}
          </button>
        ))}
        <button type="button" className="w-8 h-8 flex items-center justify-center rounded text-[#767680] hover:bg-[#F2F2F2] text-sm">
          ›
        </button>
      </div>
    </div>
  );
};

const INITIAL_YET_TO_START: WorkflowItem[] = WORKFLOW_CARD_DATA.map((item, i) => ({
  ...item,
  id: `yet-${i + 1}`,
}));
const INITIAL_IN_PROGRESS: WorkflowItem[] = [
  { ...WORKFLOW_CARD_DATA[0], id: "in-1" },
  { ...WORKFLOW_CARD_DATA[2], id: "in-2" },
];
const INITIAL_COMPLETED: WorkflowItem[] = [
  { ...WORKFLOW_CARD_DATA[3], id: "done-1" },
];

export const WorkflowView = () => {
  const [columns, setColumns] = useState<Record<WorkflowColumnId, WorkflowItem[]>>({
    yetToStart: INITIAL_YET_TO_START,
    inProgress: INITIAL_IN_PROGRESS,
    completed: INITIAL_COMPLETED,
  });
  const [draggingItemId, setDraggingItemId] = useState<string | null>(null);
  const [draggingFrom, setDraggingFrom] = useState<WorkflowColumnId | null>(null);
  const [dropTargetId, setDropTargetId] = useState<WorkflowColumnId | null>(null);

  const handleDragStart = (
    e: React.DragEvent,
    itemId: string,
    sourceColumnId: WorkflowColumnId
  ) => {
    setDraggingItemId(itemId);
    setDraggingFrom(sourceColumnId);
    e.dataTransfer.setData("application/json", JSON.stringify({ itemId, sourceColumnId }));
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnd = () => {
    setDraggingItemId(null);
    setDraggingFrom(null);
  };

  const handleDrop = (e: React.DragEvent, targetColumnId: WorkflowColumnId) => {
    setDropTargetId(null);
    const raw = e.dataTransfer.getData("application/json");
    if (!raw || !draggingFrom) return;
    let itemId: string;
    let sourceColumnId: WorkflowColumnId;
    try {
      ({ itemId, sourceColumnId } = JSON.parse(raw));
    } catch {
      return;
    }
    if (sourceColumnId === targetColumnId) {
      setDraggingItemId(null);
      setDraggingFrom(null);
      return;
    }
    const sourceItems = columns[sourceColumnId];
    const item = sourceItems.find((i) => i.id === itemId);
    if (!item) return;
    setColumns((prev) => ({
      ...prev,
      [sourceColumnId]: prev[sourceColumnId].filter((i) => i.id !== itemId),
      [targetColumnId]: [...prev[targetColumnId], item],
    }));
    setDraggingItemId(null);
    setDraggingFrom(null);
  };

  const handleDragEnter = (_e: React.DragEvent, columnId: WorkflowColumnId) => {
    if (draggingFrom !== columnId) setDropTargetId(columnId);
  };
  const handleDragLeave = (e: React.DragEvent) => {
    const related = e.relatedTarget as Node | null;
    if (!related || !e.currentTarget.contains(related)) setDropTargetId(null);
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
      onDragEnd={handleDragEnd}
    >
      <WorkflowColumn
        columnId="yetToStart"
        title="Yet to Start"
        subtitle="list of all unresolved and new issues"
        variant="grey"
        items={columns.yetToStart}
        onDragStart={handleDragStart}
        onDrop={handleDrop}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        draggingItemId={draggingItemId}
        isDropTarget={dropTargetId === "yetToStart"}
      />
      <WorkflowColumn
        columnId="inProgress"
        title="In-Progress"
        subtitle="See list of escalated issues to Fuspay under resolution"
        variant="orange"
        items={columns.inProgress}
        onDragStart={handleDragStart}
        onDrop={handleDrop}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        draggingItemId={draggingItemId}
        isDropTarget={dropTargetId === "inProgress"}
      />
      <WorkflowColumn
        columnId="completed"
        title="Completed"
        subtitle="See List of resolved transactions that been marked as complete."
        variant="green"
        items={columns.completed}
        onDragStart={handleDragStart}
        onDrop={handleDrop}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        draggingItemId={draggingItemId}
        isDropTarget={dropTargetId === "completed"}
      />
    </div>
  );
};
