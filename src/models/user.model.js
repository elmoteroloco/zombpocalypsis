import { db } from "../config/firebase.config.js"
import { collection, query, where, getDocs } from "firebase/firestore"

const usersCollection = collection(db, "users")

async function findByEmail(email) {
    try {
        const q = query(usersCollection, where("email", "==", email))
        const querySnapshot = await getDocs(q)
        if (querySnapshot.empty) {
            return null
        }
        const userDoc = querySnapshot.docs[0]
        return {
            id: userDoc.id,
            ...userDoc.data(),
        }
    } catch (error) {
        console.error("Error al buscar usuario por email:", error)
        throw new Error("Error en la base de datos al buscar el usuario.")
    }
}

export { findByEmail }
