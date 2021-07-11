import {SearchInputProps} from "./SearchInput.props";
import {SearchIcon} from "../Icons/SearchIcon";
import styles from './SearchInput.module.css';
import cn from "classnames";
import globalTextStyle from "../../styles/Home.module.css";

export const SearchInput = ({className, ...props}: SearchInputProps): JSX.Element => {
    return (
        <div className={cn(styles.search, className)}>
            <div className={styles.svgWrapper}>
                <SearchIcon />
            </div>
            <div>
                <input type="text" className={cn(styles.input, globalTextStyle.body_normal_regular)} {...props}/>
            </div>
        </div>
    )
}