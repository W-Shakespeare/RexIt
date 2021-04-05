import React from "react";
import PropTypes from "prop-types";

export const MenuIconOpen = ({ onClick }) => {
  MenuIconOpen.propTypes = {
    onClick: PropTypes.string,
  };
  return (
    <div className="menuIconOpen" onClick={onClick}>
      <svg
        width="20"
        height="19"
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="1.75984"
          y1="1.29289"
          x2="18.7598"
          y2="18.2929"
          stroke="#BFBFBF"
          strokeWidth="2"
        />
        <line
          x1="1.24016"
          y1="18.2929"
          x2="18.2402"
          y2="1.29289"
          stroke="#BFBFBF"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};
MenuIconOpen.propTypes = {
  onClick: PropTypes.func,
};
