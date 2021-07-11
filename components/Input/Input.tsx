import {InputProps} from "./Input.props";
import styles from './Input.module.css';
import globalTextStyle from '../../styles/Home.module.css'
import cn from 'classnames'

export const Input = ({className, ...props}: InputProps): JSX.Element => {
    return (
        <input
            className={cn(className, styles.input, globalTextStyle.body_normal_regular)}
            {...props}
        />
    )
}