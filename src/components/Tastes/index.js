import React from "react";
import { useSelector } from "react-redux";
import { Tastes } from "./Tastes";

export const TastesContainer = () => {
  const { isMobileVersion } = useSelector((state) => state.header);
  const { isActiveMenu } = useSelector((state) => state.header);
  const styleBtn = {
    display: isMobileVersion && isActiveMenu ? "none" : false,
  };
  return <Tastes styleBtn={styleBtn} />;
};
