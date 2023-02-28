import { FC } from 'react';
import Loader from '@/components/shared/loader';
import { ButtonProps, ButtonVariants } from './button.types';

export const Button: FC<ButtonProps> = ({
  variant,
  type,
  loading = false,
  containerStyle = 'w-full h-full inline-block',
  disabled = false,
  className = 'w-full h-full box-border inline-flex border-[1px] disabled:bg-secondary-dark disabled:border-secondary-dark disabled:text-tertiary-light focus:outline-none',
  children,
  ...props
}) => {
  const styles: ButtonVariants = {
    primary:
      'button-1 border-primary hover:bg-primary-light hover:border-primary-light focus:bg-primary items-center justify-center',
    primaryDark:
      'button-1 bg-primary-dark border-primary-dark hover:bg-primary-light hover:border-primary-light focus:bg-primary-darkest focus:border-primary-darkest items-center justify-center',
    secondary:
      'button-2 border-white hover:bg-secondary-light hover:text-black-dark focus:bg-secondary items-center justify-center',
    tertiary:
      'button-3 border-white hover:bg-secondary-light p-2.5 justify-start items-end hover:text-black-dark focus:bg-secondary animate',
  };

  return (
    <div className={containerStyle}>
      {loading ? (
        <Loader className="w-full h-full animate-spin stroke-[5%] stroke-primary" />
      ) : (
        <button
          className={`${className} ${variant ? styles[variant] : ''} `}
          disabled={disabled}
          type={type === 'button' ? 'button' : 'submit'}
          {...props}
        >
          {children}
        </button>
      )}
    </div>
  );
};
