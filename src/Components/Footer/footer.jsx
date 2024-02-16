import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer-section  w-100">
          <div className="above-container  d-flex justify-content-evenly align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4">
                  <div className="first-column text-center ">
                    <h3 className="location">location</h3>
                    <p className="address">2215 John Daniel Drive</p>
                    <p className="address">Clark, MO 65243</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="first-column text-center">
                    <h3 className="location">AROUND THE WEB</h3>
                    <div className="socials">
                      <i className=" icon fab fa-facebook "></i>
                      <i className="icon fab fa-twitter "></i>
                      <i className="icon fab fa-linkedin "></i>
                      <i className="icon fas fa-globe "></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="first-column text-center">
                    <h3 className="location">ABOUT FREELANCER</h3>
                    <p className="address">
                      Freelance is a free to use, licensed Bootstrap theme
                      created by Route
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="below-container d-flex justify-content-center align-items-center">
            <p>Copyright © Your Website 2021</p>
          </div>
        </div>
      </>
    );
  }
}
