import { ReactNode } from 'react';

export enum ButtonStyle {
  PRIMARY = 'primary',
  PRIMARY_DARK = 'primary_dark',
  SECONDARY = 'secondary',
  PLATE = 'tertiary',
}

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant: ButtonStyle;
  loading?: boolean;
  disabled?: boolean;
  otherClasses?: string;
  children: ReactNode;
};
