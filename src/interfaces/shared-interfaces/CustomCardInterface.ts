import { CardBodyLinksListInterface } from "../card-interfaces/CardBodyLinksListInterface";
import type { CardListInterface } from "../card-interfaces/CardListItemsInterface";

export interface CustomCardInterface {
    listItems?: CardListInterface
    listLinks?: CardBodyLinksListInterface
    title?: string 
    name?: string 
    description: string
}