console.log("Hola desde Node JS");
const user = { name: 'Jhon', lastName: 'Doe', age: 27, address: 'Fake street 123', isMarried: false, sayHi: () => console.log('Hi there, buddy') };
console.log(user);
console.log(user.sayHi())
/*
Hola desde Node JS
{
  name: 'Jhon',
  lastName: 'Doe',
  age: 27,
  address: 'Fake street 123',
  isMarried: false,
  sayHi: [Function: sayHi]
}
Hi there, buddy
undefined
*/
import { fileURLToPath } from 'url'; 
import path from 'path'; // Obtener el directorio actual 
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 
console.log('Ruta absoluta:', __dirname);