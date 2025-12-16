const express = require("express");
const router = express.Router();

// Insert Model
const User = require("../Model/UserModel");

// Insert User Controller
const UserController = require("../Controllers/UserControllers"); // ✅ Fix spelling

// Route
router.get("/", UserController.getAllUsers); // ✅ Fix naming
router.post("/", UserController.addUser);
router.get("/:id", UserController.getById);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

// Export
module.exports = router;
