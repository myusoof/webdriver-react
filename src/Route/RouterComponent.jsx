import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../index.css";
import AboutMe from "../pages/AboutMe";
import Home from "../pages/Home";

const RouterComponent = () => {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/">#VANLIFE</Link>
        </nav>
        <Link to="/aboutme">About</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
