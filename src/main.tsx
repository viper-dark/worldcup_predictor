import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Round16 } from "./pages/Round16";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "round16",
    element: <Round16 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
