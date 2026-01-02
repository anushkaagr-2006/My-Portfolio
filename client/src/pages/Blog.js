import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import { blogPosts } from './blogPosts'; // ✅ Import from blogPosts.js
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState(blogPosts); // initialize with blogPosts
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [loading, setLoading] = useState(false); // no API call, so no loading
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All','Projects', 'Tutorial', 'Career', 'Web Development', 'AI/ML'];

  const handleFilterByCategory = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.category === category));
    }
  };

  return (
    <div className="blog-page">
      {/* Blog Hero */}
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-content">
            <h1 className="fade-in-up">Blog</h1>
            <p className="fade-in-up">
              Thoughts, tutorials, and insights on web development and technology
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content section">
        <div className="container">
          {/* Category Filter */}
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => handleFilterByCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts */}
          {filteredPosts.length > 0 ? (
            <>
              <div className="blog-grid">
                {filteredPosts.map((post) => (
                  <BlogCard key={post._id} post={post} />
                ))}
              </div>
              <div className="blog-stats">
                <p>Showing {filteredPosts.length} of {posts.length} posts</p>
              </div>
            </>
          ) : (
            <div className="no-posts">
              <p>No blog posts found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
