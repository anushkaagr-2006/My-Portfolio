import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaDownload, FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);

    // Sample featured projects (replace with API call later)
    setFeaturedProjects([
      {
  id: 1,
  title: 'My Portfolio Website',
  description: 'Personal portfolio website built with React frontend, Node.js backend, and MongoDB database integration.',
  technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel'],
  category: 'Web Development',
  github: 'https://github.com/anushkaagr-2006/My-Portfolio',
  demo: 'https://anushka-portfolio-2006.vercel.app/',
  image: '/project1.png'
},
  {
  id: 2,
  title: 'Flickzy-Full Stack Startup Project',
  description: 'A real-time social streaming platform for movies and music with synchronized playback, chat, and video calling.',
  technologies: [
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Socket.io',
    'Redis',
    'JWT Authentication',
    'AWS S3 / Cloudinary'
  ],
  category: 'Web Development|App Development',
  github: 'https://github.com/anushkaagr-2006/Flickzy-',
  demo: 'https://app-862waupnhl35.appmedo.com/?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPNTY3MDY3MzQzMzUyNDI3AAGn-Ddmo177xIE58MVXrlD6-nbg-NexYgNmLgqbZWN8EgHfzNyTkO7NLQwjuJY_aem_oZgpZN3TlOua20lE-w6MSA',
  image: '/project2.jpg'
},

     {
  id: 3,
  title: 'Nova-AI',
  description: 'AI-powered web assistant that delivers fast, context-aware responses using modern language models and vector-based information retrieval.',
  technologies: [
    'Python',
    'Flask',
    'Hugging Face',
    'LangChain',
    'FAISS',
    'HTML',
    'CSS',
    'JavaScript'
  ],
  category: 'AI/ML',
  github: 'https://github.com/anushkaagr-2006/Nova-AI',
  demo: 'https://nova-ai-5lb9.onrender.com/',
  image: '/project3.png'
}

    ]);
  }, []);

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Make sure to add your resume.pdf to public folder
    link.download = 'Anushka_Kumari_Agrawal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text fade-in-up">
              <p className="hero-subtitle">Hi, I'm</p>
<h1 className="hero-title">Anushka Kumari Agrawal</h1>
<h2 className="hero-role">Aspiring Software Engineer</h2>
             <p className="hero-description">
  B.Tech CSE student at SRM University passionate about software development and problem-solving. 
  I love building innovative solutions and exploring real-world applications through projects. 
  Currently learning full-stack development and contributing to tech communities.
</p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary">
                  Get In Touch <FaArrowRight />
                </Link>
                <button onClick={handleDownloadResume} className="btn btn-secondary">
                  <FaDownload /> Download Resume
                </button>
              </div>
             <div className="hero-stats">
  <div className="stat-item">
    <h3>10+</h3>
    <p>Projects Built</p>
  </div>
  <div className="stat-item">
    <h3>3+</h3>
    <p>Years Experience</p>
  </div>
  <div className="stat-item">
    <h3>200%</h3>
    <p>My Passion</p>
  </div>
</div>
            </div>
            <div className="hero-image slide-in-right">
  <div className="image-blob">
    <img 
      src="/profile.jpg" 
      alt="Anushka Kumari Agrawal"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 'inherit'
      }}
    />
  </div>
</div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="what-i-do section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">What I Do</h2>
            <p className="section-subtitle">
              Specialized in building modern web applications with cutting-edge technologies
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card fade-in-up">
  <div className="service-icon">
    <FaCode />
  </div>
  <h3>Software Development</h3>
  <p>
    Building efficient applications with clean code using Python, C, 
    and exploring modern web technologies like React and Node.js.
  </p>
</div>
<div className="service-card fade-in-up">
  <div className="service-icon">
    <FaLaptopCode />
  </div>
  <h3>Problem Solving</h3>
  <p>
    Passionate about data structures, algorithms, and solving complex 
    problems through logical thinking and optimization.
  </p>
</div>
<div className="service-card fade-in-up">
  <div className="service-icon">
    <FaRocket />
  </div>
  <h3>Continuous Learning</h3>
  <p>
    Always exploring new technologies, contributing to open source, 
    and participating in tech communities like SWE.
  </p>
</div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Some of my work that showcases my skills and expertise
            </p>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/projects" className="btn btn-outline">
              View All Projects <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Connect!</h2>
            <p>
            I'm always eager to learn and collaborate on interesting projects. 
            Whether it's about tech, opportunities, or just a friendly chat - feel free to reach out!
            </p>    
            <Link to="/contact" className="btn btn-primary">
              Start a Conversation <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;