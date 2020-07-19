import React from "react";

import "./styles.scss";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Home />
    </div>
  );
}

export default App;
