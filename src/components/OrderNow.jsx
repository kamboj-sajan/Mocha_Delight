import React from "react";
import MenuList from "./MenuList";
import menuItems from "./menuitems";
import OrderForm from "./orderFrm";

function OrderNow() {
  return (
    <div>
      <MenuList items={menuItems} />
      <OrderForm />
    </div>
  );
}

export default OrderNow;
