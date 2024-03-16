import React from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  useParams,
} from "react-router-dom";
import { getHostVans } from "../../api";
export async function loader({ params }) {
  console.log(params);
  return await getHostVans(params.id);
}
const HostVanDetails = () => {
  const params = useParams();
  const data = useLoaderData();
  const currentVan = data;
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "red",
  };
  console.log(data);
  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <section>
      <Link to=".." relative="path">
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
        <Outlet context={[currentVan]} />
      </div>
    </section>
  );
};

export default HostVanDetails;
