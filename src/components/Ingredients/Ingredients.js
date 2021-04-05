import React from "react";
import Ingredient from "./Ingredient/ingredient";
import Select from "../Select/Select";
import {
  ChoosePack,
  SoybeanIcon,
  SesameIcon,
  WheatIcon,
  CornIcon,
} from "../Icons";
import { useDispatch, useSelector } from "react-redux";
import { addCrackerToBasket } from "../../redux/actions/actions";

export const Ingredients = () => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector((state) => state.ingredients);
  const { maxValueIngredient } = useSelector((state) => state.ingredients);
  const { pack } = useSelector((state) => state.ingredients);

  const onAddCreackerToBasket = () => {
    let creackerItem = { id: Date.now(), ingredients, pack, price: 30.0 };
    dispatch(addCrackerToBasket(creackerItem));
  };

  return (
    <div className="ingredients">
      <div className="column">
        {/* this code can be refracted but no time */}
        <Ingredient
          icon={<SoybeanIcon fill="#00a651" size={{ w: 61, h: 62 }} />}
          nameIngredient={"soybean"}
          value={ingredients["soybean"]}
          maxValueIngredient={maxValueIngredient.soybean}
        />
        <Ingredient
          icon={<SesameIcon fill="#49743f" size={{ w: 61, h: 62 }} />}
          nameIngredient={"sesame"}
          value={ingredients["sesame"]}
          maxValueIngredient={maxValueIngredient.sesame}
        />
        <Ingredient
          icon={<WheatIcon fill="#aba000" size={{ w: 61, h: 62 }} />}
          nameIngredient={"wheat"}
          value={ingredients["wheat"]}
          maxValueIngredient={maxValueIngredient.wheat}
        />
        <Ingredient
          icon={<CornIcon fill="#939393" size={{ w: 61, h: 62 }} />}
          nameIngredient={"corn"}
          value={ingredients["corn"]}
          maxValueIngredient={maxValueIngredient.corn}
        />
        {/* this code can be refracted but no time */}
        <div className=" selectWrapper">
          <ChoosePack />
          <Select />
        </div>
        <div className="button" onClick={onAddCreackerToBasket}>
          <div className="buttonBody__wrapper">
            <div className="button__body">
              <div className="button__icon">+</div>
            </div>
            <div className="button__appear">add to card</div>
          </div>
        </div>
      </div>
    </div>
  );
};
