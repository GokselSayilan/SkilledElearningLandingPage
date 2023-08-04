import React from "react";
import "./navbar.css";
import Button from "../Button/Button";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <img src="assets/logo-dark.svg" alt="" className="navbarLogo" />
        <Button color='black'/>
      </div>
    </div>
  );
}

export default Navbar;
