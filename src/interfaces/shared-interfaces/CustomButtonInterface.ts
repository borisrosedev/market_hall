export interface CustomButtonInterface {
    content: string
    type?: 'submit'|'button'|'reset'
    id?: string 
    classNames?: string
    
}

export type CustomButtonHandlerType = {
    onClick?: () => void
}