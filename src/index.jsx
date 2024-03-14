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
import Vans, { getVansData } from "./pages/Vans";
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
import Error from "./pages/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="search" element={<SearchLayout />} />
      <Route path="about" element={<AboutMe />} />
      <Route path="vans">
        <Route
          index
          element={<Vans />}
          loader={getVansData}
          errorElement={<Error />}
        />
        <Route path=":vanid" element={<VanDetail />} />
      </Route>
      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => {
            return null;
          }}
        />
        <Route path="vans" element={<Outlet />}>
          <Route
            index
            element={<HostVan />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path=":id"
            element={<HostVanDetails />}
            loader={async () => {
              return null;
            }}
          >
            <Route
              index
              element={<HostDetails />}
              loader={async () => {
                return null;
              }}
            />
            <Route
              path="pricing"
              element={<HostPricing />}
              loader={async () => {
                return null;
              }}
            />
            <Route
              path="photo"
              element={<HostPhoto />}
              loader={async () => {
                return null;
              }}
            />
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
