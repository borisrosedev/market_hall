import apiResource from "../data-resources/data-remote-resources/api-resources";

const productsService = {
  async getAll() {
    const { products } = await apiResource.get("/products", "GET", "include");
    return products;
  },

  async getByCategory(category: string) {
    const { products } = await apiResource.get(
      `/products?category=${category}`,
      "GET",
      "include"
    );
    return products;
  },

  async getOneById(id: number) {
    const { product } = await apiResource.get(
      `/products/${id}`,
      "GET",
      "include"
    );
    return product;
  },
  
  async getWithinLimit(limit: number) {
    const { products } = await apiResource.get(
      `/products?limit=${limit}`,
      "GET",
      "include"
    ); 
    return products;
  },
};

export default productsService;
