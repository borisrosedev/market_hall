import { createStore } from "harlem"
import cartService from "../services/cart-service"


const STATE = {
    cart: {} as any,
    lastAction: "none"  as "none" | "addition" | "update" | "deletion" | "error"
}

const { 
    getter, 
    action, 
    mutation, 
    state, 
    ...store
} = createStore("cart", STATE)


export const getCart = getter("get-cart", (state) => state.cart)
export const getLastAction = getter("get-last-action", (state) => state.lastAction)
export const setLastAction = mutation("set-last-action", (state, payload: "none" | "addition" | "update" | "deletion" | "error") => {
    state.lastAction = payload;
});


export const getUserCart = action('get-user-cart', async(_, mutate) => {
    const { cart } = await cartService.getOneCart()
    if (cart){

        console.log("CART", cart)
        mutate(state => {
            state.cart = cart
        })
    } else {
         mutate(state => {
            state.cart = {}
        })
    }
})


export const updateItem = action("update-item", async({ cartId, productId, quantity } : { cartId: number, productId: number, quantity: number }, mutate) => {
    const { message } = await cartService.updateItem(cartId, productId, quantity)
    if(message == "cart item quantity updated") {
        await getUserCart()
        mutate((state) => {
            state.lastAction = "update"
        })
    } else {
        mutate((state) => {
            state.lastAction = "error"
        })
    }
})

export const addItem = action("add-item", async ({ cartId, productId, quantity } : { cartId: number, productId: number, quantity: number }, mutate) => {
    const { message } = await cartService.addItem(cartId, productId, quantity)
    if( message == "cart item added"){
        console.log("message")
        await getUserCart(),
        mutate((state) => {
            state.lastAction = "addition"
        })
    }  else if(message == "cart item quantity updated") {        
        mutate((state) => {
            state.lastAction = "update"
        })
    } else {
        mutate((state) => {
             state.lastAction = "error"
        })
    }
 
})

export const removeItem = action("remote-item", async(payload:any, mutate) => {
    const { message } = await cartService.removeItem(payload.cartId, payload.productId)
    if( message == "cart item deleted"){
        await getUserCart()
        mutate((state) => {
            state.lastAction = "deletion"
        })
 
    }  else {
          mutate((state) => {
            state.lastAction = "error"
        })
    }
 

    
})




