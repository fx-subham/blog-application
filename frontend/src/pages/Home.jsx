
import { Link } from "react-router-dom";
import { PenLine, BookOpen, ArrowRight } from "lucide-react";

function Home({ blogs }) {
  return (
    <div className="home-page">
      <nav className="navbar">
        <Link to="/" className="logo">
          <BookOpen size={25} />
          BlogSpace
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/create" className="create-btn">
            <PenLine size={16} />
            Create Blog
          </Link>
        </div>
      </nav>

      <header className="hero">
        <span className="hero-tag">WELCOME TO BLOGSPACE</span>

        <h1>
          Ideas worth <span>sharing.</span>
        </h1>

        <p>
          Discover interesting stories, share your thoughts
          and express yourself through words.
        </p>

        <Link to="/create" className="hero-btn">
          Write a Blog <ArrowRight size={18} />
        </Link>
      </header>

      <main className="blogs-section">
        <div className="section-heading">
          <span className="section-tag">OUR COMMUNITY</span>
          <h2>Latest Stories</h2>
          <p>Explore thoughts and stories from different authors.</p>
        </div>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <article className="blog-card" key={blog.id}>
              <div className="blog-card-top">
                <span className="blog-label">ARTICLE</span>
                <BookOpen size={20} />
              </div>

              <h3>{blog.title}</h3>

              <p className="blog-content">{blog.content}</p>

              <div className="blog-meta">
                <span>By {blog.author}</span>
                <span>{blog.date}</span>
              </div>

              <Link
                to={`/blog/${blog.id}`}
                className="read-link"
              >
                Read Article <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </main>

      <footer className="footer">
        <h3>BlogSpace.</h3>
        <p>Every story deserves to be heard.</p>
        <span>© 2026 BlogSpace. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default Home;
