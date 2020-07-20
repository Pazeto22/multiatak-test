import React from "react";

import "./styles.scss";

import Product from "../Product";

function Home() {
  return (
    <>
      <div className="homeBannerSeparation" />
      <body className="homeWrappper">
        <h2 className="homeTitle">Mais Vendidos</h2>
        <section className="bestSellers">
          <Product />
          <Product />
          <Product />
          <Product />
        </section>
      </body>
    </>
  );
}

export default Home;
