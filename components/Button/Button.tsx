import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import {PlusIcon} from '../Icons/PlusIcon';
import globalTextStyle from '../../styles/Home.module.css'
import cn from 'classnames';

export const Button = ({ appearance, icon = 'none', minimized = false, children, className, ...props }: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, globalTextStyle.body_normal_semibold, {
                [styles.primary]: appearance == 'primary',
                [styles.ghost]: appearance == 'ghost',
                [styles.minimized]: minimized == true,
            })}
            {...props}
        >
            {icon != 'none' && <span className={cn(styles.icon)}>
				<PlusIcon />
			</span>}
            {children}
        </button>
    );
};