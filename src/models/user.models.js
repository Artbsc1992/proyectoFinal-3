import mongoose from "mongoose";

const collection = "Users";

const roleType = {
  USER: "USER",
  ADMIN: "ADMIN",
  PUBLIC: "PUBLIC",
};

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  carts: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Carts",
    id:false,
    //TODO: cerificar populate
  },
  role: {
    type: String,
    enum: Object.values(roleType),
    default: "USER",
  },
});

userSchema.pre("find", function () {
  this.populate("carts.cart");
});

const userModel = mongoose.model(collection, userSchema);
// module.exports = userModel;
export default userModel;
