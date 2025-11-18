const HARDCODED_EMAIL = "test@gmail.com"
const HARDCODED_PASSWORD = "123456"

async function login(email, password) {
    if (email === HARDCODED_EMAIL && password === HARDCODED_PASSWORD) {
        return {
            token: "¡Login exitoso! Acá iría el token JWT.",
        }
    } else {
        const error = new Error("Credenciales inválidas.")
        error.status = 401
        throw error
    }
}

export { login }
