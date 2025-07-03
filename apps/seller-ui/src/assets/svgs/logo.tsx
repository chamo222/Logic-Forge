import React from "react";

const Logo = () => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      style={{ display: "block", margin: "0 auto" }}
    >
      {/* Outer Hexagon */}
      <polygon
        points="100,20 160,60 160,140 100,180 40,140 40,60"
        fill="#6366F1"
        stroke="#4338CA"
        strokeWidth="6"
      />

      {/* Inner Shape - Abstract futuristic element */}
      <path
        d="M80 80 H120 V120 H80 Z M90 90 V110 H110 V90 Z"
        fill="#E0E7FF"
      />

      {/* Dot in center */}
      <circle cx="100" cy="100" r="6" fill="#1E3A8A" />
    </svg>
  );
};

export default Logo;