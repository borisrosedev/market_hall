import userService from "../services/user-service"
import { currentUser, getCurrentUser } from "../stores/user-store"

/**
 * Handle Data Formatting For Services or Stores
 * @returns object - { toJson, toMultipart}
 */
export const useFormService = () => {

    async function toMultipart(data: any, service: string, method: 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'GET' = 'POST'){
        const form = new FormData()
        Object.entries(data).forEach(([k,v]) => {
            form.append(k, v as any)
        })

        switch(service){
            case 'user':
                switch(method){
                    case 'PUT':
                    case 'PATCH':
                        const { message } = await userService.update(form,currentUser.value.id, false) 
                        if( message && message == 'user updated') {
                            console.log('[userFormService] user updated -> getCurrentUser')
                            await getCurrentUser()
                        }
                    break;
                    default:
                        console.log('[userFormService] error')
                }
            break;
            default:
                console.log('[userFormService] error')
        }
      
      
       
    }


    async function toJson(data:any, service: string, method: 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'GET' = 'POST') {

        
        switch(service){
            case 'user':
                switch(method){
                    case 'PUT':
                    case 'PATCH':
                        const { message } = await userService.update(data,currentUser.value.id) 
                        if( message && message == 'user updated') {
                            console.log('[userFormService] user updated -> getCurrentUser')
                            await getCurrentUser()
                        }
                    break;
                    default:
                        console.log('[userFormService] error')
                }
            break;
            default:
                console.log('[userFormService] error')
        }
    }


    return {
        toJson, toMultipart
    }
}