import React from "react";

import "./style.scss";
import logo from "../../../assets/iconeshome/logo/logo-header.svg";

import BrandMenu from "./BrandMenu";

function Brand() {
  return (
    <div className="brand">
      <div className="responsiveMenu">
        <div className="menuRM">
          <div className="hamburguerRM"></div>
        </div>
      </div>
      <span className="trianguloRM"></span>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <BrandMenu />
    </div>
  );
}

export default Brand;
