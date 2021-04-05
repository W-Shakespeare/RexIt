import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsActiveMenu } from "../../redux/actions/actions";
import { Menu } from "./Menu";
import { MenuIconClose, MenuIconOpen } from "../Icons";

export const MenuContainer = () => {
  const dispatch = useDispatch();
  const { isMobileVersion } = useSelector((state) => state.header);
  const { isActiveMenu } = useSelector((state) => state.header);

  const onActiveMenu = () => {
    dispatch(setIsActiveMenu(!isActiveMenu));
  };

  const navClassName =
    isMobileVersion && isActiveMenu
      ? "menu  menu_open menu_isMobile"
      : isMobileVersion && !isActiveMenu
      ? "menu  menu_close menu_isMobile"
      : "menu";

  const isShowMobileMenuIconClose =
    isMobileVersion && !isActiveMenu ? (
      <MenuIconClose onClick={onActiveMenu} />
    ) : (
      false
    );

  const isShowMobileMenuIconOpen =
    isMobileVersion && isActiveMenu ? (
      <MenuIconOpen onClick={onActiveMenu} />
    ) : (
      false
    );

  const containerMenuStyle = {
    height:
      isMobileVersion && isActiveMenu
        ? "calc(100vh - 61px)"
        : isMobileVersion && !isActiveMenu
        ? "70px"
        : false,
  };

  return (
    <Menu
      isShowMobileMenuIconOpen={isShowMobileMenuIconOpen}
      containerMenuStyle={containerMenuStyle}
      isMobileVersion={isMobileVersion}
      navClassName={navClassName}
      isShowMobileMenuIconClose={isShowMobileMenuIconClose}
    />
  );
};
