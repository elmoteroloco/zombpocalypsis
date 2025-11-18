import * as AuthService from "../services/auth.service.js"

async function login(req, res) {
    const { email, password } = req.body

    try {
        const result = await AuthService.login(email, password)
        res.status(200).json(result)
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message })
    }
}

export { login }
