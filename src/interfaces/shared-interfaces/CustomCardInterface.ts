import { CardBodyButtonsListInterface } from "../card-interfaces/CardBodyButtonsListInterface";
import { CardBodyLinksListInterface } from "../card-interfaces/CardBodyLinksListInterface";
import type { CardListItemsInterface } from "../card-interfaces/CardListItemsInterface";

export interface CustomCardInterface {
    description?: string
    listItems?: { content: string }[]
    listLinks?: CardBodyLinksListInterface
    listButtons?: CardBodyButtonsListInterface
    title?: string
    price?: number
    price_cents?: number
    fullname?: string
    alt?: string 
    name?: string 
    url?: string
    src?: string
    bodyClassNames?: string
    bodyTitleClassNames?: string
    bodyPriceCentsClassNames?: string
    bodyDescriptionClassNames?: string
    photo_name?: string
    firstname?: string 
    lastname?: string 
    email?: string
    role?: string
    roleClassNames?: string
    classNames?: string
}

