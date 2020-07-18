import React from "react";

import "./styles.css";

function SearchBar() {
  return (
    <>
      <div className="wrapperSearchBar">
        <div className="triangulo" />
        <form className="searchWrapper">
          <input
            type="search"
            name="search"
            className="searchBar"
            placeholder="Digite aqui o que você procura..."
            id="home-search"
          />
          <div className="submitBg">
            <input type="submit" className="searchSubmit" value="Search" />
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
