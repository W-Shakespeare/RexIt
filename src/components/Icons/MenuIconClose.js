import React from "react";
import PropTypes from "prop-types";

export const MenuIconClose = ({ onClick }) => {
  return (
    <div className="menuIconClose" onClick={onClick}>
      <svg
        width="24"
        height="18"
        viewBox="0 0 24 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="1" x2="24" y2="1" stroke="#6A7588" strokeWidth="2" />
        <line y1="9" x2="24" y2="9" stroke="#6A7588" strokeWidth="2" />
        <line y1="17" x2="24" y2="17" stroke="#6A7588" strokeWidth="2" />
      </svg>
    </div>
  );
};
MenuIconClose.propTypes = {
  onClick: PropTypes.func,
};
