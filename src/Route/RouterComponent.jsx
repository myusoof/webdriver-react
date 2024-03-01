import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../index.css";
import AboutMe from "../pages/AboutMe";
import Home from "../pages/Home";
import Vans from "../pages/Vans";

const RouterComponent = () => {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/">#VANLIFE</Link>
        </nav>
        <Link to="/aboutme">About</Link>
        <nav>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
