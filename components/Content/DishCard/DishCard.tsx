import {DishCardProps} from "./DishCard.props";
import styles from './DishCard.module.css';
import globalTextStyle from '../../../styles/Home.module.css'
import cn from "classnames";
import {EditIcon} from "../../Icons/EditIcon";

export const DishCard = ({editable = false, className, ...props}: DishCardProps): JSX.Element => {
    return (
        <div className={cn({
            [styles.mainWrap]: editable,
            [styles.mainWrapNoEdit]: !editable
        })}>
            <div className={cn(className, {
                [styles.wrapperEdit]: editable,
                [styles.wrapperNoEdit]: !editable,
            })}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="./dish.png" alt="h" className={cn(styles.img, {
                    [styles.imgNoEdit]: !editable
                })}/>
                <div className={cn(globalTextStyle.body_normal_medium, styles.dishName)}>
                    Spicy seasoned seafood noodles
                </div>
                <div className={cn(styles.priceAndCount, {
                    [styles.priceAndCountNoEdit]: !editable
                })}>
                    <div className={cn(globalTextStyle.body_normal_regular,{
                        [styles.price]: editable,
                        [styles.noEditPrice]: !editable,
                    })}>$ 2.29</div>
                    {editable && <div className={styles.dot}/> }
                    <div className={cn(globalTextStyle.body_normal_regular, styles.price)}>
                        {editable ? '20 Bowls' : '20 Bowls available'}
                    </div>
                </div>
            </div>
            {editable &&
                <button className={styles.button}>
                    <EditIcon />
                    <div className={cn(globalTextStyle.body_normal_semibold, styles.edit)}>Edit dish</div>
                </button>
            }
        </div>
    )
}