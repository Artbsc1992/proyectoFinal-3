import UserService from "../service/user.service.js";
import CartsService from "../service/carts.service.js";

const userService = new UserService();
const cartsService = new CartsService();

import userModel from "../models/user.models.js";

export default class UserCtrl {
  constructor() {}

  async addUser(req, res) {
    try {
      const newCart = await cartsService.createCart()
      console.log("🚀 ~ file: user.controller.js:15 ~ UserCtrl ~ addUser ~ newCart:", newCart._id)

      const { first_name, last_name, email, age, password, role } = req.body;
      console.log("BODY INFO", req.body);

      const userAdd = {
        email,
        password,
        first_name,
        last_name,
        age,
        role,
        carts: newCart._id
      };

      const userDetails = await userModel.findOne({ email: email });

      if (userDetails && Object.keys(userDetails).length !== 0) {
        return res.json({ message: `El usuario ya existe` });
      }

      const newUser = await userService.addUser(userAdd);

      if (!newUser){
        res.status(500).json({
          message: "something was wrong in addUser"
        })
      }

      return res.json({ message: `addUser`, newUser });
    } catch (error) {
      console.log(
        "🚀 ~ file: user.controller.js:39 ~ UserCtrl ~ addUser ~ error:",
        error
      );
      return res.status(500).json({ message: error.message });
    }
  }

  async getUsers(req, res) {
    try {
      const result = await userService.getUsers();
      if (!result){
        res.status(500).json({
          message: "something was wrong in getUsers"
        })
      }
      return res.status(200).json({ message: `getAllUsers`, result });
    } catch (error) {
      console.log(
        "🚀 ~ file: userManager.js:37 ~ UserManager ~ getUsers ~ r:",
        error
      );
      return res.status(500).json({ message: error.message });
    }
  }

  async getUserById(req, res) {
    try {
      const { userId } = req.params;
      const user = await userService.getUserById(userId);
      
      if(!user){
        return res.json({
          message: "the user does not exist!"
        })
      }
      return res.json({message: `Usuario con el id ${userId}`, user})
    } catch (error) {
      return res.status(500).json({ message: error.message });
      
    }
  }

  async deleteUser(req, res) {
try {
    const { userId } = req.params;
    const result = await userService.deleteUser(userId);

    if(!result){
        return res.json({
          message: "the user does not exist!"
        })
      }
      return res.json({message: `El usuario con el id ${userId} ha sido eliminado`, result})
    
} catch (error) {
    console.log("🚀 ~ file: user.controller.js:88 ~ UserCtrl ~ deleteUser ~ error:", error)
    return res.status(500).json({ message: error.message });
}
  }

  async updateUser(req, res) {
    try {
    const { userId } = req.params;
    const updateUser = req.body;

    const result = await userService.updateUser(userId, updateUser);
    
    if(!result){
        return res.json({
          message: "the user does not exist!"
        })
      }
      return res.json({message: `El usuario con el id ${userId} ha sido editado`, result})
    
} catch (error) {
    console.log("🚀 ~ file: user.controller.js:108 ~ UserCtrl ~ updateUser ~ error:", error)
    return res.status(500).json({ message: error.message });
}
  }
}

//module.exports = UserCtrl;
