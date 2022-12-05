import { forwardRef } from 'react';
import { InputProps } from './input.types';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, icon, containerStyles, className, ...props }, ref) => {
    return (
      <div
        className={`inline-flex flex-col items-start ${containerStyles || ''}`}
      >
        <div className="relative flex items-center">
          <input
            ref={ref}
            {...props}
            className={`peer w-full h-[40px] bg-transparent caret-white outline-none placeholder:text-tertiary-dark border-solid border-[1px]
             border-tertiary-dark text-tertiary-dark focus:text-white
             ${error ? 'focus:border-primary' : 'focus:border-white'}
             ${icon ? 'pl-[41px] xl:pl-[53px]' : 'pl-[9px] xl:pl-[16px]'}
             ${className || ''}
  `}
          />
          {icon ? (
            <span
              className={`absolute left-[20.5px] xl:left-[26.5px] xl:scale-150 -translate-x-1/2 fill-tertiary-dark stroke-tertiary-dark pointer-events-none
            ${error ? '' : 'peer-focus:fill-white peer-focus:stroke-white'}`}
            >
              {icon}
            </span>
          ) : null}
        </div>
        {error ? <p className="self-end error-input h-4">{error}</p> : null}
      </div>
    );
  },
);

export default Input;
