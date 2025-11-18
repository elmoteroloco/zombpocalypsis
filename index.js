import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import productRoutes from "./src/routes/products.routes.js"
import authRoutes from "./src/routes/auth.routes.js"
import { verifyToken } from "./src/middleware/authentication.middleware.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use("/api", authRoutes)

app.use(verifyToken)
app.use("/api", productRoutes)

app.use((req, res, next) => {
    res.status(404).json({ message: "Recurso no encontrado o ruta inválida" })
})

app.listen(PORT, () => {
    console.log(`Servidor anti-zombies corriendo en http://localhost:${PORT}`)
})
