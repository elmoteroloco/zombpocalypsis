import { db } from "../services/firebase.js"

// Firestore va a buscar un documento en la colección 'inventarios' cuyo ID sea el userId
export async function findMochilaByUserId(userId) {
    const docRef = db.collection("inventarios").doc(userId)
    const doc = await docRef.get()

    if (!doc.exists) {
        // Si el usuario no tiene mochila, podríamos crear una vacía para él
        console.log(`No se encontró mochila para el usuario ${userId}, creando una nueva.`)
        const nuevaMochila = { userId, items: [] }
        await db.collection("inventarios").doc(userId).set(nuevaMochila)
        return nuevaMochila
    }

    return doc.data()
}
