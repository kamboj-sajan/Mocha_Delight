import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css"

function Header() {
  return (
     <div>

    <nav className="navbar">
      <div className="navbar-logo">
        <h1> Mocha Delight</h1>
      </div>
      <ul className="navbar-links">
      <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Cafe-menu</Link></li>
      </ul>
      <div className="navbar-book">
        <a href="#book">Sign in</a>
      </div>
    </nav>
     </div>

  );
}

export default Header;
