import { forwardRef } from 'react';
import { InputProps } from './input.types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      error,
      icon,
      containerStyles = 'w-full h-full',
      className = 'peer w-full h-full bg-transparent caret-white outline-none placeholder:text-tertiary-dark border-solid border-[1px] text-white focus:border-white',
      ...props
    },
    ref,
  ) => {
    return (
      <div className={`relative items-center inline-flex ${containerStyles}`}>
        <input
          ref={ref}
          {...props}
          className={`${className}
           ${error ? 'border-primary' : 'border-tertiary-dark'}
           ${icon ? 'pl-[41px] xl:pl-[53px]' : 'pl-[9px] xl:pl-[16px]'}

  `}
        />
        {icon ? (
          <span
            className={`absolute left-[20.5px] xl:left-[26.5px] xl:scale-150 -translate-x-1/2 fill-tertiary-dark stroke-tertiary-dark 
              peer-focus:fill-tertiary peer-focus:stroke-tertiary pointer-events-none`}
          >
            {icon}
          </span>
        ) : null}
        {error ? (
          <p className="absolute bottom-0 right-0 translate-y-full error-input">
            {error}
          </p>
        ) : null}
      </div>
    );
  },
);
