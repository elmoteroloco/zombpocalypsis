import { Router } from "express"
import { verifyToken } from "../middlewares/auth.middleware.js"
import { getMochila } from "../controllers/mochila.controller.js"

const router = Router()

// Ruta para obtener el contenido de la mochila del usuario logueado
router.get("/mochila", verifyToken, getMochila)

export default router
