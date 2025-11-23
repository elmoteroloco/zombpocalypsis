import * as MochilaModel from "../models/mochila.model.js"
import * as ProductModel from "../models/product.model.js"

export async function traerMochila(userId) {
    const mochilaData = await MochilaModel.findMochilaByUserId(userId)

    if (!mochilaData || mochilaData.items.length === 0) {
        return {
            message: "Tu mochila está vacía.",
            items: [],
        }
    }

    const itemsEnriquecidos = await Promise.all(
        mochilaData.items.map(async (item) => {
            const producto = await ProductModel.findById(item.productId)
            return {
                ...producto,
                cantidad: item.cantidad,
            }
        }),
    )

    return {
        message: "Contenido de tu mochila:",
        items: itemsEnriquecidos,
    }
}
