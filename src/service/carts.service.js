import cartsModel from "../models/carts.models.js";

export default class CartsService {
  constructor() {}

  // deberá crear un carrito vacio
  async createCart() {
    try {
      const newCart = await cartsModel().save();
      return newCart;
    } catch (error) {
      console.log(
        "🚀 ~ file: carts.service.js:12 ~ createCart ~ error:",
        error
      );
      return null;
    }
  }
  //elimina del carrito el producto seleccionado
  // async deleteItem(cartId, productId) {
  //   try {
  //     const result = await cartsModel.findByIdAndUpdate(cartId, {
  //       $pull: { products: { _id: productId } },
  //     });
  //     console.log(
  //       "🚀 ~ file: CartsManager.js:34 ~ CartsManager ~ deleteItem ~ result:",
  //       result
  //     );
  //     return result;
  //   } catch (error) {
  //     console.log(
  //       "🚀 ~ file: CartsManager.js:26 ~ CartsManager ~ deleteItem ~ error:",
  //       error
  //     );
  //   }
  // }

  async addProdToCart(cartId, data) {
    try {
      const cart = await cartsModel.findById(cartId);
      console.log("🚀 ~ file: carts.service.js:41 ~ CartsService ~ addProdToCart ~ cart:", cart)
      cart.products.push(data);
      cart.save();
      return cart;
    } catch (error) {
      console.log(
        "🚀 ~ file: CartsManager.js:59 ~ CartsManager ~ addProdToCart ~ error:",
        error
      );
      return null;
    }
  }

  async getProductByCartWitId(cartId) {
    try {
      const result = await cartsModel.find({ _id: cartId });
      return result;
    } catch (error) {
      console.log(
        "🚀 ~ file: carts.service.js:69 ~ CartsService ~ getProductByCartWitId ~ error:",
        error
      );
      return null;
    }
  }

  // debe eliminar todos los productos del carrito
  // async deleteProducts(cartId) {
  //   try {
  //     const result = await cartsModel.findByIdAndUpdate(cartId, {
  //       $pull: { products: {} },
  //     });

  //     return result;
  //   } catch (error) {
  //     console.log(
  //       "🚀 ~ file: CartsManager.js:73 ~ CartsManager ~ deleteProducts ~ error:",
  //       error
  //     );
  //   }
  // }

  // // actualiza el carrito con un arreglo de productos
  // async addProdToCart(cartId, data) {
  //   try {
  //     console.log("llegó al servicio")
  //     const updateCart = cartsModel.updateOne(cartId, data);
  //     //data contiene el id del producto + la cantidad
  //     return updateCart;
  //   } catch (error) {
  //     console.log(
  //       "🚀 ~ file: carts.service.js:87 ~ CartsService ~ updateCart ~ error:",
  //       error
  //     );
  //     return null;
  //   }
  // }

  // //actualiza sólo la cantidad de ejemplares (por body)
  // async editQuantity(cartId, productId, data) {
  //   try {
  //     const cart = await cartsModel.findById(cartId);
  //     const product = cart.products.find((p) => p._id.toString() === productId);
  //     product.quantity = data.quantity;
  //     cart.save();
  //   } catch (error) {
  //     console.log(
  //       "🚀 ~ file: CartsManager.js:101 ~ CartsManager ~ editQuantity ~ error:",
  //       error
  //     );
  //   }
  // }
}

//module.exports = CartsService;
