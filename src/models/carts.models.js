import mongoose from "mongoose";

const collection = "Carts";

const cartsSchema = new mongoose.Schema({
  products: {
    type: [
      {
        product: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: "Products",
          //required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
//    default: [],
  },
});

cartsSchema.pre("find", function () {
  this.populate("products.product");
});

const cartsModel = mongoose.model(collection, cartsSchema);

//module.exports = cartsModel;

export default cartsModel