import React from "react";
import { useOutletContext } from "react-router-dom";

const HostPhoto = () => {
  const [currentVan, setCurrentVan] = useOutletContext();
  return <img className="host-van-detail-image" src={currentVan.imageUrl} />;
};

export default HostPhoto;
