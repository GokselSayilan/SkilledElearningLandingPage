import React from "react";
import "./header.css";
import Button from "../Button/Button";

function Header() {
  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="headerLeft">
          <h1 className="headerLeftTitle">Maximize skill, minimize budget</h1>
          <p className="headerLeftDesc">
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </p>
          <Button color="orange" />
        </div>
        <div className="headerRight">
          <img
            src="assets/image-hero-desktop.webp"
            alt="headerPhoto"
            className="headerRightImg"
          />
          <img
            src="assets/image-hero-tablet.webp"
            alt="headerPhoto"
            className="headerRightImgTablet"
          />
          <img
            src="assets/image-hero-mobile@2x.webp"
            alt="headerPhoto"
            className="headerRightImgMobile"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
