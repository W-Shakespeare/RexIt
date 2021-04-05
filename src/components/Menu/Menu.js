import React from "react";
import PropTypes from "prop-types";

export const Menu = ({
  isShowMobileMenuIconOpen,
  containerMenuStyle,
  isShowMobileMenuIconClose,
  navClassName,
}) => {
  return (
    <div className="containerMenu" style={containerMenuStyle}>
      {isShowMobileMenuIconClose}
      {isShowMobileMenuIconOpen}
      <nav className={navClassName}>
        <div className="item menu__home">HOME</div>
        <div className="item menu__about">ABOUT US</div>
        <div className="item menu__contacts">CONTACTS</div>
        <div className="item menu__checkout">CHECKOUT</div>
        <div className="item">ACCOUNT</div>
      </nav>
    </div>
  );
};
Menu.propTypes = {
  isShowMobileMenuIconOpen: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  containerMenuStyle: PropTypes.shape({
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  }),
  isShowMobileMenuIconClose: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  navClassName: PropTypes.string,
};
