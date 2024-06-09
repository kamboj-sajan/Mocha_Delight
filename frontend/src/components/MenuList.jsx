import React from "react";
import MenuItem from "./MenuItem";
import "../css/MenuList.css";

const MenuList = ({ items }) => {
  return (
    <div className="menu-list">
      <div className="menu-items-container">
      {items.map((item, index) => (
        <MenuItem
          key={index}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
      </div>
    </div>
  );
};

export default MenuList;
