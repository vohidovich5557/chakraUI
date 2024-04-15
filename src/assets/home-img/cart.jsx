import React from "react";

export const Cart = () => {
  return (
    <svg
      width={56.0}
      height={56.0}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <filter
          id="filter_4_81_dd"
          x="-0.000122"
          y="-0.000061"
          width={56.0}
          height={56.0}
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
        <clipPath id="clip4_82">
          <rect
            id="IONIcon/C/cart/default"
            width="22.500000"
            height="22.500000"
            transform="translate(16.749878 13.249878)"
            fill="white"
            fillOpacity={0}
          />
        </clipPath>
      </defs>
      <g filter="url(#filter_4_81_dd)">
        <rect
          id="Rectangle 3"
          x="5.499878"
          y="1.999939"
          rx="12.000001"
          width={45.0}
          height={45.0}
          fill="#4FD1C5"
          fillOpacity={1.0}
        />
      </g>
      <rect
        id="IONIcon/C/cart/default"
        width="22.500000"
        height="22.500000"
        transform="translate(16.749878 13.249878)"
        fill="#FFFFFF"
        fillOpacity={0}
      />
      <g clipPath="url(#clip4_82)">
        <path
          id="Vector"
          d="M25.89 31.53C25.89 32.3 25.26 32.93 24.48 32.93C23.7 32.93 23.07 32.3 23.07 31.53C23.07 30.75 23.7 30.12 24.48 30.12C25.26 30.12 25.89 30.75 25.89 31.53Z"
          fill="#FFFFFF"
          fillOpacity={1.0}
          fillRule="evenodd"
        />
        <path
          id="Vector"
          d="M35.73 31.53C35.73 32.3 35.1 32.93 34.32 32.93C33.55 32.93 32.92 32.3 32.92 31.53C32.92 30.75 33.55 30.12 34.32 30.12C35.1 30.12 35.73 30.75 35.73 31.53Z"
          fill="#FFFFFF"
          fillOpacity={1.0}
          fillRule="evenodd"
        />
        <path
          id="Vector"
          d="M36.82 18.55C36.72 18.43 36.6 18.33 36.45 18.27C36.31 18.2 36.16 18.17 36 18.17L22.63 18.17L22.36 16.64C22.33 16.48 22.25 16.33 22.12 16.22C21.99 16.12 21.83 16.06 21.67 16.06L18.85 16.06C18.67 16.06 18.49 16.13 18.36 16.26C18.23 16.4 18.15 16.57 18.15 16.76C18.15 16.95 18.23 17.13 18.36 17.26C18.49 17.39 18.67 17.46 18.85 17.46L21.08 17.46L23.08 28.84C23.11 29 23.2 29.15 23.32 29.25C23.45 29.36 23.61 29.42 23.78 29.42L35.03 29.42C35.21 29.42 35.39 29.34 35.52 29.21C35.66 29.08 35.73 28.9 35.73 28.71C35.73 28.53 35.66 28.35 35.52 28.22C35.39 28.08 35.21 28.01 35.03 28.01L24.37 28.01L24.12 26.6L34.74 26.6C34.98 26.6 35.22 26.52 35.41 26.37C35.6 26.21 35.72 26 35.77 25.76L37.04 19.43C37.07 19.28 37.07 19.12 37.03 18.97C36.99 18.81 36.92 18.67 36.82 18.55Z"
          fill="#FFFFFF"
          fillOpacity={1.0}
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};
