import React, { Component } from "react";
import "./home.css";

import img from "./../../Images/avatar.svg";
export default class Home extends Component {
  render() {
    return (
      <>
        <div className="home-section d-flex flex-column justify-content-center align-items-center">
          <div className="text-center home">
            <div className="img-container">
              <img src={img} alt="Avater" />
            </div>
            <div className="home-content">
              <h2>Start FrameWork</h2>
              <p>
                <span className="line"></span>
                <span className="icon">
                  <i className="fas fa-star text-white"></i>
                </span>
                <span className="line "></span>
              </p>
              <p className="titles">
                Graphic Artist - Web Designer - Illustrator
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
