import styles from './StatusTab.module.css';
import { StatusTabProps } from './StatusTab.props';
import globalTextStyle from '../../styles/Home.module.css'
import cn from 'classnames';

export const StatusTab = ({ state = 'pending', className, ...props }: StatusTabProps): JSX.Element => {
    const stateText = state.charAt(0).toUpperCase() + state.slice(1);
    return (
        <div
            className={cn(styles.statusTab, className, globalTextStyle.body_normal_medium, {
                [styles.pending]: state === 'pending',
                [styles.preparing]: state === 'preparing',
                [styles.completed]: state === 'completed'
            })}
            {...props}
        >
        <p>{stateText}</p>
        </div>
    );
};