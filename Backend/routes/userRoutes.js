const express = require("express");
const { signup, signin } = require("../controllers/userControllers");


const router = express.Router();

// POST /api/users/signup
router.post("/signup", signup);

// POST /api/users/signin - Sign in a user
router.post("/signin", signin);

module.exports = router;
