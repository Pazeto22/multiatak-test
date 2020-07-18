import React from "react";

import "./style.css";

import logo from "../../../assets/iconeshome/logo/logo-header.svg";

function Brand() {
  return (
    <>
      <div className="brand">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
    </>
  );
}

export default Brand;
