import { Router } from "express";
// const handlePolicies = require("../middleware/handle-policies.middleware");
const router = Router();
import UserCntrl from "../controllers/user.controller.js";
const userCtrl = new UserCntrl();

router.get("/", userCtrl.getUsers);

router.get("/:userId", userCtrl.getUserById);

router.post(`/`, userCtrl.addUser);

router.delete(`/:userId`, userCtrl.deleteUser);

router.put(`/:userId`, userCtrl.updateUser);

// module.exports = router;

export default router