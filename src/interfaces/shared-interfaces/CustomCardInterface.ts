import { CardBodyLinksListInterface } from "../card-interfaces/CardBodyLinksListInterface";
import type { CardListItemsInterface } from "../card-interfaces/CardListItemsInterface";

export interface CustomCardInterface {
  listItems?: CardListItemsInterface;
  listLinks?: CardBodyLinksListInterface;
  title?: string;
  name?: string;
  description: string;
}
