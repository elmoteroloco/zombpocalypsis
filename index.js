import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import productRoutes from "./src/routes/products.routes.js"
import authRoutes from "./src/routes/auth.routes.js"
import mochilaRoutes from "./src/routes/mochila.routes.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

// Rutas públicas (o que manejan su propia autenticación)
app.use("/api", authRoutes)

// Rutas protegidas
app.use("/api", productRoutes)
app.use("/api", mochilaRoutes)

// Middleware para rutas no encontradas (siempre al final)
app.use((req, res, next) => {
    res.status(404).json({ message: "Recurso no encontrado o ruta inválida" })
})

app.listen(PORT, () => {
    console.log(`Servidor anti-zombies corriendo en http://localhost:${PORT}`)
})
