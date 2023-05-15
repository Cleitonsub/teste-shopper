import productModel from '../database/model/productModel.js'

const productsService = {
  getAllProductsService: async () => {
    const products = await productModel.fetchAllData();
    return products;
  },
};

export default productsService;