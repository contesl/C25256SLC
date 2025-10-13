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

## 📦 2. Importar la colección en Postman

1. Abre **Postman**.  
2. Haz clic en **Import** (arriba a la izquierda).  
3. Selecciona **Raw text** o **File**, y:
   - Pega el contenido del archivo `.json` de la colección (el que se incluye en este repositorio en el directorio \docs).  
   - O selecciona el archivo exportado desde Postman.  
4. Pulsa **Import**.  

Aparecerá una colección llamada **`app-api-vercel`** con las siguientes requests:

- ✅ `POST Autenticacion`  
- ✅ `GET PRODUCTS`  
- ✅ `POST CREATE PRODUCTS`  
- ✅ `PUT UPDATE PRODUCTS`  
- ✅ `DELETE PRODUCTS`

---

## ⚙️ 3. Configurar las variables del entorno

1. En la esquina superior derecha de Postman, haz clic en el ícono de **⚙️ Environment** → **Add New Environment**.  
2. Crea un environment llamado, por ejemplo, `API Vercel`.
3. Agrega las siguientes variables:

| Variable | Valor inicial | Descripción |
|-----------|----------------|--------------|
| `base_url` | `http://c25256-slc.vercel.app` | URL base de la API |
| `token` | *(vacío)* | Aquí se guardará el JWT automáticamente |

4. Guarda y selecciona el environment (`API Vercel`) en el selector de entornos de Postman.

---

## 🔑 4. Autenticación (obtener token JWT)

1. Abre la request **`POST Autenticacion`**.  
2. En la pestaña **Body**, asegurate de que esté seleccionado **raw → JSON**.  
3. El cuerpo debe tener este contenido:

```json
{ "email": "test@test.com", "password": "1234" }
```

4. En la pestaña **Tests** (debajo del body), pegá este script (solo si no está ya):

```javascript
// Guarda automáticamente el token devuelto por el login
if (pm.response.code === 200) {
  const json = pm.response.json();
  if (json.token) {
    pm.environment.set("token", json.token);
    console.log("Token guardado en environment:", json.token);
  }
}
```

5. Haz clic en **Send**.  
   - Si la autenticación es correcta, obtendrás una respuesta `200 OK` con un `token`.  
   - Postman guardará ese token automáticamente en la variable `token`.

---

## 🔒 5. Agregar el token a las demás requests

Para que las demás peticiones funcionen (productos, creación, actualización, etc.), deben incluir el token JWT.

1. En la colección `app-api-vercel`, haz clic en los tres puntos `⋮` → **Edit**.  
2. Ve a la pestaña **Authorization**.  
3. Configura así:
   - **Type:** `Bearer Token`
   - **Token:** `{{token}}`
4. Guarda los cambios con **Update**.

Ahora todas las requests heredarán el token guardado automáticamente tras el login.

---

## 🧪 6. Probar los endpoints

A continuación, ejecutá cada request en orden:

### 🟢 1. `GET PRODUCTS`
- **Método:** `GET`  
- **URL:** `{{base_url}}/products`  
- **Respuesta esperada:** un array de productos.

---

### 🟡 2. `POST CREATE PRODUCTS`
- **Método:** `POST`  
- **URL:** `{{base_url}}/products`  
- **Body → raw → JSON:**

```json
{
  "price": 3300,
  "name": "Producto Nuevo"
}
```
- **Respuesta esperada:** el producto creado o un mensaje de éxito.

---

### 🟠 3. `PUT UPDATE PRODUCTS`
- **Método:** `PUT`  
- **URL:** `{{base_url}}/products/<ID_DEL_PRODUCTO>`  
  (Reemplazá `<ID_DEL_PRODUCTO>` por un ID válido del listado anterior)
- **Body → raw → JSON:**

```json
{
  "nombre": "Producto actualizado vercel",
  "precio": 5500
}
```
- **Respuesta esperada:** el producto actualizado.

---

### 🔴 4. `DELETE PRODUCTS`
- **Método:** `DELETE`  
- **URL:** `{{base_url}}/products/<ID_DEL_PRODUCTO>`
- **Respuesta esperada:** mensaje de confirmación o status `200 / 204`.

---

## ⚡ 7. Flujo completo sugerido

1. **POST Autenticacion** → obtiene y guarda el token.  
2. **GET PRODUCTS** → lista los productos.  
3. **POST CREATE PRODUCTS** → agrega uno nuevo.  
4. **GET PRODUCTS** → verifica que el producto aparezca.  
5. **PUT UPDATE PRODUCTS** → actualiza un producto existente.  
6. **DELETE PRODUCTS** → elimina un producto.  
7. **GET PRODUCTS** → confirma que ya no esté.

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
