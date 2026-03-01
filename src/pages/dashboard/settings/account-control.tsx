const DEACTIVATE_BULLETS = [
  "Your profile will not be visible to others",
  "Active subscriptions will be paused",
  "You can reactivate within 90 days",
  "After 90 days, your account may be permanently deleted",
];

const AccountControlPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold text-[#11151F]">
        Deactivate Account
      </h1>

      <div className="rounded-xl bg-[#F5F5F5] p-6 sm:p-8 max-w-2xl">
        <p className="text-sm text-[#344054] leading-relaxed mb-6">
          Temporarily deactivate your account. Your data will be preserved and
          you can reactivate anytime by logging back in. Your subscription will
          be paused during deactivation.
        </p>
        <ul className="space-y-2 mb-8">
          {DEACTIVATE_BULLETS.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-[#344054]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#344054] shrink-0 mt-1.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="rounded-lg bg-[#DC3545] text-white text-sm font-medium px-6 py-3 hover:bg-[#C82333] transition-colors"
        >
          Deactivate Account
        </button>
      </div>
    </div>
  );
};

export default AccountControlPage;
