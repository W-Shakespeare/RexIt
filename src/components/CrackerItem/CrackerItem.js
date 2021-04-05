import React from "react";
import semenBlack from "../../img/semenBlack.png";
import { DeleteIcon } from "../Icons";

export const CrackerItem = ({ cracker, onDeleteCrackerItem, isDelete, id }) => {
  return (
    <div
      className={isDelete ? "crackerItem crackerItem_deleting" : "crackerItem"}
    >
      <div className="shoppingCart__row">
        <div className="icon">
          <img src={semenBlack} />
        </div>
        <div className="crackerItemInfo">
          <div className="wrapper">
            <div className="crackerItemInfo__composition">
              {cracker.ingredients.soybean}%
            </div>
            <div className="crackerItemInfo__composition">
              {cracker.ingredients.sesame}%
            </div>
            <div className="crackerItemInfo__composition">
              {cracker.ingredients.wheat}%
            </div>
            <div className="crackerItemInfo__composition">
              {cracker.ingredients.corn}%
            </div>
          </div>

          <div className="crackerItemInfo__pack">{cracker.pack}kg</div>
          <div className="crackerItemInfo__price">
            {cracker.price.toFixed(2)}€
          </div>
        </div>
      </div>
      <DeleteIcon onClick={onDeleteCrackerItem} />
    </div>
  );
};
