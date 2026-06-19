import { ManageServicesView } from "@/components/services/ServicesUI";
import { useParams } from "react-router-dom";

const ServicesPage = () => {
  const { appId } = useParams();

  return (
    <div className="p-[2.063rem]">
      <div className="">
        <ManageServicesView appId={appId} />
      </div>
    </div>
  );
};

export default ServicesPage;
