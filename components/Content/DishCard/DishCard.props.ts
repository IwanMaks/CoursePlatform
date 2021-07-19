import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface DishCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    editable?: boolean
}