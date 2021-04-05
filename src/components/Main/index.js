import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Main } from "./Main";

export const MainContainer = () => {
  const { isActiveMenu } = useSelector((state) => state.header);
  const { isActiveShoppingCart } = useSelector(
    (state) => state.header.orderInfo
  );
  const { isMobileVersion } = useSelector((state) => state.header);
  const [mainStyle, setMainStyle] = useState();

  useEffect(() => {
    if (isActiveMenu || (isMobileVersion && isActiveShoppingCart)) {
      setTimeout(() => {
        setMainStyle("none");
      }, 1200);
    } else {
      setMainStyle("block");
    }
  }, [isActiveMenu, isActiveShoppingCart]);

  return <Main mainStyle={mainStyle} />;
};
