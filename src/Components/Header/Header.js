import React from "react";
import "../../Styles/Header.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <h1>ProfileZone</h1>
          </Link>
        </div>
        <div>
          <Navbar />
        </div>
      </nav>
    </header>
  );
};

export default Header;
