import React from "react";
import "../css/Backgroundvid.css";
import videoSrc from "../cafe.mp4";

function Body1() {
  return (
    <div className="video-container">
      <video autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1 id="h11">Experience the hand-crafted difference.</h1>
        <p id="h12">
          We are a locally owned and operated coffee shop with handcrafted
          espresso drinks, craft soda and single origin brews.
        </p>
        <a href="#" class="order-now">Order Now</a>
      </div>
    </div>
  );
}

export default Body1;
