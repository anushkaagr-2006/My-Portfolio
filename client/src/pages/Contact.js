import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/contact`,
        formData
      );

      if (response.data.success) {
        setMessage({
          type: 'success',
          text: response.data.message || 'Message sent successfully! I\'ll get back to you soon.'
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessage({
        type: 'error',
        text: error.response?.data?.message || 'Failed to send message. Please try again or email me directly.'
      });
    } finally {
      setLoading(false);
      // Clear message after 5 seconds
      setTimeout(() => {
        setMessage({ type: '', text: '' });
      }, 5000);
    }
  };

  return (
    <div className="contact-page">
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="fade-in-up">Get In Touch</h1>
            <p className="fade-in-up">
              Have a project in mind or want to collaborate? Let's talk!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Let's Connect</h2>
<p>
  I'm always eager to learn and explore new opportunities in tech. 
  Whether it's about internships, projects, or just a friendly chat - feel free to reach out!
</p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <FaEnvelope />
                  </div>
                  <div className="info-details">
                    <h4>Email</h4>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anushkaagrawal02042006@gmail.com" target="_blank" rel="noopener noreferrer">anushkaagrawal02042006@gmail.com</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="info-details">
                    <h4>Location</h4>
                    <p>Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <h4>Follow Me</h4>
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
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? (
                    <>
                      <div className="btn-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaEnvelope />
                      Send Message
                    </>
                  )}
                </button>

                {message.text && (
                  <div className={`form-message ${message.type}`}>
                    {message.text}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Collaborate?</h2>
<p>
  I'm open to internships, projects, and learning opportunities. Let's build something amazing together!
</p>
<a href="https://mail.google.com/mail/?view=cm&fs=1&to=anushkaagrawal02042006@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
  Email Me Directly
</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;