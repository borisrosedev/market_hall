import apiResource from "../data-resources/data-remote-resources/api-resources"


const cartService = {


    async getOneCart() {
       const parsedResponse = await apiResource.get("/carts/me") 
       return parsedResponse
    },

    async addItem(cartId: number, itemId: number, quantity: number = 1) {
       const parsedResponse = await apiResource.get("/carts/"+ cartId + "/items/" + itemId + "?quantity=" + quantity , "GET", "include") 
       return parsedResponse
    },

    async updateItem(cartId: number,itemId: number, quantity: number = 1) {
        const parsedResponse = await apiResource.get("/carts/"+ cartId + "/items/" + itemId + "?quantity=" + quantity, "GET", "include")
        return parsedResponse
    },

    async removeItem(cartId: number, itemId: number) {
        const parsedResponse = await apiResource.get("/carts/"+ cartId + "/items/" + itemId, "DELETE", "include") 
        return parsedResponse
    }
}

export default cartService