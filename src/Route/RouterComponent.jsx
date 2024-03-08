import React from "react";
import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import HostLayout from "../components/Host";
import Layout from "../components/Layout";
import SearchLayout from "../components/SearchLayout";
import "../index.css";
import AboutMe from "../pages/AboutMe";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Income from "../pages/Income";
import Reviews from "../pages/Reviews";
import VanDetail from "../pages/VanDetail";
import Vans from "../pages/Vans";
import HostDetails from "../pages/host/HostDetails";
import HostPhoto from "../pages/host/HostPhoto";
import HostPricing from "../pages/host/HostPricing";
import HostVan from "../pages/host/HostVan";
import HostVanDetails from "../pages/host/HostVanDetails";
import "../server";
import NotFound from "../pages/NotFound";
const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<SearchLayout />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":vanid" element={<VanDetail />} />
          </Route>
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<Outlet />}>
              <Route index element={<HostVan />} />
              <Route path=":id" element={<HostVanDetails />}>
                <Route index element={<HostDetails />} />
                <Route path="pricing" element={<HostPricing />} />
                <Route path="photo" element={<HostPhoto />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterComponent;
