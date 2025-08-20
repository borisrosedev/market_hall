import { createStore } from "harlem"
import cartService from "../services/cart-service"


const STATE = {
    cart: {} as any
}

const { 
    getter, 
    action, 
    mutation, 
    state, 
    ...store
} = createStore("cart", STATE)


export const getCart = getter("get-cart", (state) => state.cart)

export const getUserCart = action('get-user-cart', async(_, mutate) => {
    const { cart } = await cartService.getOneCart()
    if (cart){
        mutate(state => {
            state.cart = cart
        })
    } else {
         mutate(state => {
            state.cart = {}
        })
    }
})


export const updateItem = action("update-item", async({ data, itemId } : { data: any, itemId: number }, _) => {
    const { message } = await cartService.updateItem(data, itemId)
    if(message == "item updated") {
        await getUserCart()
    }
})

export const addItem = action("add-item", async (payload: any, _) => {
    const { message } = await cartService.addItem(payload)
    if( message == "item added"){
        await getUserCart()
    }
})

export const removeItem = action("remote-item", async(id:any, _) => {
    const { message } = await cartService.removeItem(id)
    if( message == "item removed"){
        await getUserCart()
    }
})




