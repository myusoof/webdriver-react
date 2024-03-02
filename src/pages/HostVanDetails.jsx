import React from "react";
import { useParams } from "react-router-dom";

const HostVanDetails = () => {
    const { id } = useParams();
    const [currentVan, setCurrentVan] = React.useState(null);

    React.useEffect(() => {
      fetch(`/api/host/vans/${id}`)
        .then((res) => res.json())
        .then((data) => setCurrentVan(data.vans));
    }, []);
    console.log(currentVan)
    if (!currentVan) {
      return <h1>Loading...</h1>;
    }

    return (
      <section>
        <div className="host-van-detail-layout-container">
          <div className="host-van-detail">
            <img src={currentVan.imageUrl} />
            <div className="host-van-detail-info-text">
              <i className={`van-type van-type-${currentVan.type}`}>
                {currentVan.type}
              </i>
              <h3>{currentVan.name}</h3>
              <h4>${currentVan.price}/day</h4>
            </div>
          </div>
        </div>
      </section>
    );
};

export default HostVanDetails;