import { ReactNode } from 'react';

export enum ButtonType {
  PRIMARY = 'button-1',
  SECONDARY = 'button-2',
  PLATE = 'button-3',
}

export enum ButtonStyle {
  PRIMARY = 'button-1',
  SECONDARY = 'button-2',
  PLATE = 'button-3',
}

export interface ButtonProps {
  buttonType: string;
  loading?: boolean;
  disabled?: boolean;
  otherProps?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  children: ReactNode;
}
