import React from "react";
import "../css/MenuItem.css"

const MenuItem = ({ name, description, price, image }) => {
  return (
    <div className="menu-item">
      <div className="menu-item-content">
        <h3 className="menu-item-name">{name}</h3>
        <p className="menu-item-description">{description}</p>
        <p className="menu-item-price"> ₹{price.toFixed(2)}</p>
      </div>
      {image && <img className="menu-item-image" src={image} alt={name} />}
    </div>
  );
};

export default MenuItem;
