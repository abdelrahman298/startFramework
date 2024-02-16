import React, { Component } from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/footer.jsx";

export default class Layout extends Component {
  render() {
    return (
      <>
        <div className="layout-section">
          <Navbar />

          <Outlet />

          <Footer />
        </div>
      </>
    );
  }
}
