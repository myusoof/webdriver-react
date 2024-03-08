import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../index.css";
const Vans = () => {
  const [vans, setVans] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  const typeFilter = searchParams.get("type");
  const filterVanElements = typeFilter
    ? vans.filter((a) => a.type === searchParams.get("type"))
    : vans;
  function genNewSearchParamsUrl(key, value) {
    const sp = new URLSearchParams(searchParams);
    if (value === null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    return `?${sp.toString()}`;
  }
  function handleSearch(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }
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
        <Link
          to={genNewSearchParamsUrl("type", "simple")}
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
        >
          simple
        </Link>
        <Link
          to={genNewSearchParamsUrl("type", "rugged")}
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
        >
          rugged
        </Link>
        <Link
          to={genNewSearchParamsUrl("type", "luxury")}
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
        >
          luxury
        </Link>
        {typeFilter ? (
          <Link to={genNewSearchParamsUrl("type", null)}>Clear</Link>
        ) : null}
      </nav>
      <div>
        <button onClick={() => handleSearch("type", "simple")}>simple</button>
        <button onClick={() => handleSearch("type", "rugged")}>rugged</button>
        <button onClick={() => handleSearch("type", "luxury")}>luxury</button>
        {typeFilter ? (
          <button onClick={() => handleSearch("type", null)}>Clear</button>
        ) : null}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;
