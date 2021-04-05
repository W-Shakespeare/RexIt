import React from "react";
import { Order } from "./Order";
import { useDispatch, useSelector } from "react-redux";
import { showShoppingCart } from "../../redux/actions/actions";
import { ShoppingCartContainer } from "../ShoppingCart";

export const OrderContainer = () => {
  const dispatch = useDispatch();
  const { isMobileVersion } = useSelector((state) => state.header);
  const { isActiveShoppingCart } = useSelector(
    (state) => state.header.orderInfo
  );

  const onShowShoppingcart = () => {
    dispatch(showShoppingCart(true));
  };

  const isShowShoppingCart = isMobileVersion ? (
    <ShoppingCartContainer />
  ) : !isMobileVersion && isActiveShoppingCart ? (
    <ShoppingCartContainer />
  ) : (
    false
  );

  return (
    <Order
      isShowShoppingCart={isShowShoppingCart}
      onShowShoppingcart={onShowShoppingcart}
    />
  );
};
