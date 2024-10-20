import React from "react";
import NavLinks from "../navLinks/NavLinks";
import Logo from "./../../images/logo.svg";
function DescktopNavbar() {
  return (
    <nav className="flex w-full h-11">
      <img src={Logo} alt="" />
      <NavLinks />
    </nav>
  );
}

export default DescktopNavbar;
