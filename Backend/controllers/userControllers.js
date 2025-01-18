const User = require("../Models/userSchema");


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

module.exports = { signup };
