
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css"; // Ensure this file exists
import { RouterProvider } from "react-router-dom";
import appRouter from "./app"; // Correct import of `appRouter`

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
