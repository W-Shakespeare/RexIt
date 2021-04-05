import React from "react";
import { Slider } from "antd";
import { useDispatch } from "react-redux";
import { changeCrackerComposition } from "../../../redux/actions/actions";
import PropTypes from "prop-types";

const Ingredient = ({ icon, nameIngredient, value, maxValueIngredient }) => {
  const dispatch = useDispatch();
  const changeValue = (value) => {
    if (value <= maxValueIngredient) {
      dispatch(changeCrackerComposition({ [nameIngredient]: value }));
    }
  };

  return (
    <div className="ingredients__item">
      {icon}
      <div className="ingredients__set">
        <Slider
          value={value}
          onChange={changeValue}
          className={nameIngredient}
          step={1}
        />
      </div>
      <div className="ingredients__value">{value}%</div>
    </div>
  );
};

Ingredient.propTypes = {
  icon: PropTypes.object,
  nameIngredient: PropTypes.string,
  value: PropTypes.number,
  maxValueIngredient: PropTypes.number,
};

export default React.memo(Ingredient);
