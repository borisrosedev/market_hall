import { defineStore } from "pinia";
import { computed, ref } from "vue";
import productsService from "../services/products-service";

export const useProductsStore = defineStore("products", () => {
  const products = ref([]);
  const selectedProduct = ref({});
  const selectedCategoryProducts = ref([]);
  const productsGetterLimited = ref([]);

  const productsGetter = computed(() => products.value);

  const getProductsByCategory = async (category: string) => {
    selectedCategoryProducts.value = await productsService.getByCategory(
      category
    );
  };

  const getOneProductById = async (id: number) => {
    selectedProduct.value = await productsService.getOneById(id);
  };

  const getAllProducts = async () => { 
    products.value = await productsService.getAll();
  };
  
  const getProductByNb = async (nbmax: number) => {
      productsGetterLimited.value = await productsService.getWithinLimit(nbmax)
  };
  
  return {
    productsGetter,
    productsGetterLimited,
    getAllProducts,
    getOneProductById,
    getProductsByCategory,
    getProductByNb,
  };
});
