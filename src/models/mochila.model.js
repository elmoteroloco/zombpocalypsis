import { db } from "../config/firebase.config.js"

export async function findMochilaByUserId(userId) {
    const docRef = db.collection("inventarios").doc(userId)
    const doc = await docRef.get()

    if (!doc.exists) {
        console.log(`No se encontró mochila para el usuario ${userId}, creando una nueva.`)
        const nuevaMochila = { userId, items: [] }
        await db.collection("inventarios").doc(userId).set(nuevaMochila)
        return nuevaMochila
    }

    return doc.data()
}
