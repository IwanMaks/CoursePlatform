import {DropdownProps} from "./Dropdown.props";
import styles from './Dropdown.module.css';
import {useState} from "react";
import {DropdownIcon} from "../Icons/DropdownIcon";
import globalTextStyle from '../../styles/Home.module.css'
import cn from "classnames";

interface DropdownList {
    id: string,
    title: string,
    selected: boolean,
    key: string
}


export const Dropdown = ({className, ...props}: DropdownProps): JSX.Element => {
    const [isListOpen, setIsListOpen] = useState<boolean>(false)
    const [headerTitle, setHeaderTitle] = useState<string>('Dine In')
    const list: DropdownList[] = [
        {
            id: 'A0',
            title: 'Dine In',
            selected: true,
            key: 'list'
        },
        {
            id: 'A1',
            title: 'To Go',
            selected: false,
            key: 'list'
        },
        {
            id: 'A2',
            title: 'Delivery',
            selected: false,
            key: 'list'
        },
    ]

    const toggleList = () => {
        setIsListOpen(prevState => !prevState)
    }

    const selectItem = (item: DropdownList) => {
        const { title } = item;

        setHeaderTitle(title)
        setIsListOpen(false)
    }

    return (
        <div className={styles.ddWrapper}>
            <button
                type="button"
                className={styles.header}
                onClick={toggleList}
            >
                <div className={cn(styles.iconWrapper, {
                    [styles.listOpen]: isListOpen
                })}>
                    <DropdownIcon />
                </div>
                <div className={cn(globalTextStyle.body_normal_medium, styles.headerTitle)}>{headerTitle}</div>
            </button>
            {isListOpen && (
                <div
                    role="list"
                    className={styles.list}
                >
                    {list.map((item) => (
                        <button
                            type="button"
                            className={styles.listItem}
                            key={item.id}
                            onClick={() => selectItem(item)}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}