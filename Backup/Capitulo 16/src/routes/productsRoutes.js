// src/routes/productsRoutes.js
import express from "express";
import { 
  getAllProducts, 
  getProductById, 
  createProduct,
  deleteProduct,  
  updateProduct    
} from "../controllers/productsController.js";  

const router = express.Router();

// Rutas (ya no incluimos /products, se monta desde server.js)
router.get("/", getAllProducts);          // GET todos los productos → /products
router.get("/:id", getProductById);       // GET producto por id → /products/:id
router.post("/", createProduct);          // POST nuevo producto → /products
router.delete("/:id", deleteProduct);     // DELETE producto por id → /products/:id
router.put("/:id", updateProduct);        // PUT actualizar producto por id → /products/:id

export default router;
