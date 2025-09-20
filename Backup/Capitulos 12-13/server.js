import express from 'express'; 
import cors from 'cors'; 
import productsRouter from './src/routes/productsRoutes.js';
//import usersRouter from './src/routes/usersRoutes.js';

const app = express(); // Configuración básica: Permitir todos los orígenes 
app.use(express.json()); // para parsear JSON en POST
app.use(cors()); 

// Aquí irían las rutas 
app.use('/', productsRouter); 
//app.use('/api', usersRouter);

// Middleware para manejar errores 404 
app.use((req, res, next) => { 
    res.status(404).send('Recurso no encontrado'); 
}); 

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
