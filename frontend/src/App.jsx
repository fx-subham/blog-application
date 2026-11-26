
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import BlogDetails from "./pages/BlogDetails";

import "./App.css";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api/blogs";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch blogs from MongoDB through Express
  const fetchBlogs = async () => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const data = await response.json();
      setBlogs(data);
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Publish a new blog
  const addBlog = async (newBlog) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBlog)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to publish blog");
    }

    setBlogs((previousBlogs) => [
      data.blog,
      ...previousBlogs
    ]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              blogs={blogs}
              loading={loading}
              error={error}
            />
          }
        />

        <Route
          path="/create"
          element={<CreateBlog addBlog={addBlog} />}
        />

        <Route
          path="/blog/:id"
          element={<BlogDetails blogs={blogs} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
