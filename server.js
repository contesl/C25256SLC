import express from "express";
import productsRoutes from "./src/routes/productsRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import { authenticateToken } from "./src/middlewares/authentication.js";

const app = express();
app.use(express.json());

// Rutas públicas
app.use("/", authRoutes);

// Rutas protegidas
app.use("/", authenticateToken, productsRoutes);

app.listen(3200, () => {
  console.log("Servidor en http://localhost:3200");
});



