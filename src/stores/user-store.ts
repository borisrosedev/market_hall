import { createStore } from "harlem"
import userService from "../services/user-service"
 
const STATE = {
    user: {} as any
}

const {
    mutation,
    getter,
    state,
    action,
    ...store

} = createStore("user", STATE)


export const currentUser = getter('user', state => state.user);


export const setCurrentUser = mutation('set-first-name', (state, payload: any) => {
    state.user = payload;//{}
})

export const getCurrentUser = action("get-current-user", async (_, mutate) => {

    const { user }= await userService.me()

    if(user && user.id){
        mutate(state => {
            state.user =  user;
        });
    } else {
        mutate(state => {
                state.user =  {};
        });
    }
    

   


})