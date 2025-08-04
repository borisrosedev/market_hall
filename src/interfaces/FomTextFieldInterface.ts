export interface FormTextField {
    id: string 
    labelContent: string
    helpId: string
    helpContent: string
    type?: 'email' | 'text' | 'password',
}