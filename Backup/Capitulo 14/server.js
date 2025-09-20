import express from "express";
import productsRoutes from "./src/routes/productsRoutes.js";

const app = express();
app.use(express.json());

// Monta el router en / (porque ya tiene /products dentro)
app.use("/", productsRoutes);

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});


