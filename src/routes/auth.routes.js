import { Router } from "express"

const router = Router()

router.post("/login", (req, res) => {
    res.json({ message: "Usuario logueado, acá iría el token" })
})

export default router
