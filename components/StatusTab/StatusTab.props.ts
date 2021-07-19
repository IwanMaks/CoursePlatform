import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface StatusTabProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    state: 'completed' | 'preparing' | 'pending';
}