import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../server";
import "../index.css";
import AboutMe from "../pages/AboutMe";
import Home from "../pages/Home";
import Vans from "../pages/Vans";
import VanDetail from "../pages/VanDetail";
const RouterComponent = () => {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/">#VANLIFE</Link>
        </nav>
        <Link to="/aboutme">About</Link>
        <Link to="/vans">Vans</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:vanid" element={<VanDetail />} />
        <Route path="/vans/:id/:type" element={<VanDetail />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
