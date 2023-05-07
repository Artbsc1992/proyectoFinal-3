import userModel from "../models/user.models.js";
import CartsService from "./carts.service.js";
const cartService = new CartsService

export default class UserService {
  constructor() {}

  async addUser(userBody) {
    try {
      const newUser = await userModel.create(userBody);
      return newUser;
    } catch (error) {
      console.log(
        "🚀 ~ file: userManager.js:17 ~ UserManager ~ addUser ~ error:",
        error
      );
      return null

    }
  }

  async getUsers() {
    try {
      const result = await userModel.find({});
      return result;
    } catch (error) {
      console.log(
        "🚀 ~ file: userManager.js:37 ~ UserManager ~ getUsers ~ r:",
        error
      );
      return null

    }
  }

  async getUserById(userId){
    try {
      const user = await userModel.find({ _id: userId })
      return user
    } catch (error) {
      console.log("🚀 ~ file: user.service.js:39 ~ UserService ~ getUserByid ~ error:", error)
      return null
      
    }
  }

  async deleteUser(userId){
    try {
      const result = await userModel.deleteOne({ _id: userId })
      return result
    } catch (error) {
      console.log("🚀 ~ file: user.service.js:49 ~ UserService ~ deleteUser ~ error:", error)
      return null
      
    }
  }

  async updateUser(userId, data){
    try {
      const user = await userModel.updateOne({ _id: userId}, { $set: data })
      return user;
    } catch (error) {
      console.log("🚀 ~ file: user.service.js:59 ~ UserService ~ updateUser ~ error:", error)
      return null
    }
  }
}

//module.exports = UserService;
