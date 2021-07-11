import styles from './Tab.module.css';
import { TabProps } from './Tab.props';
import globalTextStyle from '../../styles/Home.module.css'
import cn from 'classnames';

export const Tab = ({ state = false, className, children, ...props }: TabProps): JSX.Element => {
    return (
        <div
            className={cn(styles.tab, className, globalTextStyle.body_normal_semibold, {
                [styles.active]: state
            })}
            {...props}
        >
            {children}
        </div>
    );
};