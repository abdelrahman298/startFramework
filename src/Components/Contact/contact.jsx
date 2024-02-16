import React, { Component } from "react";
import "./contact.css";

export default class Contact extends Component {
  render() {
    return (
      <>
        <div className="contact-section d-flex flex-column justify-content-center align-items-center">
          <div className="contact-title-container text-center">
            <div className="contact-title">
              <h2>Contact Section</h2>
              <p className="middle-star">
                <span className="line"></span>
                <span className="icon">
                  <i className="icon-item fas fa-star text-white"></i>
                </span>
                <span className="line"></span>
              </p>
            </div>
          </div>

          <div className="contact-form-container my-5">
            <form>
              <label
                htmlFor="exampleInputUserName"
                className="form-label d-block mb-3"
              >
                userName :
              </label>
              <input
                type="text"
                className="form-control form-control-lg  mb-3 input-custom"
                id="exampleInputUserName"
                placeholder="userName"
              />

              <label
                htmlFor="exampleInputuserAge"
                className="form-label d-block mb-3"
              >
                userAge
              </label>
              <input
                type="number"
                className="form-control  form-control-lg   mb-3 input-custom"
                id="exampleInputuserAge"
                placeholder="userAge"
              />

              <label
                htmlFor="exampleInputUserEmail"
                className="form-label d-block mb-3"
              >
                UserEmail
              </label>
              <input
                type="email"
                className="form-control  form-control-lg   mb-3 input-custom"
                id="exampleInputUserEmail"
                placeholder="UserEmail"
              />

              <label
                htmlFor="exampleInputUser Password"
                className="form-label d-block mb-3"
              >
                User Password
              </label>
              <input
                type="password"
                className="form-control  form-control-lg   mb-3 input-custom"
                id="exampleInputUser Password"
                placeholder="UserPassword"
              />

              <button type="button" class="btn send-btn">
                send Message
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
