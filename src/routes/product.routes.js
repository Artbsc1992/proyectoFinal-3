import { Router } from "express";
import ProductCtrl from "../controllers/product.controller.js";
const productCtrl = new ProductCtrl();
const router = Router();

// debe insertar una lista de productos
router.get(`/insertion`, productCtrl.insertMany);

// //trae todos los productos
router.get(`/`, productCtrl.getProducts);

// //debe traer sólo el producto seleccionado
router.get(`/:pid`, productCtrl.getProductById);

// // // debe agregar nuevos productos
router.post(`/`, productCtrl.addProduct);

// // //elimina un producto
router.delete("/:pid", productCtrl.deleteProduct);

// //toma un producto y lo actualiza

router.put("/:pid", productCtrl.updateProduct);

// module.exports = router;

export default router;