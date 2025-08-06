import { CardBodyLinksListInterface } from "../card-interfaces/CardBodyLinksListInterface";
import type { CardListItemsInterface } from "../card-interfaces/CardListItemsInterface";

export interface CustomCardInterface {
    description: string
    listItems?: CardListItemsInterface
    listLinks?: CardBodyLinksListInterface
    title?: string 
    name?: string 
    url?: string
    classNames?: string
}

