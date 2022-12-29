import { ReactNode } from 'react';

export type ButtonVariants = {
  primary: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
};

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /**
   * What type button
   */
  type: 'submit' | 'button';
  /**
   * What button variant to use
   */
  variant?: keyof ButtonVariants;
  /**
   * What container styles to use
   */
  containerStyle?: string;
  /**
   * Loading state
   */
  loading?: boolean;
  /**
   * Disable state
   */
  disabled?: boolean;
  /**
   * What button styles to use
   */
  className?: string;
  children: ReactNode;
}
