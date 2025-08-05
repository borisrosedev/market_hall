export interface CustomButtonInterface {
    type: 'submit'|'button'|'reset'
    content: string
    id?: string 
    classNames?: string
    
}

export type CustomButtonHandlerType = {
    onClick?: () => void
}