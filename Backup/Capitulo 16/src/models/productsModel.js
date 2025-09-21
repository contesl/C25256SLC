// products.model.js 
import { db } from "../data/data.js"; 
import { COLLECTIONS } from "../config/collections.js";
import { 
  collection, 
  getDocs, 
  getDoc, 
  addDoc, 
  deleteDoc, 
  doc,
  updateDoc // 👈 importamos updateDoc
} from "firebase/firestore"; 

const productsCollection = collection(db, COLLECTIONS.PRODUCTS);

// Método para buscar un producto por su ID
export async function getProductById(id) { 
  const productDoc = await getDoc(doc(productsCollection, id)); 
  if (productDoc.exists()) { 
    return { id: productDoc.id, ...productDoc.data() }; 
  } else { 
    return null; 
  } 
} 

// Método para obtener todos los productos 
export async function getAllProducts() { 
  const querySnapshot = await getDocs(productsCollection); 
  const products = []; 
  querySnapshot.forEach((docSnap) => { 
    products.push({ id: docSnap.id, ...docSnap.data() }); 
  }); 
  return products; 
} 

// Método para guardar un producto en Firestore 
export async function saveProduct(product) { 
  const docRef = await addDoc(productsCollection, product);
  return { id: docRef.id, ...product }; 
} 

// Método para eliminar un producto por su ID 
export async function deleteProduct(id) { 
  await deleteDoc(doc(productsCollection, id)); 
  return { message: `Producto ${id} eliminado` }; 
} 

// Método para actualizar un producto por su ID 
export async function updateProduct(id, updatedData) { 
  const productRef = doc(productsCollection, id);
  await updateDoc(productRef, updatedData); 
  return { id, ...updatedData }; // 👈 devolvemos el objeto actualizado
}
