import * as ProductService from "../services/products.service.js"

async function getAllProducts(req, res) {
    try {
        const products = await ProductService.findAll()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: "Hubo un error al obtener los productos." })
    }
}

async function getProductById(req, res) {
    const { id } = req.params
    try {
        const product = await ProductService.findById(id)
        if (product) {
            res.status(200).json(product)
        } else {
            res.status(404).json({ message: `No se encontró el producto con id ${id}` })
        }
    } catch (error) {
        res.status(500).json({ message: "Hubo un error al obtener el producto." })
    }
}

async function createProduct(req, res) {
    const productData = req.body
    try {
        const newProduct = await ProductService.create(productData)
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(500).json({ message: "Hubo un error al crear el producto." })
    }
}

async function deleteProduct(req, res) {
    const { id } = req.params
    try {
        const result = await ProductService.remove(id)
        if (result) {
            res.status(200).json({ message: `Producto con id ${id} eliminado correctamente.` })
        } else {
            res.status(404).json({ message: `No se encontró el producto con id ${id}` })
        }
    } catch (error) {
        res.status(500).json({ message: "Hubo un error al eliminar el producto." })
    }
}

async function updateProduct(req, res) {
    const { id } = req.params
    const productData = req.body
    try {
        const updatedProduct = await ProductService.update(id, productData)
        if (updatedProduct) {
            res.status(200).json(updatedProduct)
        } else {
            res.status(404).json({ message: `No se encontró el producto con id ${id}` })
        }
    } catch (error) {
        res.status(500).json({ message: "Hubo un error al actualizar el producto." })
    }
}

export { getAllProducts, getProductById, createProduct, deleteProduct, updateProduct }
