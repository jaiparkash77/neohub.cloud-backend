const express = require("express");
const adminController = require("../controllers/admin-controller");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

router.route("/users").get(authMiddleware, adminMiddleware, adminController.getAllUsers);

router.route("/user/:id").get(authMiddleware, adminMiddleware, adminController.getUserById).delete(authMiddleware, adminMiddleware, adminController.deleteUserById);

router.route("/contacts").get(authMiddleware, adminMiddleware, adminController.getAllContacts);

module.exports = router;