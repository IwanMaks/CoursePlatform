import {InputProps} from "./Input.props";
import styles from './Input.module.css';
import globalTextStyle from '../../styles/Home.module.css'
import cn from 'classnames'

export const Input = ({className, ...props}: InputProps): JSX.Element => {
    return (
        <div className={cn(className, styles.inputWrapper)}>
            <input
                className={cn(styles.input, globalTextStyle.body_normal_regular)}
                {...props}
            />
        </div>
    )
}