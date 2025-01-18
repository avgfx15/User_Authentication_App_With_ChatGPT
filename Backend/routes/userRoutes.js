const express = require("express");
const { signup, signin, forgotPassword } = require("../controllers/userControllers");


const userRoutes = express.Router();

// POST /api/users/signup
userRoutes.post("/signup", signup);

// POST /api/users/signin - Sign in a user
userRoutes.post("/signin", signin);

// POST /api/users/signin - Sign in a user
userRoutes.post("/forgot-password", forgotPassword);

module.exports = userRoutes;
