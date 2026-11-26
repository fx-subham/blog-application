import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen, ArrowLeft, Send } from "lucide-react";

function CreateBlog({ addBlog }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: Date.now(),
      title,
      author,
      content,
      date: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };

    addBlog(newBlog);

    alert("Blog published successfully!");

    navigate("/");
  };

  return (
    <div className="create-page">
      <nav className="navbar">
        <Link to="/" className="logo">
          <BookOpen size={25} />
          BlogSpace
        </Link>

        <Link to="/" className="back-link">
          <ArrowLeft size={17} />
          Back to Home
        </Link>
      </nav>

      <main className="create-container">
        <div className="create-heading">
          <span>SHARE YOUR THOUGHTS</span>
          <h1>Create a New Blog</h1>
          <p>Write your story and share it with the world.</p>
        </div>

        <form className="blog-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Blog Title</label>
            <input
              id="title"
              type="text"
              placeholder="Enter your blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">Author Name</label>
            <input
              id="author"
              type="text"
              placeholder="Enter your name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Blog Content</label>
            <textarea
              id="content"
              placeholder="Start writing your blog here..."
              rows="12"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="publish-btn">
            <Send size={17} />
            Publish Blog
          </button>
        </form>
      </main>
    </div>
  );
}

export default CreateBlog;
