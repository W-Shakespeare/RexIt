import React from "react";
import PropTypes from "prop-types";

export const UncoverIcon = ({ fill = false }) => {
  return (
    <div className="uncoverIcon">
      <svg
        width="17"
        height="10"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnssvgjs="http://svgjs.com/svgjs"
        viewBox="0 0.217 17 9.566"
        fill={fill ? `${fill}` : "#fff"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="10"
          viewBox="1.996 1.995 16.009 9.008"
        >
          <path
            paintOrder="stroke fill markers"
            fillRule="evenodd"
            d="M17.844 2.924l-.802-.774a.517.517 0 0 0-.738 0L10 8.233 3.696 2.15a.517.517 0 0 0-.738 0l-.802.774a.481.481 0 0 0-.16.356.48.48 0 0 0 .16.356l7.475 7.213a.515.515 0 0 0 .738 0l7.475-7.213a.482.482 0 0 0 .16-.356.482.482 0 0 0-.16-.356z"
          />
        </svg>
      </svg>
    </div>
  );
};

UncoverIcon.propTypes = {
  fill: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
