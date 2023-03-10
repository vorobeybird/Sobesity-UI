import { SVGProps } from 'react';

const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 10.06C20 4.505 15.523 0 10 0S0 4.504 0 10.06c0 5.023 3.656 9.185 8.437 9.94v-7.03H5.9v-2.91h2.538V7.844c0-2.521 1.493-3.915 3.778-3.915 1.093 0 2.238.197 2.238.197v2.476h-1.262c-1.242 0-1.628.776-1.628 1.572v1.887h2.773l-.443 2.908h-2.33V20C16.344 19.245 20 15.083 20 10.06Z"
      fill="#fff"
    />
  </svg>
);
export default SvgFacebook;
