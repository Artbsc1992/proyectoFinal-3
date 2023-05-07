import productModel from "../models/product.models.js";

export default class ProductService {
  constructor() {}

  async insertMany(data) {
    try {
      const productsList = await productModel.insertMany(data);
      return productsList;
    } catch (error) {
      console.log(
        "🚀 ~ file: product.service.js:11 ~ ProductService ~ insertMany ~ error:",
        error
      );
      return null
    }
  }

  async addProduct(userBody) {
    try {
      const newProduct = await productModel.create(userBody);
      return newProduct;
    } catch (error) {
      console.log(
        "🚀 ~ file: product.service.js:13 ~ UserService ~ addProduct ~ error:",
        error
      );
      return null

    }
  }

  async getProducts() {
    try {
      const result = await productModel.find({});
      return result;
    } catch (error) {
      console.log(
        "🚀 ~ file: userManager.js:37 ~ UserManager ~ getUsers ~ r:",
        error
      );
      return null

    }
  }

  async getProductById(productId){
    try {
      const product = await productModel.find({ _id: productId })
      return product
    } catch (error) {
    console.log("🚀 ~ file: product.service.js:47 ~ ProductService ~ getProductById ~ error:", error)
    return null

    }
    
  }

  async deleteProduct(productId){
    try {
      const result = await productModel.deleteOne({ _id: productId })
      return result
    } catch (error) {
    console.log("🚀 ~ file: product.service.js:56 ~ ProductService ~ deleteProduct ~ error:", error)
    return null

    }
  }

  async updateProduct (productId, data){
    try {
      const product = await productModel.updateOne({ _id: productId}, { $set: data })
      return product;
    } catch (error) {
    console.log("🚀 ~ file: product.service.js:66 ~ ProductService ~ updateProduct ~ error:", error)
    return null

    }
  }
}

//module.exports = ProductService;
