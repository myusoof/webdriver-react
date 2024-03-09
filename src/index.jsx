import React from "react";
import ReactDOM from "react-dom/client";
import {
    Outlet,
    Route,
    RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SearchLayout from "./components/SearchLayout";
import AboutMe from "./pages/AboutMe";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import HostLayout from "./components/Host";
import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Reviews from "./pages/Reviews";
import HostVan from "./pages/host/HostVan";
import HostVanDetails from "./pages/host/HostVanDetails";
import HostDetails from "./pages/host/HostDetails";
import HostPricing from "./pages/host/HostPricing";
import HostPhoto from "./pages/host/HostPhoto";
import NotFound from "./pages/NotFound";
import RouterComponent from "./Route/RouterComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter(
  createRoutesFromChildren(
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
  )
);
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
