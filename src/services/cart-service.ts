import apiResource from "../data-resources/data-remote-resources/api-resources"


const cartService = {


    async getOneCart() {
       const parsedResponse = await apiResource.get("/carts/me") 
       return parsedResponse
    },

    async addItem(data: any) {
       const parsedResponse = await apiResource.send(data,"/cart/items/" , "POST", "include") 
       return parsedResponse
    },

    async updateItem(data:any, itemId: number) {
        const parsedResponse = await apiResource.send(data, "/cart/items/" + itemId, "PUT", "include")
        return parsedResponse
    },

    async removeItem(itemId: number) {
        const parsedResponse = await apiResource.get("/cart/items/" + itemId, "DELETE", "include") 
        return parsedResponse
    }
}

export default cartService