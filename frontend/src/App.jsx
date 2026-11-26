
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import BlogDetails from "./pages/BlogDetails";

import "./App.css";

const initialBlogs = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    author: "Rahul Sharma",
    date: "November 26, 2026",
    content:
      "Web development is an exciting journey where you can turn your ideas into real-world applications. Start with HTML, CSS and JavaScript."
  },
  {
    id: 2,
    title: "Why Learning Programming Matters",
    author: "Amit Kumar",
    date: "November 25, 2026",
    content:
      "Programming helps us solve real-world problems, develop logical thinking and build useful applications."
  },
  {
    id: 3,
    title: "My Journey as a Computer Science Student",
    author: "Priya Das",
    date: "November 24, 2026",
    content:
      "Being a computer science student is an exciting experience filled with learning, challenges and opportunities."
  }
];

function App() {
  const [blogs, setBlogs] = useState(initialBlogs);

  const addBlog = (newBlog) => {
    setBlogs((previousBlogs) => [newBlog, ...previousBlogs]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home blogs={blogs} />}
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
