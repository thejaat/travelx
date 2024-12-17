import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Header from "./componennts/header";
import Homeheader from "./componennts/homeheader";
import Footer from "./componennts/footer";
import Error from "./pages/error";
import Contact from "./pages/contact";
import Destination from "./pages/destination"
import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";


const App = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  return (
    <>
        {isHomePage ? <Homeheader /> : <Header />}
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <Contact />,
      },
      {
        path: "/destination",
        element: <Destination />,
      }
    ],
  },
]);

export default appRouter;
