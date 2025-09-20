// productsController.js
import productsService from "../services/productsServices.js"; 

// Obtener todos los productos
export const getAllProducts = async (req, res) => { 
  try {
    const products = await productsService.getAllProducts();  
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 

// Obtener un producto por ID
export const getProductById = async (req, res) => { 
  try {
    const id = req.params.id; // Firestore usa string como ID
    const product = await productsService.getProductById(id); 
    if (product) { 
      res.status(200).json(product); 
    } else { 
      res.status(404).json({ message: "Producto no encontrado" }); 
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 

// Crear un producto nuevo
export const createProduct = async (req, res) => { 
  try {
    const { name, price } = req.body; 
    const newProduct = await productsService.createProduct({ name, price }); 
    res.status(201).json(newProduct); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un producto por ID
export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await productsService.deleteProduct(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un producto por ID
export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body; // { name, price }
    const updatedProduct = await productsService.updateProduct(id, updatedData);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
