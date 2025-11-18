import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.status(404).json({ message: "Recurso no encontrado o ruta inválida" })
})

app.listen(PORT, () => {
    console.log(`Servidor anti-zombies corriendo en http://localhost:${PORT}`)
})
