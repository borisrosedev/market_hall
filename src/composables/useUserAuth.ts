import { logout, login, isConnected, setIsConnected } from "../stores/auth-store"
import { setCurrentUser, getCurrentUser, currentUser } from "../stores/user-store"

export const useUserAuth = () => {
   
   
    async function logoutUser(): Promise<boolean>{
        await logout()
        setCurrentUser({})
        return true
        
    }

    async function checkAuth(onNavGuardMode: boolean = false){
        await getCurrentUser()
        if (!(currentUser.value && currentUser.value.id)) {
            return false       
        } 
        setIsConnected(true) 
        return true
    }

    async function loginUser(data: { email: string, password: string }){
        await login(data)
        return isConnected
    }


    return {
        loginUser, logoutUser, checkAuth
    }
}