import { SVGProps } from 'react';

const SvgHtml = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 50 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M42.708 5.208H7.292l3.124 35.417L25 44.792l14.583-4.167 3.125-35.417Z"
      fill="#E65100"
    />
    <path d="M25 8.333v33.23l11.667-3.334L39.27 8.333H25Z" fill="#FF6D00" />
    <path
      d="M25 26.042v-4.167h8.958l-.729 11.98L25 36.562v-4.376l4.27-1.458.313-4.687H25Zm9.27-8.334.313-4.166H25v4.166h9.27Z"
      fill="#fff"
    />
    <path
      d="M25 32.188v4.374l-8.229-2.708-.417-5.729h4.167l.208 2.604L25 32.188Zm-5.104-14.48H25v-4.166h-9.479l.73 12.5H25v-4.167h-4.793l-.312-4.167Z"
      fill="#EEE"
    />
  </svg>
);
export default SvgHtml;
