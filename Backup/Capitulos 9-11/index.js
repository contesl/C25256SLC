import express from 'express';
const app = express(); //instancia de la applicacion
//definiendo la respuesta a una ruta
//el primer parametro es la ruta
//el segundo una funcion callback que captura la peticion y entrega una respuesta
app.get('/',(req,res)=>{
    res.send('Hola Mundo desde Express!');
});
app.get('/productos', (req, res) => { 
    res.send('Bienvenid@ a la página de productos'); 
}); 
app.get('/productos/14', (req, res) => { 
    res.send('Estás viendo el producto N° 14.'); 
});
//ahora hay que decirle al servidor el puerte en el que escucha
const PORT = 3000;
app.listen(PORT, () => { 
    console.log(`Server running at http://localhost:${PORT}`);
    });
