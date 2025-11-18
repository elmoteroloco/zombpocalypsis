import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

function verifyToken(req, res, next) {
    const authHeader = req.headers["authorization"]

    if (!authHeader) {
        return res.status(401).json({ message: "Acceso no autorizado. Se requiere token." })
    }

    const token = authHeader.split(" ")[1]

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Token inválido o expirado." })
        }
        req.user = user
        next()
    })
}

export { verifyToken }
