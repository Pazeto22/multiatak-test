import React from "react";

import "./styles.css";

import Brand from "./Brand";
import SearchBar from "./SearchBar";
import HeaderMenu from "./HeaderMenu";

function Header() {
  return (
    <>
      <header id="main-header">
        <Brand />
        <SearchBar />
        <HeaderMenu />
      </header>
    </>
  );
}

export default Header;
