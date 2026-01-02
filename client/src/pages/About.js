import React, { useEffect } from 'react';
import { FaDownload, FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa';
import './About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills = {
  frontend: [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 88 },
    { name: 'JavaScript', level: 83 },
    { name: 'React.js', level: 90 }
  ],
  backend: [
    { name: 'Node.js', level: 78 },
    { name: 'Express.js', level: 74 },
    { name: 'APIs (REST)', level: 83 }
  ],
  databases: [
    { name: 'MongoDB', level: 90 },
    { name: 'Firebase', level: 84 },
    { name: 'SQL', level: 80 }
  ],
  programming: [
    { name: 'C', level: 91 },
    { name: 'C++', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'Java', level: 88 }
  ],
  core_concepts: [
    { name: 'Object-Oriented Programming', level: 83 },
    { name: 'Data Structures & Algorithms', level: 87 },
    { name: 'Operating Systems', level: 90 }
  ],
  tools: [
    { name: 'Git (Commands)', level: 95 },
    { name: 'GitHub', level: 91 },
    { name: 'VS Code', level: 92 },
    { name: 'Canva', level: 95 },
    { name: 'Microsoft Office Suite', level: 88 }
  ],
  command_line_tools: [
    { name: 'Windows CMD', level: 78 },
    { name: 'Linux Terminal', level: 84 },
    { name: 'Linux Commands', level: 78 }
  ]
};


  const experience = [
  {
  title: 'Co-Founder & Frontend Developer',
  company: 'Flickzy',
  period: 'June 2025 - Present',
  description: 'Co-founded a startup focused on building innovative web applications, with a primary focus on frontend development, UI/UX design, and collaborating on backend integration.',
  achievements: [
    'Developed responsive and interactive frontend interfaces using React.js',
    'Implemented reusable components and optimized web performance',
    'Collaborated with the team to integrate APIs and manage database operations',
    'Handled deployment and testing for production readiness',
    'Contributed to design, branding, and user experience decisions for the platform'
  ]
},
{
    title: 'Full Stack Web Development Intern',
    company: 'Future Interns',
    period: 'Dec 2025 - Jan 2026',
    description: 'Working on full-stack web development projects, building scalable applications using React.js, Node.js, and Firebase, while gaining hands-on industry experience.',
    achievements: [
      'Developed responsive web applications with modern UI/UX practices',
      'Integrated Firebase and MongoDB for data storage',
      'Implemented REST APIs for client-server communication'
    ]
  },
  {
    title: 'Technical Associate Director',
    company: 'Society of Women Engineers (SWE), College Club',
    period: 'Nov 2025 - Present',
    description: 'Leading technical initiatives in the club, mentoring juniors, and organizing workshops and coding sessions.',
    achievements: [
      'Worked on the club projects',
      'Collaborated with the team to organize technical events',
      'Guided members on project development and Git workflows'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'Personal/College Projects',
    period: '2024 - Present',
    description: 'Developed several web applications as part of college projects and personal learning, applying frontend and backend technologies.',
    achievements: [
      'Built many full-stack websites using React.js, Node.js, and MongoDB',
      'Integrated APIs and implemented AI/ML features for enhanced functionality',
      'Enhanced project UI with responsive design and animations'
    ]
  }
];

  const education = [
  {
    degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
    institution: 'SRM Institute of Science and Technology, Kattankulathur, Tamil Nadu, India',
    period: '2024 - 2028',
    description: 'Current CGPA: 9.28/10.0 . Relevant coursework: Data Structures, Algorithms, OOP, DBMS, Computer Networks, Web Technologies.'
  },
  {
    degree: 'Senior Secondary Education (Class XII)',
    institution: 'Delhi Public School, Biratnagar, Morang, Nepal',
    period: '2021 - 2023',
    description: 'Percentage: 88% . Stream: Science (Physics, Chemistry, Mathematics).'
  }
];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Anushka_Kumari_Agrawal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="about">
      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="fade-in-up">About Me</h1>
<p className="fade-in-up">
  B.Tech CSE student passionate about software development and continuous learning
</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2 className="section-title">Hello! I'm Anushka</h2>
<p>
  I'm a 2nd-year B.Tech Computer Science Engineering student at SRM Institute of Science 
  and Technology, Chennai. I'm passionate about software development, problem-solving, 
  and building solutions that make a difference.
</p>
<p>
  My journey in tech began with curiosity about how things work, which led me to pursue 
  Computer Science. I'm constantly learning new technologies, working on projects, and 
  exploring different areas of software engineering to make myself better in this field.
</p>
<p>
  Beyond academics, I serve as Technical Associate Director at Society of Women Engineers (SWE) in my University, 
  where I help organize tech events and mentor fellow students. When I'm not coding, you can 
  find me solving DSA problems, contributing to open-source projects, or contributing to college tech clubs.
</p>
              <button onClick={handleDownloadResume} className="btn btn-primary mt-4">
                <FaDownload /> Download Resume
              </button>
            </div>
            <div className="about-highlights">
              <div className="highlight-card">
                <FaBriefcase className="highlight-icon" />
                <h3>3+ Years</h3>
                <p>Tech Experience</p>
              </div>
              <div className="highlight-card">
                <FaAward className="highlight-icon" />
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="highlight-card">
                <FaGraduationCap className="highlight-icon" />
                <h3>CS Degree</h3>
                <p>Computer Science</p>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Skills Section */}
<section className="skills-section section">
  <div className="container">
    <h2 className="section-title text-center">Technical Skills</h2>
    <p className="section-subtitle text-center">
      Technologies and tools I work with
    </p>

    <div className="skills-categories">
      <div className="skill-category">
        <h3>Frontend Development</h3>
        <div className="skills-list">
          {skills.frontend.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skill-category">
        <h3>Backend Development</h3>
        <div className="skills-list">
          {skills.backend.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skill-category">
        <h3>Databases</h3>
        <div className="skills-list">
          {skills.databases.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skill-category">
        <h3>Programming Languages</h3>
        <div className="skills-list">
          {skills.programming.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skill-category">
        <h3>Core Concepts</h3>
        <div className="skills-list">
          {skills.core_concepts.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skill-category">
        <h3>Tools & Software</h3>
        <div className="skills-list">
          {skills.tools.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skill-category">
        <h3>Command Line Tools</h3>
        <div className="skills-list">
          {skills.command_line_tools.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Experience Section */}
      <section className="experience-section section">
        <div className="container">
          <h2 className="section-title text-center">Work Experience</h2>
          <div className="timeline">
            {experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-period">{exp.period}</div>
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <p>{exp.description}</p>
                  <ul>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section section">
        <div className="container">
          <h2 className="section-title text-center">Education</h2>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <FaGraduationCap className="education-icon" />
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <p className="education-period">{edu.period}</p>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;