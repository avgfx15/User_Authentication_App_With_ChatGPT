const express = require("express");
const { signup } = require("../controllers/userControllers");


const router = express.Router();

// POST /api/users/signup
router.post("/signup", signup);

module.exports = router;
