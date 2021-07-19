import styles from './OrderRow.module.css';
import { OrderRowProps } from './OrderRow.props';
import globalTextStyle from '../../styles/Home.module.css'
import cn from 'classnames';
import {StatusTab} from "../StatusTab/StatusTab";

export const OrderRow = ({
                             userID,
                             userName,
                             menuOrder,
                             totalPrice,
                             state = 'pending',
                             className, ...props }: OrderRowProps): JSX.Element => {
    return (
        <div
            className={cn(styles.orderRow, className, globalTextStyle.body_normal_regular)}
            {...props}
        >
            <img className={cn(styles.avatar)} src={'./users/user1.png'} />
            <p>{userName}</p>
            <p>{menuOrder}</p>
            <p className={cn(styles.price)}>{totalPrice.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
            })}</p>
            <StatusTab className={cn(styles.statusTab)} state={state}/>
        </div>
    );
};