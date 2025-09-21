// src/routes/productsRoutes.js
import express from "express";
import { 
  getAllProducts, 
  getProductById, 
  createProduct,
  deleteProduct,   // 👈 nuevo
  updateProduct    // 👈 nuevo
} from "../controllers/productsController.js";  

const router = express.Router();

// Rutas
router.get("/products", getAllProducts);       // GET todos los productos
router.get("/products/:id", getProductById);   // GET producto por id
router.post("/products", createProduct);       // POST nuevo producto
router.delete("/products/:id", deleteProduct); // DELETE producto por id
router.put("/products/:id", updateProduct);    // PUT actualizar producto por id

export default router;
