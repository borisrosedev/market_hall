import {  defineStore } from "pinia"
import { ref } from "vue"
import productsService from "../services/products-service";

export const useProductsStore = defineStore('products', () => {
  
  const products = ref([])
  const selectedProduct = ref({})
  const selectedCategoryProducts = ref([]);

  const getProductsByCategory = async(category: string) => {
    selectedCategoryProducts.value = await productsService.getByCategory(category)
  }

  const getOneProductById = async(id: number) => {
    selectedProduct.value = await productsService.getOneById(id)
  }

  const getAllProducts = async() => {
    products.value = await productsService.getAll()
  }
  

  return { products, getAllProducts, getOneProductById, getProductsByCategory }
})