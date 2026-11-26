
const express = require("express");
const router = express.Router();

const Blog = require("../models/Blog");

// CREATE a new blog
router.post("/", async (req, res) => {
  try {
    const { title, author, content } = req.body;

    if (!title?.trim() || !author?.trim() || !content?.trim()) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const newBlog = new Blog({
      title,
      author,
      content
    });

    const savedBlog = await newBlog.save();

    res.status(201).json({
      message: "Blog published successfully",
      blog: savedBlog
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to publish blog",
      error: error.message
    });
  }
});

// GET all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });

    res.status(200).json(blogs);

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch blogs",
      error: error.message
    });
  }
});

// GET a single blog by ID
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found"
      });
    }

    res.status(200).json(blog);

  } catch (error) {
    res.status(400).json({
      message: "Invalid blog ID or request",
      error: error.message
    });
  }
});

module.exports = router;
