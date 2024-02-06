import crypto from 'crypto'
export class Product {
    constructor (title, description, price, stock, code, thumbnail) {
        this.title = title
        this.description = description
        this.price = price
        this.stock = stock
        this.code = code
        this.thumbnail= thumbnail // <- array []
        this.id = crypto.randomBytes(10).toString("hex")
    }
}