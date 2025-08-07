import { CustomButtonHandlerType, CustomButtonInterface } from "../shared-interfaces/CustomButtonInterface";

export interface CardBodyButtonsListInterface  {
    listButtons: (CustomButtonInterface & Required<CustomButtonHandlerType>)[]
}