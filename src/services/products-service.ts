import apiResource from "../data-resources/data-remote-resources/api-resources";

const productsService = {
  async getAll() {
    //console.log("🔵 Service getAll appelé  ");
    const { products } = await apiResource.get("/products", "GET", "include");
    //console.log("🟢 Produits récupérés de l'API:", products);
    //console.log("🟢 Nombre total de produits:", products?.length);
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

  async getByNb(nbmax: number) {
    //const { products } = await apiResource.get(`/products?limit=${nbmax}`, "GET", "include");
    //return products.slice(0, nbmax);
    console.log("🔵 Service getByNb appelé avec nbmax:", nbmax);

    try {
      const { products } = await apiResource.get("/products", "GET", "include");

      console.log("🟢 Produits récupérés de l'API:", products);
      console.log("🟢 Nombre total de produits:", products?.length);

      const limitedProducts = products.slice(0, nbmax);
      console.log("🟡 Produits limités retournés:", limitedProducts);
      console.log("🟡 Nombre de produits retournés:", limitedProducts?.length);

      return limitedProducts;
    } catch (error) {
      console.error("🔴 Erreur dans le service:", error);
      throw error;
    }

    //const { products } = await apiResource.get(`/products`, "GET", "include") ;
    //return products;
  },
};

export default productsService;
