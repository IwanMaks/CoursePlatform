import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface OrderRowProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    userID: string,
    userName: string,
    menuOrder: string,
    totalPrice: number,
    state?: 'completed' | 'preparing' | 'pending';
}