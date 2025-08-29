import { ref } from "vue"


// This is a composable 
// We do not need to create a store for a state that only concerns order pages
// So this is only made for order pages , 
// no existence of anything Once you navigate out of order pages
export const userOrderService = () => {

    const orderProgress = ref("25%")

    

    return {

    }
}