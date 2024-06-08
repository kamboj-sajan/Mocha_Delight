import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css"

function Header() {
  return (
     <div>
      
     <nav className="navbar">
      <div className="navbar-logo">
      Mocha Delight
      </div>
      <div className="navbar-links">
      <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <Link to="/contact" className="nav-link">CONTACT</Link>
      </div>
    </nav>
     </div>

  );
}

export default Header;
