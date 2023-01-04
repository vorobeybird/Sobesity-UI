import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Is there an error?
   */
  error?: string;
  /**
   * Is there an icon?
   */
  icon?: ReactNode;
  /**
   * What container styles to use
   */
  containerStyles?: string;
  /**
   * What container styles to use
   */
  placeholder?: string;
  /**
   * What classes are applied to the input
   */
  className?: string;
}
