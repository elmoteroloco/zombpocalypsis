const mockProducts = [
    { id: "1", name: "Machete Táctico", stock: 15, price: 80 },
    { id: "2", name: "Kit de Primeros Auxilios Avanzado", stock: 30, price: 120 },
    { id: "3", name: "Ración de Supervivencia (72hs)", stock: 100, price: 50 },
]

async function findAll() {
    return mockProducts
}

async function findById(id) {
    return mockProducts.find((p) => p.id === id)
}

async function create(productData) {
    const newProduct = {
        id: (mockProducts.length + 1).toString(),
        ...productData,
    }
    mockProducts.push(newProduct)
    return newProduct
}

async function remove(id) {
    const index = mockProducts.findIndex((p) => p.id === id)
    if (index !== -1) {
        mockProducts.splice(index, 1)
        return true
    }
    return false
}

export { findAll, findById, create, remove }
