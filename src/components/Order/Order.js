import React from "react";
import { UncoverIcon } from "../Icons/UncoverIcon";
import { OrderInfoQuantityContainer } from "./OrderInfoQuantity";
import PropTypes from "prop-types";

export const Order = ({ isShowShoppingCart, onShowShoppingcart }) => {
  return (
    <div className="containerOrder">
      <div className="row">
        <div className="logo">
          <div className="logo__textPart1">Cracker</div>
          <div className="logo__textPart2">logo</div>
        </div>
        <div className="orderInfo">
          {isShowShoppingCart}
          <div className="orderInfo__details" onClick={onShowShoppingcart}>
            <div className="text">DETAILS</div>
            <UncoverIcon />
          </div>
          <div className="orderInfo__total">
            <div className="text">TOTAL:</div>
            <div className="quantityMoney text">143 €</div>
          </div>
          <OrderInfoQuantityContainer />
        </div>
      </div>
    </div>
  );
};
Order.propTypes = {
  isShowShoppingCart: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  onShowShoppingcart: PropTypes.func,
};
