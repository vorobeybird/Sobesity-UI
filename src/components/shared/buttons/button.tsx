import { FC } from 'react';
import { ButtonProps } from './button.types';

import './button.css';

const Button: FC<ButtonProps> = ({
  buttonType,
  disabled = false,
  loading = false,
  children,
  otherProps,
}) =>
  loading ? null : (
    <button
      className={buttonType}
      disabled={disabled}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );

export default Button;
