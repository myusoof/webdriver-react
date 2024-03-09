import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../api";
import "../index.css";
const Vans = () => {
  const [vans, setVans] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  React.useEffect(() => {
    setLoading(true);
    async function loadData() {
      try {
        const data = await getVans();
        setVans(data);
      } catch (err) {
        setErr(err);
      } finally {
        setLoading(false)
      }
    }
    loadData();
  }, []);

  const typeFilter = searchParams.get("type");
  const filterVanElements = typeFilter
    ? vans.filter((a) => a.type === searchParams.get("type"))
    : vans;
  console.log(searchParams.toString());
  function genNewSearchParamsUrl(key, value) {
    const sp = new URLSearchParams(searchParams);
    if (value === null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    return `?${sp.toString()}`;
  }
  // function handleSearch(key, value) {
  //   setSearchParams((prevParams) => {
  //     if (value === null) {
  //       prevParams.delete(key);
  //     } else {
  //       prevParams.set(key, value);
  //     }
  //     return prevParams;
  //   });
  // }
  if (loading) {
    return <h1>loading...</h1>;
  }
  if (err) {
    return <h1>{err.message}</h1>;
  }
  const vanElements = filterVanElements.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={`${van.id}`}
        state={{ search: searchParams.toString(), type: typeFilter }}
      >
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
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;
