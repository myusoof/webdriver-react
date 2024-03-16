import React from "react";
import { useOutletContext } from "react-router-dom";
import { getHostVans } from "../../api";

export async function loader({ params }) {
  return await getHostVans(params.id);
}
const HostDetails = () => {
  const [currentVan] = useOutletContext();
  return (
    <section className="host-van-detail-info">
      <h4>
        Name: <span>{currentVan.name}</span>
      </h4>
      <h4>
        price: <span>{currentVan.price}</span>
      </h4>
      <h4>
        Description: <span>{currentVan.description}</span>
      </h4>
      <h4>
        type: <span>{currentVan.type}</span>
      </h4>
    </section>
  );
};

export default HostDetails;
