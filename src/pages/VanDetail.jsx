import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getVans } from "../api";

export async function loader({ params }) {
  console.log(params);
  await getVans(params.id);
}
const VanDetail = () => {
  const params = useParams();
  const location = useLocation();
  console.log(location);
  const [van, setVan] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans/" + params.vanid)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.vanid]);
  const search = location.state?.search || "";
  const type = location.state?.type || "all";
  return (
    <div className="van-detail-container">
      {console.log(location.state)}
      <Link to={`..?${search}`} relative="path">
        &larr; <span>Back to {type} vans</span>
      </Link>
      {van ? (
        <div className="van-detail">
          <img alt={van.name} src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VanDetail;
