import React from "react";
import MenuList from "./MenuList";
import menuItems from "./menuitems";

function Menu() {
  return (
    <div>
      <h1>Our Menu</h1>
      <MenuList items={menuItems} />
    </div>
  );
}

export default Menu;
