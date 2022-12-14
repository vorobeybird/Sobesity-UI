import * as React from 'react';
import { SVGProps } from 'react';

const SvgLock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 17 22"
    fill="inherit"
    stroke="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.127 16.92a2.032 2.032 0 1 0 0-4.063 2.032 2.032 0 0 0 0 4.064Zm6.095-9.142a2.032 2.032 0 0 1 2.032 2.032v10.158A2.032 2.032 0 0 1 14.222 22H2.032A2.031 2.031 0 0 1 0 19.968V9.81c0-1.128.914-2.032 2.032-2.032h1.016V5.746a5.08 5.08 0 0 1 10.158 0v2.032h1.016Zm-6.095-5.08a3.048 3.048 0 0 0-3.048 3.048v2.032h6.096V5.746a3.048 3.048 0 0 0-3.048-3.048Z"
      fill="inherit"
    />
  </svg>
);
export default SvgLock;
