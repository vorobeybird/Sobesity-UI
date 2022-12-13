import { ReactNode } from 'react';

export type ButtonVariants = {
  primary: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
};

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  type: 'submit' | 'button';
  variant?: keyof ButtonVariants;
  loading?: boolean;
  disabled?: boolean;
  otherClasses?: string;
  children: ReactNode;
};
