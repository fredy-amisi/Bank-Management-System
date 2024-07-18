import React from "react";

export const Header = (props) => {
  return (
    <header id="header" style={{ height: "100vh", minHeight: "500px" }}>
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset- intro-text">
                <h1 style={{ fontSize: "2rem" }}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <div className="button-container">
                  <a href="#signup" className="btn btn-custom btn-lg page-scroll">
                    SignUp
                  </a>{" "}
                  <a href="#login" className="btn btn-custom btn-lg page-scroll">
                    Login
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
