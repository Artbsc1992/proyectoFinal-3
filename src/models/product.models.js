import mongoose from "mongoose";
// const mongoosePaginate = require("mongoose-paginate-v2");
const productsCollection = "Products";


const productsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true,
  },
  thumbnail: {
    type: String,
    default: [],
  },
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  status:{
    type: String,
    default: true,

  },
  category:{
    type: String,
    required: true,
  }
});

// productsSchema.plugin(mongoosePaginate)

const productsModel = mongoose.model(productsCollection, productsSchema);

// module.exports = productsModel;

export default productsModel;
