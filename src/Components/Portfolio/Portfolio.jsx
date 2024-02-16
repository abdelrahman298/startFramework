import React, { Component } from "react";
import img1 from "./../../Images/1.png";
import img2 from "./../../Images/2.png";
import img3 from "./../../Images/3.png";
import "./portfolio.css";

export default class Portfolio extends Component {
  state = { selectedImg: "", imgContainer: false };

  selectImage = (e) => {
    // get the image
    const imgContainer = e.target.parentNode;
    const imgElement = imgContainer.querySelector(".img");
    const imgUrl = imgElement.getAttribute("src");

    //? send the image and display it && setstate the new image

    this.setState({ selectedImg: imgUrl, imgContainer: true });
  };

  diselectImage = (e) => {
    //? get the parent {layoutContainer}
    const layoutContainer = e.target.parentNode;
    //? remove the layout image container
    layoutContainer.classList.add("d-none");
    // console.log(layoutContainer);
    //? setState and remove the image
    this.setState({ selectedImg: "", imgContainer: false });
  };

  render() {
    return (
      <>
        <div className="porfolio-section">
          <div className="portfolio-container">
            <div className="container">
              <div className="title-container d-flex flex-column justify-content-center text-center">
                <h2 className="portfolio-title">PORTFOLIO COMPONENT</h2>
                <p className="middle-star">
                  <span className="line"></span>
                  <span className="icon">
                    <i className=" fas fa-star"></i>
                  </span>
                  <span className="line"></span>
                </p>
              </div>
              <div className="row gy-2 gx-5">
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div
                    onClick={(e) => {
                      this.selectImage(e);
                    }}
                    className="img-container position-relative"
                  >
                    <img
                      className="img w-100 rounded"
                      src={img3}
                      alt="image3"
                    />
                    <div className="show-layout rounded position-absolute  top-0 bottom-0 start-0  end-0 d-flex justify-content-center align-items-center">
                      <i className="layout-icon display-1  fas fa-plus"></i>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div
                    onClick={(e) => {
                      this.selectImage(e);
                    }}
                    className="img-container position-relative"
                  >
                    <img
                      className="img w-100 rounded"
                      src={img2}
                      alt="image3"
                    />
                    <div className="show-layout rounded position-absolute  top-0 bottom-0 start-0  end-0 d-flex justify-content-center align-items-center">
                      <i className="layout-icon display-1  fas fa-plus"></i>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div
                    onClick={(e) => {
                      this.selectImage(e);
                    }}
                    className="img-container position-relative"
                  >
                    <img
                      className="img w-100 rounded"
                      src={img1}
                      alt="image3"
                    />
                    <div className="show-layout rounded position-absolute  top-0 bottom-0 start-0  end-0 d-flex justify-content-center align-items-center">
                      <i className="layout-icon display-1  fas fa-plus"></i>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div
                    onClick={(e) => {
                      this.selectImage(e);
                    }}
                    className="img-container position-relative"
                  >
                    <img
                      className="img w-100 rounded"
                      src={img3}
                      alt="image3"
                    />
                    <div className="show-layout rounded position-absolute  top-0 bottom-0 start-0  end-0 d-flex justify-content-center align-items-center">
                      <i className="layout-icon display-1  fas fa-plus"></i>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div
                    onClick={(e) => {
                      this.selectImage(e);
                    }}
                    className="img-container position-relative"
                  >
                    <img
                      className="img w-100 rounded"
                      src={img2}
                      alt="image3"
                    />
                    <div className="show-layout rounded position-absolute  top-0 bottom-0 start-0  end-0 d-flex justify-content-center align-items-center">
                      <i className="layout-icon display-1  fas fa-plus"></i>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div
                    onClick={(e) => {
                      this.selectImage(e);
                    }}
                    className="img-container position-relative"
                  >
                    <img
                      className="img w-100 rounded"
                      src={img1}
                      alt="image3"
                    />
                    <div className="show-layout rounded position-absolute  top-0 bottom-0 start-0  end-0 d-flex justify-content-center align-items-center">
                      <i className="layout-icon display-1  fas fa-plus"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {this.state.selectedImg && this.state.imgContainer ? (
            <div className="layout-container">
              <div
                onClick={(e) => {
                  this.diselectImage(e);
                }}
                className="portfolio-layout"
              >
                <div className="layout-img-container">
                  <div className="layout-img">
                    <img src={this.state.selectedImg} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}
