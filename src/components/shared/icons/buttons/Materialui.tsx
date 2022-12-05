import * as React from 'react';
import { SVGProps } from 'react';

const SvgMaterialui = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m1.042 5.208 6.25 4.167v20.833l-6.25-4.166V5.208Z"
      fill="#29B6F6"
    />
    <path
      d="M48.959 20.833 42.709 25v13.542l6.25-4.167V20.833ZM48.959 6.25l-6.25 4.167v7.291l6.25-4.166V6.25ZM36.459 5.208l-6.25 4.167v20.833l6.25-4.166V5.208Z"
      fill="#0288D1"
    />
    <path d="M1.042 12.5 18.75 23.958v-7.291L1.04 5.208V12.5Z" fill="#29B6F6" />
    <path
      d="M36.458 12.5 18.75 23.958v-7.291L36.458 5.208V12.5ZM36.458 27.083 18.75 38.542V31.25l17.708-11.458v7.291ZM48.958 35.417 31.25 46.875v-7.292l17.708-11.458v7.292Z"
      fill="#0288D1"
    />
    <path d="m31.25 39.339-12.5-8.089v7.292l12.5 8.088V39.34Z" fill="#29B6F6" />
  </svg>
);
export default SvgMaterialui;
