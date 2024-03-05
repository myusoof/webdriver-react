import React from "react";
import { useOutletContext } from "react-router-dom";

const HostPhoto = () => {
  const [currentVan] = useOutletContext();
  return <img alt='hostvan' className="host-van-detail-image" src={currentVan.imageUrl} />;
};

export default HostPhoto;
