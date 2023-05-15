import productsService from "../services/productsService.js";

const productsController = {
  getAllProducts: async (_req, res) => {
    const products = await productsService.getAllProductsService();
    return res.status(200).json({ products });
  },
};

export default productsController;
