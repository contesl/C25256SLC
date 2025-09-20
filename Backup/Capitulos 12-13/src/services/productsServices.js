// products.service.js 
import * as productService from "../models/productsModel.js"; 
export const getAllProducts = () => { 
  return productService.getAllProducts(); 
}; 
export const getProductById = async (id) => { 
  return productService.getProductById(id); 
}; 
export const createProduct = async (productData) => { 
  const { name, price } = productData;
  return productService.saveProduct(name, price); 
}; 
export const deleteProduct = async (id) => { 
  return productService.deleteProduct(id); 
};

// 👇 ahora sí hay un default export
export default {
  getAllProducts,
  getProductById,
  createProduct
};



