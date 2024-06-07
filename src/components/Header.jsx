import React from "react";

function Header() {
  return (<header>
    <div id="headerback">
      <h1 id="header">Mocha Delight</h1>
    </div>
    <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
      <div><a id="signin" href="#signup">Sign in</a></div>      
    </header>
  );
}

export default Header;
