// BlogPost.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FaCalendar, FaClock, FaEye, FaArrowLeft, FaTag } from 'react-icons/fa';
import { blogPosts } from './blogPosts'; // <-- import your fallback array
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/blog/${slug}`);
      setPost(response.data.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching blog post:', err);

      // Find the post in local fallback array
      const localPost = blogPosts.find((p) => p.slug === slug);

      if (localPost) {
        setPost(localPost);
      } else {
        setError('Post not found');
      }
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (loading) {
    return (
      <div className="blog-post-page">
        <div className="container">
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading post...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="blog-post-page">
        <div className="container">
          <div className="error-message">
            <h2>Post Not Found</h2>
            <p>Sorry, the blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="btn btn-primary">
              <FaArrowLeft /> Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <div className="container">
        <Link to="/blog" className="back-link">
          <FaArrowLeft /> Back to Blog
        </Link>

        <article className="blog-post">
          <header className="post-header">
            <div className="post-category">{post.category}</div>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-excerpt">{post.excerpt}</p>
            
            <div className="post-meta">
              <span className="meta-item">
                <FaCalendar />
                {formatDate(post.createdAt)}
              </span>
              <span className="meta-item">
                <FaClock />
                {post.readTime} min read
              </span>
              <span className="meta-item author">
                By {post.author}
              </span>
            </div>
          </header>

          {post.image && (
            <div className="post-featured-image">
              <img src={post.image} alt={post.title} />
            </div>
          )}

          <div 
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <footer className="post-footer">
            {post.tags && post.tags.length > 0 && (
              <div className="post-tags">
                <FaTag />
                <span>Tags:</span>
                {post.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            )}

            <div className="post-share">
              <p>Share this post:</p>
              <div className="share-buttons">
                <a 
                  href={`https://twitter.com/intent/tweet?text=${post.title}&url=${window.location.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-btn twitter"
                >
                  Twitter
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-btn linkedin"
                >
                  LinkedIn
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-btn facebook"
                >
                  Facebook
                </a>
              </div>
            </div>
          </footer>
        </article>

        <div className="post-navigation">
          <Link to="/blog" className="btn btn-outline">
            <FaArrowLeft /> Back to All Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
