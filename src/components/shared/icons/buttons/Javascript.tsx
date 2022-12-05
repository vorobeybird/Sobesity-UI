import * as React from 'react';
import { SVGProps } from 'react';

const SvgJavascript = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#javascript_svg__a)">
      <path d="M.25 37.75V.25h37.5v37.5H.25Z" fill="#FFD600" />
      <path
        d="M24.769 28.32c.72 1.17 1.504 2.293 3.163 2.293 1.394 0 2.125-.693 2.125-1.652 0-1.146-.756-1.554-2.29-2.221l-.84-.359c-2.426-1.029-4.04-2.319-4.04-5.043 0-2.51 1.922-4.42 4.925-4.42 2.139 0 3.675.74 4.784 2.68l-2.62 1.674c-.575-1.03-1.198-1.434-2.164-1.434-.985 0-1.61.621-1.61 1.434 0 1.004.626 1.41 2.069 2.032l.84.359c2.86 1.217 4.472 2.46 4.472 5.257 0 3.012-2.379 4.663-5.573 4.663-3.124 0-4.898-1.567-5.885-3.508l2.644-1.755Zm-12.07.085c.528.944 1.329 1.67 2.481 1.67 1.102 0 1.736-.435 1.736-2.128v-11.03h3.472V28.48c0 3.508-2.034 5.103-5.005 5.103-2.684 0-4.622-1.818-5.411-3.508l2.728-1.67Z"
        fill="#000001"
      />
    </g>
    <defs>
      <clipPath id="javascript_svg__a">
        <path fill="#fff" d="M0 0h38v38H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgJavascript;
