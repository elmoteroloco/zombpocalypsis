import * as ProductModel from "../models/product.model.js"

async function findAll() {
    return ProductModel.findAll()
}

async function findById(id) {
    return ProductModel.findById(id)
}

async function create(productData) {
    return ProductModel.create(productData)
}

async function remove(id) {
    return ProductModel.remove(id)
}

async function update(id, productData) {
    return ProductModel.update(id, productData)
}

export { findAll, findById, create, remove, update }
