import React from "react";

export const DeleteIcon = ({ onClick }) => {
  return (
    <div className="deleteIcon" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="30px"
        height="31px"
      >
        <defs>
          <filter id="Filter_0">
            <feFlood
              floodColor="rgb(51, 51, 51)"
              floodOpacity="1"
              result="floodOut"
            />
            <feComposite
              operator="atop"
              in="floodOut"
              in2="SourceGraphic"
              result="compOut"
            />
            <feBlend mode="normal" in="compOut" in2="SourceGraphic" />
          </filter>
        </defs>
        <g filter="url(#Filter_0)">
          <path
            fillRule="evenodd"
            fill="rgb(255, 255, 255)"
            d="M15.049,30.140 C6.825,30.140 0.158,23.478 0.158,15.260 C0.158,7.042 6.825,0.380 15.049,0.380 C23.274,0.380 29.941,7.042 29.941,15.260 C29.941,23.478 23.274,30.140 15.049,30.140 ZM15.049,2.240 C7.853,2.240 2.020,8.069 2.020,15.260 C2.020,22.451 7.853,28.280 15.049,28.280 C22.245,28.280 28.079,22.451 28.079,15.260 C28.079,8.069 22.245,2.240 15.049,2.240 ZM16.303,15.261 L19.436,18.392 C19.782,18.738 19.782,19.298 19.436,19.644 C19.089,19.990 18.528,19.990 18.182,19.644 L15.049,16.514 L11.917,19.644 C11.571,19.990 11.009,19.990 10.663,19.644 C10.317,19.298 10.317,18.738 10.663,18.392 L13.796,15.261 L10.662,12.129 C10.316,11.784 10.316,11.223 10.662,10.877 C11.008,10.531 11.569,10.531 11.915,10.877 L15.049,14.009 L18.184,10.877 C18.529,10.531 19.091,10.531 19.437,10.877 C19.783,11.223 19.783,11.784 19.437,12.129 L16.303,15.261 Z"
          />
        </g>
      </svg>
    </div>
  );
};
