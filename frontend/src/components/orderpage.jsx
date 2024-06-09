import React from "react";
import MenuList from "./MenuList";
import menuItems from "./menuitems";

function OrderPage() {
  return (
    <div>
        <MenuList items={menuItems} />
    </div>
  );
}

export default OrderPage;
