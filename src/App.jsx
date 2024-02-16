import React, { Component } from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "./../node_modules/@fortawesome/fontawesome-free/js/all.min.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import About from "./Components/About/About.jsx";
import Footer from "./Components/Footer/footer.jsx";
import Contact from "./Components/Contact/contact.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import PortfolioLayout from "./Components/Portfolio/PortfolioLayout.jsx";

const myRouter = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "Home", element: <Home /> },
      { path: "*", element: <Home /> },
      { path: "/", element: <Home /> },
      { path: "About", element: <About /> },
      { path: "Footer", element: <Footer /> },
      { path: "Contact", element: <Contact /> },
      { path: "Navbar", element: <Navbar /> },
      { path: "Portfolio", element: <Portfolio /> },
    ],
  },
]);
export default class App extends Component {
  // const myRouter = CreateBrowserRouter();

  render() {
    return (
      <>
        <RouterProvider router={myRouter} />
      </>
    );
  }
}
