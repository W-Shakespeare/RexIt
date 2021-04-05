import React from "react";
import { useSelector } from "react-redux";
import { OrderInfoQuantity } from "./OrderInfoQuantity";

export const OrderInfoQuantityContainer = () => {
  const { crackerItems } = useSelector((state) => state.header.shoppingCart);
  return <OrderInfoQuantity quanity={crackerItems.length} />;
};
