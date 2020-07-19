import React from "react";

import "./styles.scss";
import BannerDsk from "../../assets/banners/banner-principal-desk.jpg";
import BannerMbl from "../../assets/banners/banner-principal-mobile.jpg";

function Banner() {
  return (
    <div className="bannerWrapper">
      <div className="bannerWrpDesktop">
        <img src={BannerDsk} alt="Banner" />
      </div>
      <div className="bannerWrpMobile">
        <img src={BannerMbl} alt="Banner" />
      </div>
    </div>
  );
}

export default Banner;
