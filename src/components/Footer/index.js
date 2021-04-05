import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Footer } from "./Footer";

export const FooterContainer = () => {
  const { isActiveMenu } = useSelector((state) => state.header);
  const { isActiveShoppingCart } = useSelector(
    (state) => state.header.orderInfo
  );
  const { isMobileVersion } = useSelector((state) => state.header);
  const { footerHeight } = useSelector((state) => state.footer);
  const [displayStyle, setDisplayStyle] = useState();
  const footerStyle = {
    height: `${footerHeight}px`,
    display: displayStyle,
  };

  useEffect(() => {
    if (isActiveMenu || (isMobileVersion && isActiveShoppingCart)) {
      setTimeout(() => {
        setDisplayStyle("none");
      }, 1200);
      // 1200 time after which the footer will disappear
    } else {
      setDisplayStyle("flex");
    }
  }, [isActiveMenu, isActiveShoppingCart]);

  return <Footer footerStyle={footerStyle} />;
};
