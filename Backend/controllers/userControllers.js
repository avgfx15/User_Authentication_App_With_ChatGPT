const User = require("../Models/userSchema");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// Controller for user signup
const signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    // Create and save the user
    const newUser = new User({ email, password });
    const savedUser = await newUser.save();

    // Return success response
    res.status(201).json({
      message: "User registered successfully",
      user: { id: savedUser._id, email: savedUser.email },
    });
  } catch (error) {
    console.error("Error during signup:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};



// Controller for user sign-in
const signin = async (req, res) => {
        try {
          const { email, password } = req.body;

          // Validate input
          if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
          }

          // Check if the user exists
          const user = await User.findOne({ email });
          if (!user) {
            return res.status(404).json({ error: "User not found" });
          }

          // Compare the provided password with the stored hashed password
          const isPasswordValid = await bcrypt.compare(password, user.password);
          if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid credentials" });
          }

          // Generate a JWT token
          const token = jwt.sign(
            {
              id: user._id,
              email: user.email,
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRATION || "1h" } // Default expiration: 1 hour
          );

          // Send the token to the response
          res.status(200).json({
            message: "Login successful",
            token,
          });
        } catch (error) {
          console.error("Error during signin:", error.message);
          res.status(500).json({ error: "Internal server error" });
        }
      };

module.exports = { signup, signin };
