import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              Anushka<span className="dot">.</span>
            </h3>
            <p className="footer-description">
  B.Tech CSE Student passionate about software development and building innovative solutions.
</p>
            <div className="social-links">
              <a href="https://github.com/anushkaagr-2006" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/anushkaaaa-agrawal/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/anushkaaaa_agr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anushkaagrawal02042006@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
  <FaEnvelope />
</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Categories</h4>
            <ul className="footer-links">
              <li><Link to="/blog?category=Web Development">Web Development</Link></li>
              <li><Link to="/blog?category=Tutorial">Tutorials</Link></li>
              <li><Link to="/blog?category=Career">Career Tips</Link></li>
              <li><Link to="/projects">My Projects</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>
  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anushkaagrawal02042006@gmail.com" target="_blank" rel="noopener noreferrer">anushkaagrawal02042006@gmail.com</a>
</li>
              <li>Location: Chennai, Tamil Nadu, India</li>
              <li>Available for Internships and Job Opportunities</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Anushka. Made with <FaHeart className="heart" />
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="separator">|</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;