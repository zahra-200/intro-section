import React from "react";
import DescktopNavbar from "../descktopNavbar/DescktopNavbar";
import MobileNavbar from "../mobileNavbar/MobileNavbar";

function Navbar() {
  return (
    <nav>
      <div className="hidden lg:block">
        <DescktopNavbar />
      </div>

      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
    </nav>
  );
}

export default Navbar;
