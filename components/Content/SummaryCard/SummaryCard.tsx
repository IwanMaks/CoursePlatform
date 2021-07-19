import {SummaryCardProps} from "./SummaryCard.props";
import styles from './SummaryCard.module.css';
import cn from "classnames";
import {Coin} from "../../Icons/Coin";
import {ArrowUp} from "../../Icons/ArrowUp";

export const SummaryCard = ({className, ...props}: SummaryCardProps): JSX.Element => {
    return (
        <div className={cn(className, styles.wrapper)} {...props}>
            <div className={styles.head}>
                <div className={styles.iconWrap}>
                    <Coin />
                </div>
                <div className={styles.percent}>
                    +13.40%
                </div>
                <div className={styles.up}>
                    <ArrowUp />
                </div>
            </div>
            <div className={styles.total}>
                $10,243.00
            </div>
            <div className={styles.revenue}>
                Total Revenue
            </div>
        </div>
    )
}