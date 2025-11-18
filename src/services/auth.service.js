import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const HARDCODED_EMAIL = "test@gmail.com"
const HARDCODED_PASSWORD = "123456"

async function login(email, password) {
    if (email === HARDCODED_EMAIL && password === HARDCODED_PASSWORD) {
        const user = { email: email, role: "survivor" }
        const token = jwt.sign(user, process.env.JWT_SECRET_KEY, {
            expiresIn: "1h",
        })
        return {
            token,
        }
    } else {
        const error = new Error("Credenciales inválidas.")
        error.status = 401
        throw error
    }
}

export { login }
