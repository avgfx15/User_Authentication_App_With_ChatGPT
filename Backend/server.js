const express = require("express");
const dotenv = require("dotenv");

const userRoutes = require("./routes/userRoutes");
const dbConnect = require("./DB/dbConnect");


dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
dbConnect();

// Middleware for JSON parsing
app.use(express.json());

// API routes
app.use("/api/users", userRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
