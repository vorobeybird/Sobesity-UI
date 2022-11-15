import { ReactNode } from 'react';

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant: 'primary' | 'primary_dark' | 'secondary' | 'tertiary';
  loading?: boolean;
  disabled?: boolean;
  otherClasses?: string;
  children: ReactNode;
};
