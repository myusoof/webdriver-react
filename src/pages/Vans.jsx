import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = React.useState([]);
  const [searchParams] = useSearchParams();
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  const typeFilter = searchParams.get("type");
  const filterVanElements = typeFilter
    ? vans.filter((a) => a.type === searchParams.get("type"))
    : vans;
  const vanElements = filterVanElements.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`${van.id}`}>
        <img alt={van.name} src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
      </Link>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <nav className="host-nav">
        <Link className="van-type simple" to="?type=simple">
          simple
        </Link>
        <Link className="van-type rugged" to="?type=rugged">
          rugged
        </Link>
        <Link className="van-type luxury" to="?type=luxury">
          luxury
        </Link>
      </nav>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;
