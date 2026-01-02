import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaEye, FaCalendar } from 'react-icons/fa';
import './BlogCard.css';

const BlogCard = ({ post }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="blog-card">
      <div className="blog-image">
        {post.image ? (
          <img src={post.image} alt={post.title} />
        ) : (
          <div className="blog-placeholder">
            <span className="blog-icon">📝</span>
          </div>
        )}
        <div className="blog-category-badge">
          {post.category}
        </div>
      </div>

      <div className="blog-content">
        <div className="blog-meta">
          <span className="meta-item">
            <FaCalendar />
            {formatDate(post.createdAt)}
          </span>
          <span className="meta-item">
            <FaClock />
            {post.readTime || 5} min read
          </span>
        </div>

        <Link to={`/blog/${post.slug}`} className="blog-title-link">
          <h3 className="blog-title">{post.title}</h3>
        </Link>

        <p className="blog-excerpt">{post.excerpt}</p>

        {post.tags && post.tags.length > 0 && (
          <div className="blog-tags">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="blog-tag">
                #{tag}
              </span>
            ))}
          </div>
        )}

        <Link to={`/blog/${post.slug}`} className="read-more">
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;