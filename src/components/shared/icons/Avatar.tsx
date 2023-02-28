import { SVGProps } from 'react';

const SvgAvatar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#avatar_svg__a)" fill="#fff">
      <path d="M19.556 15.666a10.963 10.963 0 0 0-16.112 0 .965.965 0 0 0-.25.638v3.834a.958.958 0 0 0 .959.945h14.694a.958.958 0 0 0 .959-.958v-3.833a.965.965 0 0 0-.25-.626ZM11.5 10.861a4.472 4.472 0 1 0 0-8.944 4.472 4.472 0 0 0 0 8.944Z" />
    </g>
    <defs>
      <clipPath id="avatar_svg__a">
        <path fill="#fff" d="M0 0h23v23H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAvatar;
