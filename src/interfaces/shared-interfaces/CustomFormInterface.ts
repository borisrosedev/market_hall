import type { CustomButtonInterface } from "./CustomButtonInterface"
import type { CustomMessageInterface } from "./CustomMessageInterface"

export interface CustomFormInterface {
    fields: any[],
    buttons: CustomButtonInterface[]
    messages: CustomMessageInterface[]
    id?: string 
    classNames?: string
    showButtons?: boolean
    
}

export type CustomFormHandlersType = {
    onSubmit?: () => void
    onReset?: () => void
}