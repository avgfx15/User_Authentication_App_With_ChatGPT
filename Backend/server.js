const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const dbConnect = require("./DB/dbConnect");


dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;


// Use CORS middleware to allow requests from your frontend
const corsOptions = {
  origin: "http://localhost:3000", // Only allow requests from this domain
  methods: "GET,POST,PUT,DELETE",             // Allow only these methods (optional)
  allowedHeaders: "Content-Type, Authorization", // Specify allowed headers (optional)
};

app.use(cors(corsOptions));


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
