import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Home from "./Pages/Home";
import FlexingPage from "./Pages/FlexingPage";
import Auth from "./Pages/Auth/Auth";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "home",
    element: <Home />
  },
  {
    path: "flex",
    element: <FlexingPage />
  },
  {
    path: "auth",
    element: <Auth />
  }
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
