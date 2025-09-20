// productsController.js
import productsService from '../services/productsServices.js'; 

export const getAllProducts = async (req, res) => { 
  res.status(200).json(productsService.getAllProducts()); 
}; 

export const getProductById = async (req, res) => { 
  const id = Number(req.params.id); //tengo que convertir porque si no no lo encuentra
  const product = await productsService.getProductById(id); 
  if (product) { 
    res.status(200).json(product); 
  } else { 
    res.status(404).json({ message: 'Producto no encontrado' }); 
  } 
}; 

export const createProduct = async (req, res) => { 
  const { name, price } = req.body; 
  const newProduct = await productsService.createProduct({ name, price }); 
  res.status(201).json(newProduct); 
};

