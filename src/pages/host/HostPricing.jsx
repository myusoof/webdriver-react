import React from 'react'
import { useOutletContext } from 'react-router-dom';

const HostPricing = () => {
   const [currentVan, setCurrentVan] = useOutletContext();
  return <h4>{currentVan.price}</h4>;
}

export default HostPricing
