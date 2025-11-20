import { Router } from "express"
import {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct,
} from "../controllers/products.controller.js"

const router = Router()

router.get("/products", getAllProducts)
router.get("/products/:id", getProductById)
router.post("/products/create", createProduct)
router.put("/products/edit/:id", updateProduct)
router.delete("/products/:id", deleteProduct)

export default router
