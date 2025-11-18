import { Router } from "express"
import { getAllProducts, getProductById, createProduct, deleteProduct } from "../controllers/products.controller.js"

const router = Router()

router.get("/products", getAllProducts)
router.get("/products/:id", getProductById)
router.post("/products", createProduct) // Cambiado de /create a solo /
router.post("/products/create", createProduct)
router.delete("/products/:id", deleteProduct)

export default router
