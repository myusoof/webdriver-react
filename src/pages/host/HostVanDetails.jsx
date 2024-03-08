import React, { useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useSearchParams,
} from "react-router-dom";

const HostVanDetails = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentVan, setCurrentVan] = useState(null);
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "red",
  };
  React.useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, [params.id]);
  if (!currentVan) {
    return <h1>Loading...</h1>;
  }
  return (
    <section>
      <Link to=".." relative="path" state={ searchParams}>
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img alt={currentVan.id} src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
        <nav className="host-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Details
          </NavLink>
          <nav>
            <NavLink
              to="pricing"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              pricing
            </NavLink>
          </nav>
          <NavLink
            to="photo"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Photo
          </NavLink>
        </nav>
        <Outlet context={[currentVan, setCurrentVan]} />
      </div>
    </section>
  );
};

export default HostVanDetails;
