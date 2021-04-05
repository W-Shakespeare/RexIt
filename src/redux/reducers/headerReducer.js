import {
  ADD_CRACKER_TO_BASKET,
  DELETE_CRACKER_FROM_BASKET,
  SHOW_SHOPPING_CART,
  SET_IS_MOBILE_VERSION,
  SET_IS_ACTIVE_MENU,
} from "../type/type";

const initialState = {
  isMobileVersion: false,
  isActiveMenu: false,
  orderInfo: { isActiveShoppingCart: false },
  shoppingCart: {
    crackerItems: [
      // {
      //   id: 1,
      //   ingredients: { soybean: 20, sesame: 20, wheat: 40, corn: 20 },
      //   pack: 0.5,
      //   price: 20.0,
      // },
    ],
  },
};

function headerReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CRACKER_TO_BASKET:
      debugger;
      return {
        ...state,
        shoppingCart: {
          crackerItems: [...state.shoppingCart.crackerItems, action.cracker],
        },
      };
    case DELETE_CRACKER_FROM_BASKET:
      return {
        ...state,
        shoppingCart: {
          crackerItems: deleteCrackerItem(
            state.shoppingCart.crackerItems,
            action.id
          ),
        },
      };
    case SHOW_SHOPPING_CART:
      return {
        ...state,
        orderInfo: { isActiveShoppingCart: action.boolean },
      };
    case SET_IS_MOBILE_VERSION:
      return {
        ...state,
        isMobileVersion: action.boolean,
      };
    case SET_IS_ACTIVE_MENU:
      return {
        ...state,
        isActiveMenu: action.boolean,
      };

    default:
      return state;
  }
}

export default headerReducer;

function deleteCrackerItem(arrCracker, id) {
  return arrCracker.filter((crackerItems) => crackerItems.id != id);
}
