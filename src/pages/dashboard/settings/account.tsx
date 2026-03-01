import { SettingsInput } from "@/components/settings/SettingsUi";

const AccountSettingsPage = () => {
  return (
    <div className=" py-10 pb-60">
      <form>
        <div className="grid grid-cols-2 gap-x-14 gap-y-7 mb-8">
          <SettingsInput
            label="Business name"
            placeholder="Please enter your full name"
          />
          <SettingsInput label="Email" placeholder="Please enter your email" />
          <SettingsInput
            label="Descriptions"
            placeholder="Please enter your username"
          />
          <SettingsInput
            label="Phone number"
            placeholder="Please enter your phone number"
          />
          <SettingsInput label="Address" placeholder="Enter address..." />
          {/* Change to select */}
          <SettingsInput label="Industry" placeholder="Select an Industry..." />
        </div>
        <div className="">
          <button className="bg-[#712EEB] rounded-lg font-semibold text-sm text-white px-16 h-13 py-2 ">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountSettingsPage;
