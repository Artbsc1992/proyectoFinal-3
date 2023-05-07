import { Router } from "express";
import CartsCtrl from "../controllers/carts.controller.js";
import cartsModel from "../models/carts.models.js";
import userModel from "../models/user.models.js";
const router = Router();

const cartsCtrl = new CartsCtrl();



// router.get("/", userCtrl.getUsers);

// router.get("/:userId", userCtrl.getUserById);

router.get("/:cartId", cartsCtrl.getProductByCartWithId);

router.post(`/`, cartsCtrl.createCart);

router.post(`/:cartId`, cartsCtrl.addProdToCart)

// router.delete(`/:userId`, userCtrl.deleteUser);

// router.put(`/:userId`, userCtrl.updateUser);


// //debe crear el carrito vacío
// router.post(`/`, async (req, res) => {
//   //TODO: buscar info en la clase 9
//   try {
//     const newCart = await cartsCtrl.createCart();
//     console.log("🚀 ~ file: carts.routes.js:16 ~ router.post ~ newCart:", newCart)
//     return res.json({
//       message: `cart created succesfully`,
//       cart: newCart,
//     });
//   } catch (error) {
//     console.log(
//       "🚀 ~ file: carts.routes.js:35 ~ CartsRoutes ~ router.post ~ error:",
//       error
//     );
//   }
// });

// //debe agregar un producto al carrito seleccionado
// router.post(`/:cid`, async (req, res) => {
//   try {
//     const {
//       user: { id },
//     } = req.user;
//     console.log("🚀 ~ file: carts.routes.js:32 ~ router.post ~ userInfo:", id);
//     const cid = req.params.cid;
//     const prod = req.body;
//     const result = await cartsManager.addProdToCart(cid, prod);
//     console.log("🚀 ~ file: carts.routes.js:38 ~ router.post ~ result:", result)
//     const userData = await userModel.findById({ _id: id });
//     console.log("🚀 ~ file: carts.routes.js:39 ~ router.post ~ userData:", userData)

//     userData.carts.push({ cart: result._id });
//     const updateUserCart = await userModel.updateOne([{ _id: id }], userData);

//     if(!updateUserCart.acknowledged){
//       return res.status(500).json({
//         message: "the cart was updated but the user was not updated"
//       })
//     }
//     if (result)
//       return res.json({
//         message: `the product was uploaded successfully`,
//         product: prod,
//         related: updateUserCart,
//       });

//     return res.json({
//       message: "the id does not exist",
//     });
//   } catch (error) {
//     console.log("🚀 ~ file: carts.routes.js:37 ~ router.post ~ error:", error);
//   }
// });

// //debera eliminar del carrito el producto seleccionado
// router.delete("/:cid/products/:pid", async (req, res) => {
//   try {
//     const cartId = req.params.cid;
//     const productId = req.params.pid;

//     const deleteProd = await cartsManager.deleteItem(cartId, productId);
//     return res.json({
//       message: `the product with the id: ${productId} has been removed`,
//       product: deleteProd,
//     });
//   } catch (error) {}
// });

// //debera eliminar todos los productos del carrito.
// router.delete("/:cid", async (req, res) => {
//   try {
//     const id = req.params.cid;
//     const result = await cartsManager.deleteProducts(id);
//     return res.json({
//       message: `the products in the cart ${id} have been removed`,
//       product: result,
//     });
//   } catch (error) {
//     console.log(
//       "🚀 ~ file: carts.routes.js:43 ~ router.delete ~ error:",
//       error
//     );
//   }
// });

// //actualiza el carrito con un arreglo de productos de formato especifico
// router.put("/:cid", async (req, res) => {
//   // no se especifica que es lo que hay que hacer acá...
//   // es poco clara la consigna
// });

// //debe actualizar sólo la cantidad de ejemplares del producto por cualquier cantidad pasada desde el req.body.
// router.put("/:cid/products/:pid", async (req, res) => {
//   const quantity = req.body;
//   const cartId = req.params.cid;
//   const prodId = req.params.pid;
//   try {
//     const updateQuantity = await cartsManager.editQuantity(
//       cartId,
//       prodId,
//       quantity
//     );
//     return res.json({
//       message: `the product with de id: ${prodId} has been updated`,
//       newQuantity: quantity.quantity,
//     });
//   } catch (error) {}
// });

// router.get("/:cid", async (req, res) => {
//   const id = req.params.cid;
//   const products = await cartsManager.getProductByCartWitId(id);

//   return res.json({
//     message: `Products in the cart ${id}`,
//     product: products,
//   });
// });

//module.exports = router;

export default router;