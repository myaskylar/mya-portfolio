import React from "react";
import "./header.css";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
