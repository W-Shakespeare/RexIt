import React from "react";

export const CloseIcon = ({ onClick }) => {
  return (
    <div className="closeIcon" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="22px"
        height="22px"
      >
        <text
          kerning="auto"
          fontFamily="MyriadPro"
          fill="rgb(0, 0, 0)"
          transform="matrix( 0.65809938051025, 0.65760930650349, -0.65809938051025, 0.65760930650349,-9.40108079581796, 12.9728279195104)"
          fontSize="51.594px"
        >
          <tspan fontSize="51.594px" fontFamily="Avenir" fill="#333333">
            &#43;
          </tspan>
        </text>
      </svg>
    </div>
  );
};
