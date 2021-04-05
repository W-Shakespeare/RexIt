import { SET_ADAPTIVE_FOOTER_BACGROUND } from "../type/type";

const initialState = {
  footerHeight: 788,
};

function footerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ADAPTIVE_FOOTER_BACGROUND:
      return {
        ...state,
        footerHeight: adaptiveFooterBacground(),
      };
    default:
      return state;
  }
}
export default footerReducer;

function adaptiveFooterBacground() {
  return (document.body.clientWidth * 0.4102030192608017).toFixed(0);
}
