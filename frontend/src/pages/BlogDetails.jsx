
import { Link, useParams } from "react-router-dom";
import { BookOpen, ArrowLeft, CalendarDays, User } from "lucide-react";

function BlogDetails({ blogs }) {
  const { id } = useParams();

  const blog = blogs.find((item) => item.id === Number(id));

  if (!blog) {
    return (
      <div className="not-found">
        <h2>Blog Not Found</h2>
        <p>Sorry, the blog you are looking for does not exist.</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="details-page">
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

      <main className="article-container">
        <Link to="/" className="article-back">
          <ArrowLeft size={16} />
          Back to all stories
        </Link>

        <article className="article-content">
          <span className="blog-label">ARTICLE</span>

          <h1>{blog.title}</h1>

          <div className="article-meta">
            <span>
              <User size={17} />
              {blog.author}
            </span>

            <span>
              <CalendarDays size={17} />
              {blog.date}
            </span>
          </div>

          <div className="article-divider"></div>

          <div className="article-body">
            {blog.content.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>

        <div className="article-footer">
          <p>Thanks for reading!</p>
          <Link to="/" className="hero-btn">
            Explore More Stories
          </Link>
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

export default BlogDetails;
