import React from "react";

import "./styles.scss";

import SBImg1 from "../../../assets/banners/mini-banner-esq.jpg";
import SBImg2 from "../../../assets/banners/mini-banner-dir.jpg";

function SecondaryBanner() {
  return (
    <div className="sbWrapper">
      <img src={SBImg1} alt="Tudo para o interior do seu carro!" />
      <img src={SBImg2} alt="Seja criativo e potencialize o seu som" />
    </div>
  );
}

export default SecondaryBanner;
