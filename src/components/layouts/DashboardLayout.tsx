import { Link, Outlet } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { DashboardSidebar } from "./Sidebar";

const DashboardHeader = () => {
  return (
    <div className="px-10  py-5 flex justify-between gap-x-10 items-center border-b border-[#F1F1F1]">
      <div className="flex-1 flex justify-between items-center">
        <div className="w-[20rem] h-10 relative">
          <button className="absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-4 ">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3501 14.3563C14.2568 14.4483 14.1311 14.4999 14.0001 14.5001C13.8673 14.4995 13.7398 14.4481 13.6438 14.3563L10.9438 11.6501C9.80671 12.6052 8.34474 13.0845 6.86285 12.9879C5.38095 12.8913 3.99355 12.2264 2.99 11.1317C1.98645 10.0371 1.44424 8.59729 1.47645 7.1126C1.50867 5.62791 2.11282 4.21298 3.1629 3.1629C4.21298 2.11282 5.62791 1.50867 7.1126 1.47645C8.59729 1.44424 10.0371 1.98645 11.1317 2.99C12.2264 3.99355 12.8913 5.38095 12.9879 6.86285C13.0845 8.34474 12.6052 9.80671 11.6501 10.9438L14.3501 13.6438C14.3973 13.6904 14.4349 13.7458 14.4605 13.807C14.4861 13.8681 14.4993 13.9338 14.4993 14.0001C14.4993 14.0664 14.4861 14.132 14.4605 14.1932C14.4349 14.2544 14.3973 14.3098 14.3501 14.3563ZM7.2501 12.0001C8.18956 12.0001 9.10792 11.7215 9.88906 11.1996C10.6702 10.6776 11.279 9.93579 11.6385 9.06784C11.998 8.19989 12.0921 7.24483 11.9088 6.32342C11.7255 5.40201 11.2732 4.55564 10.6089 3.89134C9.94455 3.22704 9.09819 2.77465 8.17678 2.59137C7.25537 2.40809 6.3003 2.50215 5.43235 2.86167C4.5644 3.22119 3.82255 3.83 3.30062 4.61114C2.77868 5.39227 2.5001 6.31064 2.5001 7.2501C2.50175 8.50937 3.00273 9.71659 3.89317 10.607C4.78361 11.4975 5.99083 11.9984 7.2501 12.0001Z"
                fill="#1C1C1C"
                fillOpacity="0.2"
              />
            </svg>
          </button>
          <input
            type="text"
            name=""
            className="bg-[#1C1C1C0D] text-[#1C1C1C33] w-full h-full rounded-lg pl-8"
            placeholder="Search..."
            id=""
          />
        </div>

        <div className="flex items-center gap-x-6">
          <button className="flex items-center gap-x-3 text-sm">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9999 10.8049C16.9999 10.4589 16.9999 10.2859 17.0519 10.1319C17.2029 9.68388 17.6019 9.51088 18.0019 9.32888C18.4499 9.12388 18.6739 9.02188 18.8969 9.00388C19.1489 8.98388 19.4019 9.03788 19.6179 9.15888C19.9039 9.31888 20.1039 9.62488 20.3079 9.87288C21.2509 11.0189 21.7229 11.5919 21.8949 12.2229C22.0349 12.7329 22.0349 13.2669 21.8949 13.7759C21.6439 14.6979 20.8489 15.4699 20.2599 16.1859C19.9589 16.5509 19.8079 16.7339 19.6179 16.8409C19.3982 16.9627 19.1473 17.0167 18.8969 16.9959C18.6739 16.9779 18.4499 16.8759 18.0009 16.6709C17.6009 16.4889 17.2029 16.3159 17.0519 15.8679C16.9999 15.7139 16.9999 15.5409 16.9999 15.1949V10.8049ZM6.99991 10.8049C6.99991 10.3689 6.98791 9.97788 6.63591 9.67188C6.50791 9.56088 6.33791 9.48388 5.99891 9.32888C5.54991 9.12488 5.32591 9.02188 5.10291 9.00388C4.43591 8.94988 4.07691 9.40588 3.69291 9.87388C2.74891 11.0189 2.27691 11.5919 2.10391 12.2239C1.96471 12.7322 1.96471 13.2686 2.10391 13.7769C2.35591 14.6979 3.15191 15.4709 3.73991 16.1859C4.11091 16.6359 4.46591 17.0469 5.10291 16.9959C5.32591 16.9779 5.54991 16.8759 5.99891 16.6709C6.33891 16.5169 6.50791 16.4389 6.63591 16.3279C6.98791 16.0219 6.99991 15.6309 6.99991 15.1959V10.8049Z"
                  stroke="#767680"
                  strokeWidth="1.5"
                />
                <path
                  d="M5 9C5 5.686 8.134 3 12 3C15.866 3 19 5.686 19 9"
                  stroke="#767680"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 17V17.8C19 19.567 17.21 21 15 21H13"
                  stroke="#767680"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <span className="text-[#767680]">Need Help?</span>
            <span className="text-[#767680] font-bold">Contact Support</span>
          </button>

          <div className="flex items-center gap-x-3 text-sm text-[#767680]">
            <Link to="#">Resources</Link>
            <Link to="#">API Doc</Link>
          </div>
        </div>
      </div>
      <div className="flex-[0.25] flex justify-center">
        <button className="flex items-center gap-x-2.5 text-sm cursor-pointer">
          <span className="text-[#767680] font-bold">Covalley</span>
          <span className="bg-[#F7F9FB] rounded-full flex justify-center items-center h-9 w-9">
            <FaUserLarge />
          </span>
          <span>
            <svg
              width="21"
              height="19"
              viewBox="0 0 21 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="21" height="19" fill="white" />
              <path
                d="M15 8C15 8 11.318 12 10 12C8.682 12 5 8 5 8"
                stroke="#CFCFCF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

const DashboardLayout = () => {
  return (
    <div className="h-dvh md:h-screen flex">
      <div className="flex-[0.17]">
        <DashboardSidebar />
      </div>
      <div className="flex-[0.83] overflow-y-auto">
        <DashboardHeader />
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
