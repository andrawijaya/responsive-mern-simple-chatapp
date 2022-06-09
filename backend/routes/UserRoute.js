const express = require("express");

const {
  createUser,
  loginUser,
  logoutUser,
} = require("../controllers/UserController");

const router = express.Router();

router.post("/signup", createUser);
router.post("/login", loginUser);
// router.delete("/logout", logoutUser);

module.exports = router;
