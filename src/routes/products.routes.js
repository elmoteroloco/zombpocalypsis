import { Router } from "express"
import {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct,
} from "../controllers/products.controller.js"
import { validateProduct, validatePartialProduct } from "../middlewares/validation.middleware.js"

const router = Router()

router.get("/products", getAllProducts)
router.get("/products/:id", getProductById)
router.post("/products/create", validateProduct, createProduct)
router.put("/products/edit/:id", validatePartialProduct, updateProduct)
router.patch("/products/edit/:id", validatePartialProduct, updateProduct)
router.delete("/products/:id", deleteProduct)

export default router
