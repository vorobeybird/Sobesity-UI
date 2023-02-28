import { SVGProps } from 'react';

const SvgC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 58 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#c_svg__a)" fillRule="evenodd" clipRule="evenodd">
      <path
        d="M27.858 3.423a2.34 2.34 0 0 1 2.284 0c3.495 1.961 14.011 7.866 17.507 9.827a2.208 2.208 0 0 1 1.143 1.923v19.653a2.21 2.21 0 0 1-1.143 1.924c-3.495 1.961-14.011 7.866-17.507 9.827a2.34 2.34 0 0 1-2.284 0c-3.495-1.961-14.012-7.866-17.508-9.827a2.21 2.21 0 0 1-1.141-1.923V15.174a2.21 2.21 0 0 1 1.142-1.924l17.507-9.827Z"
        fill="#00549D"
      />
      <path
        d="M9.525 35.837c-.277-.37-.316-.722-.316-1.196V15.1c0-.79.434-1.519 1.14-1.912l17.445-9.771c.705-.395 1.66-.387 2.366.008 3.482 1.95 13.928 7.77 17.41 9.72.281.158.496.349.688.6L9.525 35.838Z"
        fill="#0086D4"
      />
      <path
        d="M29 10.417c8.049 0 14.583 6.534 14.583 14.583S37.05 39.583 29 39.583c-8.05 0-14.584-6.534-14.584-14.583S20.951 10.417 29 10.417Zm0 7.291A7.295 7.295 0 0 1 36.29 25 7.296 7.296 0 0 1 29 32.292 7.296 7.296 0 0 1 21.708 25 7.294 7.294 0 0 1 29 17.708Z"
        fill="#fff"
      />
      <path
        d="M48.255 13.755c.538.503.527 1.262.527 1.859 0 3.953-.033 15.197.01 19.15.004.412-.133.846-.337 1.173L28.576 25l19.68-11.245Z"
        fill="#0075C0"
      />
      <path
        d="M36.291 21.875h2.084v6.25H36.29v-6.25Zm7.292 0h2.084v6.25h-2.084v-6.25Z"
        fill="#fff"
      />
      <path
        d="M34.209 23.958h6.25v2.084h-6.25v-2.084Zm7.291 0h6.25v2.084H41.5v-2.084Z"
        fill="#fff"
      />
    </g>
    <defs>
      <filter
        id="c_svg__a"
        x={0}
        y={0}
        width={58}
        height={58}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_212_168" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_212_168"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgC;
