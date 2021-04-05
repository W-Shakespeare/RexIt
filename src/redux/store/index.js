import { Action, createStore } from "redux";
import { combineReducers, applyMiddleware, compose } from "redux";
import headerReducer from "../reducers/headerReducer";
import constructorIngredientsReducer from "../reducers/constructorIngredientsReducer";
import footerReducer from "../reducers/footerReducer";
// import thunkMiddleware, { ThunkAction } from "redux-thunk";

const rootReducer = combineReducers({
  header: headerReducer,
  ingredients: constructorIngredientsReducer,
  footer: footerReducer,
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
