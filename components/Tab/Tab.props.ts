import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TabProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    state: boolean;
    children?: ReactNode;
}