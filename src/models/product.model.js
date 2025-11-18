import { db } from "../config/firebase.config.js"
import { collection, getDocs, getDoc, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore"

const productsCollection = collection(db, "products")

async function findAll() {
    const querySnapshot = await getDocs(productsCollection)
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

async function findById(id) {
    const docRef = doc(db, "products", id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() }
    }
    return null
}

async function create(productData) {
    const docRef = await addDoc(productsCollection, productData)
    return { id: docRef.id, ...productData }
}

async function remove(id) {
    const docRef = doc(db, "products", id)
    await deleteDoc(docRef)
    return true
}

async function update(id, productData) {
    const docRef = doc(db, "products", id)
    await updateDoc(docRef, productData)
    const updatedDoc = await getDoc(docRef)
    return { id: updatedDoc.id, ...updatedDoc.data() }
}

export { findAll, findById, create, remove, update }
