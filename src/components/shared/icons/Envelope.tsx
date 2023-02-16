import { SVGProps } from 'react';

const SvgEnvelope = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 23 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.838 1 14.03 8.69h-.01l-2.249 2.22a.497.497 0 0 1-.702 0L1 1h20.838ZM21.838 16.484l-6.098-6.116M7.109 10.355 1 16.484"
      stroke="inherit"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.838 3.58v12.904H1V3.58"
      stroke="inherit"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgEnvelope;
