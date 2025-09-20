import express from "express";
import productsRoutes from "./src/routes/productsRoutes.js";

const app = express();
app.use(express.json());

// Ruta raíz
app.get("/", (req, res) => {
  res.send("API de Productos funcionando ✅");
});

// Monta el router en /products
app.use("/products", productsRoutes);

const PORT = process.env.PORT || 3200;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});



