import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tempapp from "./components/weatherapp/Tempapp";
import Dashboard from "./components/Dashboard";
import Contact from "./portpholio/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "weatherApp",
    element: <Tempapp/>,
  },
  {
    path: "dashbord",
    element: <Dashboard/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
