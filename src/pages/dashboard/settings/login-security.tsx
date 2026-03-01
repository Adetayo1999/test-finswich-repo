import {
  ActiveSessions,
  SettingsInput,
} from "@/components/settings/SettingsUi";

const LoginSecurityPage = () => {
  return (
    <div className="  py-10 pb-60">
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <div className="">
            <h2 className="text-2xl text-[#000000] mb-1.5 font-semibold">
              Change Password
            </h2>
            <p className="text-sm text-[#667185]">
              Update your password to keep your account secure
            </p>
          </div>

          <button className="bg-[#712EEB] rounded-lg font-semibold text-sm text-white px-10 h-13 py-2">
            Update Profile
          </button>
        </div>
        {/* Form */}

        <form className="grid grid-cols-2 gap-x-14 gap-y-7">
          <SettingsInput
            label="Current Password"
            placeholder="Enter Current Password"
            type="password"
          />
          <SettingsInput
            label="New Password"
            placeholder="Enter new password"
            type="password"
          />
          <SettingsInput
            label="Confirm Password"
            placeholder="Confirm password"
            type="password"
          />
        </form>
      </div>

      {/* Active Sessions */}
      <ActiveSessions />
    </div>
  );
};

export default LoginSecurityPage;
