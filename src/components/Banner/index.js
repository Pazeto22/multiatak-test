import React from "react";

import "./styles.scss";
import Salesforce from "./Salesforce";
import SecondaryBanner from "./SecondaryBanner";

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
      <section className="bannerBody">
        <Salesforce />
        <SecondaryBanner />
      </section>
    </div>
  );
}

export default Banner;
