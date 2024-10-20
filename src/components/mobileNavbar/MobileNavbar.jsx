import React, { useContext, useState } from "react";
import Logo from "./../../images/logo.svg";
import NavLinks from "../navLinks/NavLinks";
import openIcon from "./../../images/icon-menu.svg";
import closeIcon from "./../../images/icon-close-menu.svg";
import { AppContext } from "../../App";
function MobileNavbar() {
  const { setHamburger, hamburger } = useContext(AppContext);

  const handleHamburger = () => {
    setHamburger(!hamburger);
  };
  return (
    <nav className="flex w-full h-11 relative ">
      <img src={Logo} alt="" />
      {hamburger && <NavLinks />}
      <img
        src={hamburger ? closeIcon : openIcon}
        className="w-6 h-6 absolute -right-[0%]"
        onClick={handleHamburger}
        alt=""
      />
    </nav>
  );
}

export default MobileNavbar;
