import ModalWrapper from "../common/modal";
import { ModalInput, ModalSelect } from "../common/modal/form";
import { PrimaryButton } from "../ui/PrimaryButton";

const InviteAdminModal = () => {
  return (
    <ModalWrapper>
      <div className="w-[70%] ">
        <div className="mb-8.5">
          <h1 className="text-[#4F4F4F] text-[2rem] font-bold mb-1 ">
            Invite an Admin
          </h1>
          <p className=" text-[#2B2B3D]">
            You can invite an admin to have access to login to a specific app
            while only the root admin can switch between all the applications
          </p>
        </div>

        <form>
          <div className="grid grid-cols-2 gap-8 mb-12">
            <ModalInput label="First Name" placeholder="Enter first name" />
            <ModalInput label="Last Name" placeholder="Enter last name" />
            <ModalInput label="Email" placeholder="Enter email" />
            <ModalInput label="Phone Number" placeholder="Enter Phone Number" />
            <ModalSelect label="Select App to give permission" />
          </div>

          <div className="">
            <PrimaryButton>Send Invite</PrimaryButton>
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default InviteAdminModal;
