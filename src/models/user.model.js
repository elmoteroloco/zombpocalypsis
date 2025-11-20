import { db } from "../config/firebase.config.js"

const usersCollection = db.collection("users")

async function findByEmail(email) {
    try {
        const querySnapshot = await usersCollection.where("email", "==", email).limit(1).get()
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
