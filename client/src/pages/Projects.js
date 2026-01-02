import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);

    // Sample projects data (replace with API call later)
    const projectsData = [
    {
  id: 1,
  title: 'My Portfolio Website',
  description: 'Personal portfolio website built with React frontend, Node.js backend, and MongoDB database integration.',
  technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel'],
  category: 'Web Development',
  github: 'https://github.com/yourusername/portfolio', // Update with YOUR GitHub
  demo: 'REPLACE_WITH_YOUR_VERCEL_URL', // Update after deployment
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
  category: 'Mobile Development',
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
},
      {
  id: 4,
  title: 'Event Registration System',
  description: 'A full-stack web application that enables seamless event registrations with QR code–based check-in, real-time attendance tracking, and an admin dashboard with Excel export functionality.',
  technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Render'],
  category: 'Web Development',
  github: 'https://github.com/anushkaagr-2006/event-registration-system',
  demo: 'https://event-registration-system1.onrender.com',
  image: '/project4.png'
},

      {
  id: 5,
  title: 'Inventory Management System',
  description: 'A modern inventory management web application that allows users to securely manage products with real-time updates, search and filtering, and a fully responsive Material-UI interface.',
  technologies: ['React', 'Material-UI', 'Firebase', 'Firestore', 'Firebase Authentication'],
  category: 'Web Development',
  github: 'https://github.com/anushkaagr-2006/inventory-system',
  demo: 'https://inventorysystem-b0ea2.web.app/',
  image: '/project5.png'
},
      {
  id: 6,
  title: 'Pop!_OS Website Clone',
  description: 'A modern, responsive frontend clone of the official Pop!_OS website built to demonstrate strong UI/UX and frontend development skills, featuring smooth animations, responsive layouts, and interactive sections.',
  technologies: ['HTML5', 'CSS3', 'JavaScript', 'Flexbox', 'CSS Grid'],
  category: 'Web Development',
  github: 'https://github.com/anushkaagr-2006/popos-clone',
  demo: 'https://popos-clone-jet.vercel.app/',
  image: '/project6.png'
},

      {
      
  id: 7,
  title: 'Mind Muse - Quiz App',
  description: 'An interactive and aesthetic quiz application built with React and Vite, featuring 10 multiple-choice questions, instant feedback, animated progress bars, and a pastel-themed responsive UI.',
  technologies: ['React', 'Vite', 'Framer Motion', 'HTML5', 'CSS3'],
  category: 'Web Development',
  github: 'https://github.com/anushkaagr-2006/Mind-Muse',
  demo: 'https://mind-muse.vercel.app/',
 image: '/project7.png'

      },
      {
  id: 8,
  title: "Snake n’ Crunch",
  description: "A beginner-friendly version of the classic Snake game built with Python and Pygame. Includes music, sound effects, and a Windows executable for easy play.",
  technologies: ["Python", "Pygame"],
  category: "Game Development",
  github: "https://github.com/anushkaagr-2006/Snake-n-Crunch",
  image: '/project8.png'

}

    ];

    setProjects(projectsData);
    setFilteredProjects(projectsData);
  }, []);

  const categories = ['All', 'Web Development', 'Mobile Development', 'AI/ML', 'Game Development'];

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <div className="projects-page">
      {/* Projects Hero */}
      <section className="projects-hero">
        <div className="container">
          <div className="projects-hero-content">
            <h1 className="fade-in-up">My Projects</h1>
            <p className="fade-in-up">
              Explore my portfolio of work showcasing various skills and technologies
            </p>
          </div>
        </div>
      </section>

      {/* Projects Content */}
      <section className="projects-content section">
        <div className="container">
          {/* Filter Buttons */}
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => handleFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="no-projects">
              <p>No projects found in this category.</p>
            </div>
          )}

          {/* Stats */}
          <div className="projects-stats">
            <div className="stat-box">
              <h3>{projects.length}</h3>
              <p>Total Projects</p>
            </div>
            <div className="stat-box">
              <h3>{new Set(projects.map(p => p.category)).size}</h3>
              <p>Categories</p>
            </div>
            <div className="stat-box">
              <h3>{new Set(projects.flatMap(p => p.technologies)).size}</h3>
              <p>Technologies Used</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;