import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import "../index.css";
import AboutMe from "../pages/AboutMe";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Host from "../components/Host";
import Income from "../pages/Income";
import Reviews from "../pages/Reviews";
import VanDetail from "../pages/VanDetail";
import Vans from "../pages/Vans";
import "../server";
const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":vanid" element={<VanDetail />} />
          </Route>
          <Route path="host" element={<Host />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterComponent;
