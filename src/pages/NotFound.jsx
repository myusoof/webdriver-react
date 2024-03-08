import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      Sorry the page you are looking for is not found
      <br></br>
      <Link className="link-button" to="/">
        Return to home page
      </Link>
    </div>
  );
};

export default NotFound;
