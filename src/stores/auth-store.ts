import { createStore } from "harlem"
import authService from "../services/auth-service"

const STATE = {
    isConnected: false,
}


export const {
    state, 
    getter,
    mutation,
    action,
    ...store
} = createStore('auth', STATE);


export const setIsConnected = mutation('set-is-connected', (state, payload: boolean) => {
    
    state.isConnected = payload;
});



export const login = action('login', async (data: { email: string, password: string }, mutate) => {
    
    const { message } = await authService.login(data)

    if(message && message == "session started") {
        mutate(state => {
                state.isConnected =  true;
        });
    } else {
        mutate(state => {
                state.isConnected =  false;
        });
    }
});


export const logout = action("logout", async (_, mutate) => {
    const { message } = await authService.logout()
    if(message && message == "session end") {
        mutate(state => {
                state.isConnected =  false;
        });
    } else {
        mutate(state => {
                state.isConnected =  true;
        });
    }
})