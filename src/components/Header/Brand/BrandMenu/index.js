import React from "react";

import "./styles.scss";
import MyAccount from "../../../../assets/iconeshome/icones-header/minha-conta-cinza.svg";
import ShoppingCart from "../../ShoppingCart";

function BrandMenu() {
  return (
    <div className="brandmenuWrapper">
      <a className="myAccountRM" href="/">
        <img src={MyAccount} alt="Minha conta" />
      </a>
      <ShoppingCart />
    </div>
  );
}

export default BrandMenu;
