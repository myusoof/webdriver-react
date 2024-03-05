import React from "react";
import { useSearchParams } from "react-router-dom";

const SearchLayout = () => {
  const [searchParams] = useSearchParams();
  const arrayOfObject = [
    { name: "Luke Skywalker", type: "Jedi" },
    { name: "Darth Vader", type: "Sith" },
    { name: "Emperor Palpatine", type: "Sith" },
    { name: "yoda", type: "Jedi" },
  ];
  return (
    <div>
      {console.log(searchParams.get("type"))}
      {arrayOfObject
        .filter((a) => a.type === searchParams.get("type"))
        .map((obj) => {
          return <div key={obj.name}>{obj.name}</div>;
        })}
    </div>
  );
};

export default SearchLayout;
