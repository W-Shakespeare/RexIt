import {
  CHANGE_CRACKER_COMPOSITION,
  ADD_CRACKER_TO_BASKET,
  CHANGE_PACK,
  SHOW_SHOPPING_CART,
  SET_IS_MOBILE_VERSION,
  SET_ADAPTIVE_FOOTER_BACGROUND,
  SET_IS_ACTIVE_MENU,
  DELETE_CRACKER_FROM_BASKET,
} from "../type/type";

export const changeCrackerComposition = (ingredients) => ({
  type: CHANGE_CRACKER_COMPOSITION,
  ingredients,
});

export const addCrackerToBasket = (cracker) => ({
  type: ADD_CRACKER_TO_BASKET,
  cracker,
});

export const changePack = (pack) => ({
  type: CHANGE_PACK,
  pack,
});

export const showShoppingCart = (boolean) => ({
  type: SHOW_SHOPPING_CART,
  boolean,
});

export const setIsMobileVersion = (boolean) => ({
  type: SET_IS_MOBILE_VERSION,
  boolean,
});

export const setAdaptveFooterBacground = () => ({
  type: SET_ADAPTIVE_FOOTER_BACGROUND,
});

export const setIsActiveMenu = (boolean) => ({
  type: SET_IS_ACTIVE_MENU,
  boolean,
});

export const deleteCrackerItem = (id) => ({
  type: DELETE_CRACKER_FROM_BASKET,
  id,
});
