[INSTRUCTIVO-POSTMAN.md](https://github.com/user-attachments/files/22893802/INSTRUCTIVO-POSTMAN.md)
# 🧭 Instructivo para probar la API con Postman

Este instructivo explica paso a paso cómo probar la API Node.js desplegada en Vercel utilizando **Postman**.

---

## 🚀 1. Requisitos previos

- Tener **Postman** instalado  
  👉 [Descargar Postman](https://www.postman.com/downloads/)
- Conexión a Internet
- URL base de la API:  
  ```
  http://c25256-slc.vercel.app
  ```

> 💡 Si querés probar localmente, reemplazá la URL base por:
> ```
> http://localhost:3000
> ```
> cuando tengas el servidor corriendo en tu máquina.

---

📦 2. Importar la colección en Postman
1.	Asegurate de estar en Collections (arriba a la izquierda)
2.	Haz clic en Import 
3.	Pega el contenido del archivo .json de la colección que se incluye en este repositorio en el directorio \docs).
llamado
   
                  C25256SLC-app-api-vercel.postman_collection.json
  	

Aparecerá una colección llamada app-api-vercel con las siguientes requests:

•	✅ POST Autenticacion

•	✅ GET PRODUCTS

•	✅ POST CREATE PRODUCTS

•	✅ PUT UPDATE PRODUCTS

•	✅ DELETE PRODUCTS



---

⚙️ 3. Configurar las variables del entorno
1.	Asegurate de estar en Environments (arriba a la izquierda)
2.	Haz clic en Import 
3.	Pega el contenido del archivo .json del ambiente que se incluye en el directorio \docs) llamado
   
                  C25256SLC-API_Vercel.postman_environment.json
  	
Aparecerá en Environment API_Vercel conteniendo las variables base_url y token.

---

🔑 4. Autenticación (obtener token JWT)
1.	Seleccionar app_api_vercel en Collections.
2.	Abre la request POST Autenticacion
3.	Asegurate de que esté seleccionado el Environment API_Vercel.
4.	Haz clic en Send.
   
    o	Si la autenticación es correcta, obtendrás una respuesta 200 OK con un token.
  	
    o	Postman guardará ese token automáticamente en la variable token.

---

🧪 5. Probar los endpoints
A continuación, ejecutá cada request en orden:

🟢 1. GET PRODUCTS

•	Método: GET

•	URL: {{base_url}}/products

•	Debe devolver un array de productos.


🟡 2. POST CREATE PRODUCTS

•	Método: POST

•	URL: {{base_url}}/products

•	Body → raw → JSON debe contender este formato:

        {
          "price": 3300,
          "name": "Producto Nuevo"
        }
        
•	Debe responder con el producto creado o un mensaje de éxito.

🟠 3. PUT UPDATE PRODUCTS

•	Método: PUT

•	URL: {{base_url}}/products/<ID_DEL_PRODUCTO>

      (Reemplazá <ID_DEL_PRODUCTO> con los datos de body)
      
•	Body → raw → JSON debe contener este formato:

      {
        "nombre": "Producto actualizado vercel",
        "precio": 5500
      }
      
•	Debe devolver el producto actualizado.

🔴 4. DELETE PRODUCTS

•	Método: DELETE

•	URL: {{base_url}}/products/<ID_DEL_PRODUCTO>

      (Eliminará el  <ID_DEL_PRODUCTO> que se provee)
      
•	Elimina el producto indicado (revisa la respuesta o status 200/204).

________________________________________
⚡ 7. Flujo completo sugerido
1.	POST Autenticacion → obtiene y guarda el token.
2.	GET PRODUCTS → lista los productos.
3.	POST CREATE PRODUCTS → agrega uno nuevo.
4.	GET PRODUCTS → verifica que el producto aparezca.
5.	PUT UPDATE PRODUCTS → actualiza un producto existente.
6.	DELETE PRODUCTS → elimina un producto.
7.	GET PRODUCTS → confirma que ya no esté.
________________________________________

---

## 🧩 8. Prueba local (opcional)

Si querés probarlo en tu máquina:

1. Cloná el proyecto.  
2. Ejecutá:
   ```bash
   npm install
   npm start
   ```
3. Asegurate de tener el `.env` con tu `SECRET_KEY` y la configuración Firebase.  
4. En Postman, cambiá `base_url` → `http://localhost:3000`.  
5. Ejecutá las mismas pruebas que antes.

---

## 🪄 9. Posibles errores y soluciones

| Error | Posible causa | Solución |
|-------|----------------|-----------|
| **403 Forbidden** | Falta el token o está vencido | Repetí el paso de login |
| **500 Internal Server Error** | Variables `.env` faltantes o error en servidor | Revisá logs en consola o en Vercel |
| **404 Not Found** | ID inexistente o ruta incorrecta | Verificá el ID o la ruta usada |
| **CORS Error** | CORS no habilitado (solo desde frontend) | No aplica en Postman |

---

## ✅ 10. Confirmación de instalación correcta

Sabés que la API funciona correctamente si:
- Podés hacer login y obtener un JWT válido.  
- `GET /products` devuelve un listado JSON.  
- Podés crear, modificar y eliminar productos sin errores.

---

📘 **Autor:** Sergio  
🧩 **Stack:** Node.js + Express + Firebase Firestore + JWT  
☁️ **Deploy:** [Vercel](https://vercel.com)
