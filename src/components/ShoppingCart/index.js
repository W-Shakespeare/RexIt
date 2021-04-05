import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingCart } from "./ShoppingCart";
import { showShoppingCart } from "../../redux/actions/actions";

export const ShoppingCartContainer = () => {
  const dispatch = useDispatch();
  const { crackerItems } = useSelector((state) => state.header.shoppingCart);
  const { isMobileVersion } = useSelector((state) => state.header);
  const { isActiveShoppingCart } = useSelector(
    (state) => state.header.orderInfo
  );
  const closeShoppingCart = () => {
    dispatch(showShoppingCart(false));
  };
  const shoppingCartClassName =
    isMobileVersion && isActiveShoppingCart
      ? "shoppingCart shoppingCart_isMobile shoppingCart_open"
      : isMobileVersion && !isActiveShoppingCart
      ? "shoppingCart shoppingCart_isMobile shoppingCart_close"
      : "shoppingCart";

  return (
    <ShoppingCart
      shoppingCartClassName={shoppingCartClassName}
      crackerItems={crackerItems}
      closeShoppingCart={closeShoppingCart}
    />
  );
};