import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-container">
          <div class="container">
            <Link class="navbar-brand logo-nav" to="/">
              START FRAMEWORK
            </Link>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0 navbar-links">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/about">
                    about
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/portfolio">
                    portfolio
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/contact">
                    contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
