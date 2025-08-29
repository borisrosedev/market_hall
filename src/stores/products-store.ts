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
     console.log("🔵 Début getAllProducts ");
    products.value = await productsService.getAll();
  };

  const getProductByNb = async (nbmax: number) => {
    //console.log("🔵 Début getProductByNb avec nbmax:", nbmax);
    try {
      const result = await productsService.getByNb(nbmax);
      //console.log("🟢 Données reçues du service:", result);

      productsGetterLimited.value = result;
      //console.log("🟡 productsGetterLimited.value après assignation:",productsGetterLimited.value  );
    } catch (error) {
      console.error("🔴 Erreur dans getProductByNb:", error);
    } 
    //productsGetterLimited.value = await productsService.getByNb(nbmax)
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
