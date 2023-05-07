import ProductService from "../service/product.service.js";
import productsData from "../dao/data/products.js";

const productService = new ProductService();

export default class ProductCtrl {
  constructor() {}

  //inserta produtos desde un archivo json
  async insertMany(req, res) {
    try {
      const products = await productService.insertMany(productsData);

      return res.json({
        message: "products insert succesfully",
        productsInserted: products,
      });
    } catch (error) {
      console.log(
        "🚀 ~ file: product.controller.js:19 ~ ProductCtrl ~ insertMany ~ error:",
        error
      );
    }
  }

  //crea un producto
  async addProduct(req, res) {
    try {
      const productBody = req.body;
      const newProduct = await productService.addProduct(productBody);

      if (!newProduct) {
        return res.json({
          message: `the product whit code ${productBody.code} is alredy register`,
        });
      }
      return res.json({
        message: `product created succesfully`,
        product: newProduct,
      });
    } catch (error) {
      console.log(
        "🚀 ~ file: product.routes.js:91 ~ router.post ~ error:",
        error
      );
    }
  }

  //devuelve todos los productos
  //  TODO: verificar este punto segun los requerimentos del entregable
  async getProducts(req, res) {
    //     let { limit, page, sort, category, status} = req.query;
    try {
      //   const productsArr = await productService.getProducts(limit, page, sort, category, status);
      //   return res.json({
      //     message: "get all products succesfully",
      //     productsAmount: productsArr.length,
      //     productsList: productsArr,
      //   });
    } catch (error) {
      console.log(
        "🚀 ~ file: product.controller.js:62 ~ ProductCtrl ~ getProducts ~ error:",
        error
      );
    }
  }

  // devuelve el producto  indicado con el id
  async getProductById(req, res) {
    try {
      const { pid } = req.params;
      const product = await productService.getProductById(pid);

      if (!product) {
        return res.json({
          message: "the product does not exist!",
        });
      }
      return res.status(200).json({
        message: `product with the id ${pid}`,
        product,
      });
    } catch (error) {
      console.log(
        "🚀 ~ file: product.controller.js:83 ~ ProductCtrl ~ getProductById ~ error:",
        error
      );
    }
  }

  //elimina el producto indicado con el id
  async deleteProduct(req, res) {
    try {
      const id = req.params.pid;
      const result = await productService.deleteProduct(id);
      return res.json({
        message: `the product has been removed`,
        product: result,
      });
    } catch (error) {
      console.log(
        "🚀 ~ file: product.controller.js:98 ~ ProductCtrl ~ deleteProduct ~ error:",
        error
      );
    }
  }

  //actualiza el producto
  async updateProduct(req, res) {
    try {
      const id = req.params.pid;
      const dataProduct = req.body;
      let result = await productService.updateProduct(id, dataProduct);
      if (!result) {
        return res.json({
          message: `The product cannot be updated, check the parameters`,
        });
      }

      return res.json({
        message: `the product with the id:  ${id} has been successfully updated`,
        product: result,
      });
    } catch (error) {
      console.log(
        "🚀 ~ file: product.routes.js:155 ~ router.put ~ error:",
        error
      );
    }
  }
}

//module.exports = ProductCtrl;
