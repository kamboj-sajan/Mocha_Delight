import React from "react";
import MenuList from "./MenuList";
import menuItems from "./menuitems";

function Menu() {
  return (
    <div>
      <MenuList items={menuItems} />
    </div>
  );
}

export default Menu;
