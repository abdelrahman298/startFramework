import React, { Component } from "react";
import "./about.css";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="about-section d-flex flex-column justify-content-center align-items-center">
          <h1>ABOUT COMPONENT</h1>
          <p className="middle-star">
            <span className="line"></span>
            <span className="icon">
              <i className="fas fa-star text-white"></i>
            </span>
            <span className="line"></span>
          </p>

          <div className="articles">
            <div className="container px-5">
              <div className="row ">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
