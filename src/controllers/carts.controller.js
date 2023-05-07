import CartsService from "../service/carts.service.js";

const cartsService = new CartsService();

export default class CartsCtrl {
  constructor() {}

  //crea el carrito vacio
  async createCart(req, res) {
    try {
      const newCart = await cartsService.createCart();
      if (!newCart){
        res.status(500).json({
          message: "something was wrong"
        })
      }
      return res.json({ message: `cart created succesfully`, cart: newCart });
    } catch (error) {
      console.log(
        "🚀 ~ file: carts.controller.js:14 ~ CartsCtrl ~ createCart ~ error:",
        error
      );
    }
  }

  // trae los datos del carrito indicado en el id
  // async getCartById(req, res) {
  //   try {
  //     const cartId = req.params;
  //     const cart = await cartsService.getCartById(cartId);
  //     if (!cart) {
  //       return res.json({
  //         message: "the cart does not exist!",
  //       });
  //     }
  //   } catch (error) {
  //     console.log(
  //       "🚀 ~ file: carts.controller.js:28 ~ CartsCtrl ~ getCartById ~ error:",
  //       error
  //     );
  //   }
  // }
  //agrega un elemento al carrito seleccionado
  async addProdToCart(req, res) {
      try {
        
          const id = req.params.cartId
          console.log("🚀 ~ file: carts.controller.js:48 ~ CartsCtrl ~ addProdToCart ~ id:", id)
          const prod = req.body;
          const result = await cartsService.addProdToCart(id, prod);
          if (result) return res.json({
            message: `the product was uploaded successfully`,
            product: prod,
          })
      
          return res.json({
            message: "the id does not exist"
          })
    // const {
    //   user: { id }
    // } = req.user;
    // console.log("🚀 ~ file: carts.routes.js:32 ~ router.post ~ userInfo:", id);
    // const cartId = req.params
    // const prod = req.body;
    // const result = await cartsService.addProdToCart(cartId, prod);
    // console.log("🚀 ~ file: carts.routes.js:38 ~ router.post ~ result:", result)
    // const userData = await userModel.findById({ _id: id });
    // console.log("🚀 ~ file: carts.routes.js:39 ~ router.post ~ userData:", userData)

    // userData.carts.push({ cart: result._id });
    // const updateUserCart = await userModel.updateOne([{ _id: id }], userData);

    // if(!updateUserCart.acknowledged){
    //   return res.status(500).json({
    //     message: "the cart was updated but the user was not updated"
    //   })
    // }
    // if (result)
    //   return res.json({
    //     message: `the product was uploaded successfully`,
    //     product: prod,
    //     //related: updateUserCart,
    //   });

    // return res.json({
    //   message: "the id does not exist",
    // });
  } catch (error) {
    console.log("🚀 ~ file: carts.routes.js:37 ~ router.post ~ error:", error);
  }
  }


  // elimina el producto seleccionado del carrito seleccionado.
  async deleteItem(req, res) {}

  // devuelve todos los productos que contiene el carrito indicado con el id
  async getProductByCartWithId(req, res) {
    try {
      const { cartId } = req.params;
      const cart = await cartsService.getProductByCartWitId(cartId);
      if (!cart) {
        return res.json({
          message: "the cart does not exist!",
        });
      }

      return res.json({
        message: `cart with id ${cartId}`,
        cart
      })
    } catch (error) {
      console.log(
        "🚀 ~ file: carts.controller.js:28 ~ CartsCtrl ~ getCartById ~ error:",
        error
      );
    }
  }

  //elimina todos los productos del carrito indicado con el id
  async deleteProducts(req, res) {}

  //actualiza el carrito
  // async updateCart (req, res) {

  // }

  //actualiza sólo la cantidad de ejemplares (por body)
  async editQantity(req, res) {}
}

//module.exports = CartsCtrl;
