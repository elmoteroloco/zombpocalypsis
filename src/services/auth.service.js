import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import bcrypt from "bcryptjs"
import * as UserModel from "../models/user.model.js"

dotenv.config()

async function login(email, password) {
    const user = await UserModel.findByEmail(email)

    if (!user) {
        const error = new Error("Credenciales inválidas.")
        error.status = 401
        throw error
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if (isPasswordCorrect) {
        const userPayload = {
            id: user.id,
            email: user.email,
            role: user.role,
        }
        const token = jwt.sign(userPayload, process.env.JWT_SECRET_KEY, {
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
