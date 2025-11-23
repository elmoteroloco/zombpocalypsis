import * as MochilaService from "../services/mochila.service.js"

export async function getMochila(req, res) {
    try {
        const userId = req.user.id
        const mochila = await MochilaService.traerMochila(userId)
        res.status(200).json(mochila)
    } catch (error) {
        res.status(500).json({ message: "Error al obtener la mochila del servidor." })
    }
}
