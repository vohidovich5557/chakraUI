import React from "react";

export const PayPal = () => {
  return (
    <svg
      width={75.0}
      height={75.0}
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <desc>Created with Pixso.</desc>
      <defs>
        <filter
          id="filter_48_8_dd"
          x={0.0}
          y={0.0}
          width={75.0}
          height={75.0}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={0} dy="3.5" />
          <feGaussianBlur stdDeviation="1.83333" />
          <feComposite in2="hardAlpha" operator="out" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect_dropShadow_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect_dropShadow_1"
            result="shape"
          />
        </filter>
      </defs>
      <g filter="url(#filter_48_8_dd)">
        <rect
          id="Rectangle 3"
          x="5.500000"
          y={2.0}
          rx={12.0}
          width="63.999996"
          height="63.999996"
          fill="#4FD1C5"
          fillOpacity={1.0}
        />
      </g>
      <path
        id="Vector"
        d="M44.17 24.53C43.14 23.35 41.26 22.85 38.86 22.85L31.89 22.85C31.4 22.85 30.98 23.2 30.9 23.68L28 41.94C27.95 42.3 28.23 42.63 28.59 42.63L32.9 42.63L33.98 35.83L33.94 36.04C34.02 35.56 34.43 35.21 34.92 35.21L36.97 35.21C40.99 35.21 44.13 33.59 45.05 28.91C45.08 28.77 45.12 28.5 45.12 28.5C45.38 26.77 45.12 25.59 44.17 24.53Z"
        fill="#FFFFFF"
        fillOpacity={1.0}
        fillRule="nonzero"
      />
      <path
        id="Vector"
        d="M46.21 29.39C45.21 34 42.02 36.44 36.97 36.44L35.14 36.44L33.77 45.1L36.74 45.1C37.17 45.1 37.54 44.79 37.6 44.36L37.64 44.18L38.32 39.88L38.37 39.65C38.43 39.22 38.8 38.91 39.23 38.91L39.77 38.91C43.28 38.91 46.03 37.5 46.84 33.4C47.16 31.76 47 30.38 46.21 29.39Z"
        fill="#FFFFFF"
        fillOpacity={1.0}
        fillRule="nonzero"
      />
    </svg>
  );
};
