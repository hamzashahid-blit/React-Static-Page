import React from "react";
import Logo from "../logo.svg";

function NavBar() {
  return (
      <nav>
		<img src={Logo} className="nav--icon"/>
        <h1 className="nav--logo_text">Element Facts</h1>
        <h2 className="nav--title">React Course - Project 1</h2>
      </nav>
  );
}

export default NavBar;
