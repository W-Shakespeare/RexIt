import React from "react";
import { SemenIcon } from "../../Icons";
import PropTypes from "prop-types";

export const OrderInfoQuantity = ({ quanity }) => {
  return (
    <div className="orderInfo__quantity">
      <SemenIcon />
      <div className="quantity">{quanity}</div>
    </div>
  );
};
OrderInfoQuantity.propTypes = {
  quanity: PropTypes.number,
};
