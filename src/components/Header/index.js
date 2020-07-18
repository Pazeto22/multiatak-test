import React from "react";

import "./styles.scss";

import Brand from "./Brand";
import SearchBar from "./SearchBar";
import HeaderMenu from "./HeaderMenu";
import Categories from "./Categories";
import CategoriesList from "./CategoriesList";

function Header() {
  return (
    <>
      <header>
        <div className="main-header">
          <Brand />
          <SearchBar />
          <HeaderMenu />
        </div>
        <div className="sec-header">
          <Categories />
          <CategoriesList />
        </div>
      </header>
    </>
  );
}

export default Header;
