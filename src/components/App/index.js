import React, { useEffect } from "react";
import {
  setAdaptveFooterBacground,
  setIsMobileVersion,
} from "../../redux/actions/actions";
import App from "./App";
import { useDispatch } from "react-redux";

export const AppContainer = () => {
  const dispatch = useDispatch();

  const adaptiveFooterBacground = () => {
    let clientWidth = document.body.clientWidth;
    if (clientWidth >= 496) {
      dispatch(setAdaptveFooterBacground());
      dispatch(setIsMobileVersion(false));
    } else {
      dispatch(setIsMobileVersion(true));
    }
  };

  useEffect(() => {
    adaptiveFooterBacground();
    window.addEventListener("resize", adaptiveFooterBacground);

    return () => {
      window.removeEventListener("resize", adaptiveFooterBacground);
    };
  }, []);

  return <App />;
};

export default App;
