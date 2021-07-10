import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: ReactNode;
    appearance: 'primary' | 'ghost';
    icon?: 'plus' | 'none';
    minimized?: true | false;
}