import { FC } from 'react';
import { ButtonProps, ButtonVariants } from './button.types';

const Button: FC<ButtonProps> = ({
  variant,
  type,
  disabled = false,
  children,
  className,
  ...props
}) => {
  const styles: ButtonVariants = {
    primary:
      'button-1 border-primary xl:hover:bg-primary-light xl:hover:border-primary-light focus:bg-primary items-center justify-center',
    primaryDark:
      'button-1 bg-primary-dark border-primary-dark xl:hover:bg-primary-light xl:hover:border-primary-light focus:bg-primary-darkest focus:border-primary-darkest items-center justify-center',
    secondary:
      'button-2 border-white xl:hover:bg-secondary-light xl:hover:text-black-dark focus:bg-secondary items-center justify-center',
    tertiary:
      'button-3 border-white xl:hover:bg-secondary-light p-2.5 justify-start items-end xl:hover:text-black-dark focus:bg-secondary',
  };

  return (
    <button
      className={`${
        className || ''
      } box-border inline-flex  border-[1px] disabled:bg-secondary-dark disabled:border-secondary-dark disabled:text-secondary-dark focus:outline-none
     ${variant ? styles[variant] : ''} `}
      disabled={disabled}
      type={type === 'button' ? 'button' : 'submit'}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
