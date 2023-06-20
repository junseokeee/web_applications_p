import React from "react";
import collabo_logo from "./logo.png";
import banner from "./banner.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <Link to="/">
            <img src={collabo_logo} alt="logo" style={{ height: "100px" }} />
          </Link>
        </div>
        <img src={banner} alt="" style={{ width: "100%" }} />
      </header>
    </div>
  );
};

export default Header;
