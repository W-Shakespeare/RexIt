import { CHANGE_CRACKER_COMPOSITION, CHANGE_PACK } from "../type/type";

const initialState = {
  ingredients: { soybean: 30, sesame: 30, wheat: 30, corn: 10 },
  maxValueIngredient: { soybean: 40, sesame: 40, wheat: 40, corn: 10 },
  pack: 0.5,
};

function сrackerIngredientsReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CRACKER_COMPOSITION:
      debugger;
      return {
        ...state,
        ingredients: CalcCompositionOfCracker(
          action.ingredients,
          state.ingredients
        ),
        maxValueIngredient: CalcCompositionOfCracker(
          action.ingredients,
          state.ingredients,
          true
        ),
      };
    case CHANGE_PACK:
      debugger;
      return {
        ...state,
        pack: action.pack,
      };
    default:
      return state;
  }
}
export default сrackerIngredientsReducer;

function CalcCompositionOfCracker(
  changedIngredient,
  ingredients,
  maxValue = false
) {
  let updateIgredients = { ...ingredients, ...changedIngredient };
  let maxValueIngredients = {};
  let currentValueIngredients = {};
  let remainder = 100;
  let sumThreeIngredients =
    updateIgredients["soybean"] +
    updateIgredients["sesame"] +
    updateIgredients["wheat"];
  let isLessZero = 100 - sumThreeIngredients;
  Object.values(changedIngredient).forEach((newValue) => {
    remainder -= sumThreeIngredients;
    Object.keys(updateIgredients).map((it, i) => {
      if ([it] in changedIngredient) {
        maxValueIngredients[it] = remainder;
        currentValueIngredients[it] = newValue;
      }
      maxValueIngredients[it] = remainder + updateIgredients[it];
      if ([it] == "corn") {
        if (isLessZero <= 0) {
          currentValueIngredients["corn"] = 0;
        } else {
          currentValueIngredients["corn"] = isLessZero;
        }
      }
    });
  });
  if (maxValue) {
    return maxValueIngredients;
  }
  return { ...updateIgredients, ...currentValueIngredients };
}
