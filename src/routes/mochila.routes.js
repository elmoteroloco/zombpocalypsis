import { Router } from "express"
import { verifyToken } from "../middleware/authentication.middleware.js"
import { getMochila } from "../controllers/mochila.controller.js"

const router = Router()

router.get("/mochila", verifyToken, getMochila)

export default router
