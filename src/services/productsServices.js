// products.service.js 
import * as productModel from "../models/productsModel.js";  

// Obtener todos los productos
export const getAllProducts = () => { 
  return productModel.getAllProducts(); 
}; 

// Obtener un producto por ID
export const getProductById = async (id) => { 
  return productModel.getProductById(id); 
}; 

// Crear un producto
export const createProduct = async (productData) => { 
  // 👇 acá pasamos el objeto completo { name, price }
  return productModel.saveProduct(productData);  
}; 

// Eliminar un producto
export const deleteProduct = async (id) => { 
  return productModel.deleteProduct(id); 
};

// Actualizar un producto
export const updateProduct = async (id, updatedData) => {
  return productModel.updateProduct(id, updatedData);
};

// 👇 export default con todas las funciones
export default {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct   
};


