import React from "react";
import { Ingredients } from "../Ingredients/Ingredients";

export const Constructor = () => {
  return (
    <section className="constructor">
      <div className="wrapper">
        <div className="title constructor__title">CRACKER CONSTRUCTOR</div>
        <div className="constructor__currentValue">
          <div>current value:</div>
          <div>143 €</div>
        </div>
        <Ingredients />
      </div>
    </section>
  );
};
