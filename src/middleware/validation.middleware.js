// e:\%_TPF_NODE_%\zombpocalypsis\src\middlewares\validation.middleware.js

function validateProduct(req, res, next) {
    const { name, price, stock, category } = req.body
    const errors = []

    if (!name || typeof name !== "string") {
        errors.push("El campo 'name' es obligatorio y debe ser una cadena de texto.")
    }

    if (price === undefined || typeof price !== "number" || price < 0) {
        errors.push("El campo 'price' es obligatorio y debe ser un número positivo.")
    }

    if (stock === undefined || typeof stock !== "number" || !Number.isInteger(stock) || stock < 0) {
        errors.push("El campo 'stock' es obligatorio y debe ser un número entero positivo.")
    }

    if (!category || typeof category !== "string") {
        errors.push("El campo 'category' es obligatorio y debe ser una cadena de texto.")
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors })
    }

    next()
}

function validatePartialProduct(req, res, next) {
    const { name, price, stock, category } = req.body
    const errors = []

    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({ errors: ["El cuerpo de la petición no puede estar vacío."] })
    }

    if (name !== undefined && typeof name !== "string") {
        errors.push("El campo 'name' debe ser una cadena de texto.")
    }

    if (price !== undefined && (typeof price !== "number" || price < 0)) {
        errors.push("El campo 'price' debe ser un número positivo.")
    }

    if (stock !== undefined && (typeof stock !== "number" || !Number.isInteger(stock) || stock < 0)) {
        errors.push("El campo 'stock' debe ser un número entero positivo.")
    }

    if (category !== undefined && typeof category !== "string") {
        errors.push("El campo 'category' debe ser una cadena de texto.")
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors })
    }

    next()
}

export { validateProduct, validatePartialProduct }
