
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

require("dotenv").config({
  path: path.join(__dirname, ".env")
});

const blogRoutes = require("./routes/blogRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/blogs", blogRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("Blog Application API is running successfully!");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  });
