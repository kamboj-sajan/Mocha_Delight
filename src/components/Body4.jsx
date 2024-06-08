import React from "react";
import { Link } from "react-router-dom";
import "../css/Body4.css";

function Body4(){
    return (
      <div className="Body4">
        <div className="Body4img">
          <img id="Bdy" src="/12.jpg" alt="Cafe" />
        </div>
        <div className="Body4txt">
          <h1>STOP BY SOMETIME!</h1>
          <p>
            Not only are we serving up hand-crafted food and beverages, but we've got a hand-crafted space, too. 
            Whether you're studying for midterms, catching up with friends, dropping in for lunch, or reading a good book, 
            our regulars confirm we've got the vibe.
          </p>
          <p>Already love the atmosphere? <Link to="/reviews">Give us a review!</Link></p>
        </div>
      </div>
    );
  };
  
  export default Body4;