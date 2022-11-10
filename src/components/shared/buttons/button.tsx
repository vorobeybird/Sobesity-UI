import { FC } from 'react';
import { ButtonProps } from './button.types';
import './button.css';

const Button: FC<ButtonProps> = ({
  variant,
  disabled = false,
  children,
  className,
  ...props
}) => (
  <button
    className={`btn btn-${variant} ${className || ''}`}
    disabled={disabled}
    type="button"
    {...props}
  >
    {children}
  </button>
);

export default Button;
