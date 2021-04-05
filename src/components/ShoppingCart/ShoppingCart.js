import React from "react";
import {
  SoybeanIcon,
  SesameIcon,
  WheatIcon,
  CornIcon,
  CloseIcon,
} from "../Icons";
import { CrackerItemContainer } from "../CrackerItem";

export const ShoppingCart = ({
  crackerItems,
  closeShoppingCart,
  shoppingCartClassName,
}) => {
  return (
    <section className={shoppingCartClassName}>
      <div className="shoppingCart__background"></div>
      <div className="wrapperHeaderAndComposition">
        <div className="shoppingCart__header">
          <div className="compositionIcons">
            <SoybeanIcon size={{ w: 33, h: 33 }} />
            <SesameIcon size={{ w: 33, h: 33 }} />
            <WheatIcon size={{ w: 33, h: 33 }} />
            <CornIcon size={{ w: 33, h: 33 }} />
          </div>
          <CloseIcon onClick={closeShoppingCart} />
        </div>

        <div className="column">
          {crackerItems.map((cracker, i) => {
            return (
              <CrackerItemContainer
                key={cracker.id}
                id={cracker.id}
                cracker={cracker}
              />
            );
          })}
        </div>
      </div>
      <div className="shoppingCart__footer">
        <div className="wrapper">
          <div className="shoppingCart__total">
            <div className="text">TOTAL:</div>
            <div className="quantityMoney">143 €</div>
          </div>
          <div className="shoppingCart__button">
            <button> CHECKOUT</button>
          </div>
        </div>
      </div>
    </section>
  );
};
