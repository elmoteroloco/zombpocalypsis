import { Router } from "express"
import {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct,
} from "../controllers/products.controller.js"
import { validateProduct, validatePartialProduct } from "../middleware/validation.middleware.js"
import { verifyToken } from "../middleware/authentication.middleware.js"
import { isAdmin } from "../middleware/admin.middleware.js"

const router = Router()

router.get("/products", verifyToken, getAllProducts)
router.get("/products/:id", verifyToken, getProductById)
router.post("/products/create", [verifyToken, isAdmin, validateProduct], createProduct)
router.put("/products/edit/:id", [verifyToken, isAdmin, validatePartialProduct], updateProduct)
router.patch("/products/edit/:id", [verifyToken, isAdmin, validatePartialProduct], updateProduct)
router.delete("/products/:id", [verifyToken, isAdmin], deleteProduct)

export default router
