import React from "react";
import { MenuContainer } from "../Menu";
import { OrderContainer } from "../Order";

export const Header = () => {
  return (
    <header className="header">
      <OrderContainer />
      <MenuContainer />
    </header>
  );
};
