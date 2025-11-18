import { Router } from "express"

const router = Router()

router.get("/products", (req, res) => {
    res.json({ message: "Devuelve todos los productos" })
})

router.get("/products/:id", (req, res) => {
    res.json({ message: `Devuelve el producto con id ${req.params.id}` })
})

router.post("/products/create", (req, res) => {
    res.json({ message: "Crea un nuevo producto" })
})

router.delete("/products/:id", (req, res) => {
    res.json({ message: `Elimina el producto con id ${req.params.id}` })
})

export default router
