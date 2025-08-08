export interface FormTextFieldInterface {
    id: string 
    labelContent: string
    helpId: string
    helpContent: string
    textarea?: boolean
    placeholder?: string
    type?: 'email' | 'text' | 'password',
    classNames?: string
}