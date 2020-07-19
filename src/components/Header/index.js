import React from "react";

import "./styles.scss";

import Brand from "./Brand";
import SearchBar from "./SearchBar";
import HeaderMenu from "./HeaderMenu";
import Categories from "./Categories";
import CategoriesList from "./CategoriesList";
import ShoppingCart from "./ShoppingCart";

function Header() {
  return (
    <header>
      <div className="main-header">
        <Brand />
        <SearchBar />
        <HeaderMenu />
      </div>
      <div className="sec-header">
        <Categories />
        <CategoriesList />
        <ShoppingCart />
      </div>
    </header>
  );
}

export default Header;
