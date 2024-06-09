import React from "react";
import "../css/Secabout.css";

function Secabout({ imgSrc, title, description }){
  return (
    <div className="section">
      <img src={imgSrc} alt={title} className="section-image" />
      <div className="section-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Secabout;
