import * as MochilaModel from "../models/mochila.model.js"
import * as ProductModel from "../models/products.model.js"

export async function traerMochila(userId) {
    const mochilaData = await MochilaModel.findMochilaByUserId(userId)

    if (!mochilaData || mochilaData.items.length === 0) {
        return {
            message: "Tu mochila está vacía.",
            items: [],
        }
    }

    // ¡Magia! Vamos a enriquecer los datos de la mochila.
    // En lugar de devolver solo IDs, vamos a buscar los detalles de cada producto.
    const itemsEnriquecidos = await Promise.all(
        mochilaData.items.map(async (item) => {
            const producto = await ProductModel.findById(item.productId)
            return {
                ...producto, // Traemos todos los datos del producto
                cantidad: item.cantidad, // Y le agregamos la cantidad que tiene el jugador
            }
        }),
    )

    return {
        message: "Contenido de tu mochila:",
        items: itemsEnriquecidos,
    }
}
