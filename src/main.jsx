import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./utils/routes.jsx";
import AppRouter from "./utils/AppRouter.jsx";
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider>
    <AppRouter/>

    </CookiesProvider>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
