import { SVGProps } from 'react';

interface LoaderProps extends SVGProps<SVGSVGElement> {
  /**
   * What classes are applied to the loader
   */
  className: string;
}

export const Loader = ({
  className = 'animate-spin stroke-white stroke-[5%]',
  ...props
}: LoaderProps) => (
  <svg
    viewBox="0 0 200 200"
    width="4em"
    height="4em"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g stroke="inherit">
      <path opacity="1" d="M 191 70 A 96 96 0 0 1 196 100" />
      <path opacity="0.95" d="M 178 44 A 96 96 0 0 1 191 70" />
      <path opacity="0.90" d="M 156 22 A 96 96 0 0 1 178 44" />
      <path opacity="0.85" d="M 130 9 A 96 96 0 0 1 156 22" />
      <path opacity="0.80" d="M 100 4 A 96 96 0 0 1 130 9" />
      <path opacity="0.75" d="M 70 9 A 96 96 0 0 1 100 4" />
      <path opacity="0.70" d="M 44 22 A 96 96 0 0 1 70 9" />
      <path opacity="0.65" d="M 22 44 A 96 96 0 0 1 44 22" />
      <path opacity="0.60" d="M 9 70 A 96 96 0 0 1 22 44" />
      <path opacity="0.55" d="M 4 100 A 96 96 0 0 1 9 70" />
      <path opacity="0.50" d="M 9 130 A 96 96 0 0 1 4 100" />
      <path opacity="0.45" d="M 22 156 A 96 96 0 0 1 9 130" />
      <path opacity="0.40" d="M 44 178 A 96 96 0 0 1 22 156" />
      <path opacity="0.35" d="M 70 191 A 96 96 0 0 1 44 178" />
      <path opacity="0.30" d="M 100 196 A 96 96 0 0 1 70 191" />
      <path opacity="0.25" d="M 130 191 A 96 96 0 0 1 100 196" />
      <path opacity="0.20" d="M 156 178 A 96 96 0 0 1 130 191" />
      <path opacity="0.15" d="M 178 156 A 96 96 0 0 1 156 178" />
      <path opacity="0.10" d="M 191 130 A 96 96 0 0 1 178 156" />
      <path opacity="0.05" d="M 196 100 A 96 96 0 0 1 191 130" />
    </g>
  </svg>
);
