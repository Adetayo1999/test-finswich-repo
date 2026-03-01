import { useState, useMemo } from "react";
import { FaMagnifyingGlass, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import clsx from "clsx";

const FAQ_ITEMS = [
  {
    id: "1",
    question: "Why is SpringTD",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Rhoncus purus sed vestibulum dignissim libero tellus. Et vitae in eget dui id lectus parturient magna. Et vitae in eget dui id lectus parturient magna. Et vitae in eget dui id lectus parturient magna.",
  },
  { id: "2", question: "How does Mortgage Work?", answer: "Content for this answer." },
  { id: "3", question: "Who can use Mortgage?", answer: "Content for this answer." },
  { id: "4", question: "What is Product Builder?", answer: "Content for this answer." },
  { id: "5", question: "Who can use Mortgage?", answer: "Content for this answer." },
  { id: "6", question: "How does Mortgage Work?", answer: "Content for this answer." },
];

const FaqPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(FAQ_ITEMS[0]?.id ?? "");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return FAQ_ITEMS;
    const q = search.toLowerCase();
    return FAQ_ITEMS.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q),
    );
  }, [search]);

  const toggleExpanded = (id: string) => {
    setExpandedIndex((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="flex flex-col gap-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#11151F]">
          Frequently Asked Questions
        </h1>
        <p className="mt-1 text-sm text-[#767680]">
          Find answers to common questions about Finswich
        </p>
      </div>

      <div className="relative">
        <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#767680]" />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg bg-[#F2F2F2] pl-10 pr-4 py-3 text-sm text-[#1C1C1C] placeholder:text-[#767680] border-0 focus:outline-none focus:ring-2 focus:ring-[#712EEB]/20"
        />
      </div>

      <div className="flex flex-col gap-3 bg-[#F7F9FB] rounded-xl p-1 -mx-1">
        {filtered.length === 0 ? (
          <p className="text-sm text-[#767680] py-6 text-center">
            No questions match your search.
          </p>
        ) : (
          filtered.map((item) => {
            const isExpanded = expandedIndex === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleExpanded(item.id)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-semibold text-[#11151F] hover:bg-[#FAFAFA] transition-colors"
                >
                  <span>{item.question}</span>
                  {isExpanded ? (
                    <FaChevronUp className="w-4 h-4 text-[#767680] shrink-0" />
                  ) : (
                    <FaChevronDown className="w-4 h-4 text-[#767680] shrink-0" />
                  )}
                </button>
                <div
                  className={clsx(
                    "grid transition-[grid-template-rows] duration-200",
                    isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 pt-0 text-sm text-[#767680] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default FaqPage;
