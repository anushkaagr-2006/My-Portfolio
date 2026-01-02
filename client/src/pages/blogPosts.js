export const blogPosts = [
  {
    _id: '1',
    title: 'How I Built an Event Registration System with QR Check-In',
    slug: 'event-registration-system-qr-checkin',
    excerpt: 'A deep dive into creating a full-stack event registration system with QR code check-in using React, Node.js, and MongoDB.',
    content: `
  <p>
    As a B.Tech CSE student, I wanted to build a project that solves a real-world
    problem and also helps me strengthen my full-stack development skills.
    This motivation led me to create an <strong>Event Registration System with QR
    Code Check-In</strong>.
  </p>

  <h2>Why I Built This Project</h2>
  <p>
    Managing event registrations manually can be time-consuming and error-prone.
    I wanted to create a system where participants can register online and event
    organizers can easily track attendance using QR codes.
    This project helped me understand how real event management systems work.
  </p>

  <h2>Project Overview</h2>
  <p>
    The Event Registration System is a full-stack web application that allows
    users to register for an event and receive a unique Registration ID along
    with a QR code. During the event, admins can scan the QR code to mark
    attendance.
  </p>

  <h2>Main Features</h2>
  <ul>
    <li>User registration with a unique Registration ID</li>
    <li>Automatic QR code generation after registration</li>
    <li>QR code scanning for event check-in</li>
    <li>Admin dashboard to manage registrations</li>
    <li>Attendance status tracking (Present / Absent)</li>
    <li>Export registration and attendance data to Excel</li>
    <li>Fully responsive frontend</li>
  </ul>

  <h2>Tech Stack Used</h2>
  <ul>
    <li><strong>Frontend:</strong> React, React Router, Axios</li>
    <li><strong>Backend:</strong> Node.js, Express</li>
    <li><strong>Database:</strong> MongoDB Atlas</li>
    <li><strong>QR Features:</strong> QR code generation and scanning</li>
    <li><strong>Deployment:</strong> Render</li>
  </ul>

  <h2>How the System Works</h2>
  <p>
    Users fill out the registration form and submit their details. Once
    registered, a unique Registration ID and QR code are generated.
    During the event, admins scan the QR code to mark attendance.
    The attendance status is updated instantly and can also be modified manually
    from the admin dashboard.
  </p>

  <h2>Challenges I Faced</h2>
  <p>
    Integrating QR code generation and scanning was one of the main challenges.
    Managing admin-only access and handling data export to Excel were also
    important learning experiences while working on this project.
  </p>

  <h2>What I Learned</h2>
  <ul>
    <li>Building REST APIs using Express</li>
    <li>Connecting and managing data using MongoDB Atlas</li>
    <li>Handling frontend-backend communication using Axios</li>
    <li>Working with QR code libraries</li>
    <li>Deploying a full-stack application on Render</li>
  </ul>

  <h2>Live Demo</h2>
  <p>
    The project is deployed and live here:
    <a href="https://event-registration-system1.onrender.com" target="_blank" rel="noopener noreferrer">
      Event Registration System
    </a>
  </p>

  <h2>Conclusion</h2>
  <p>
    This project helped me gain confidence in building complete full-stack
    applications. It was a valuable learning experience and encouraged me to
    work on more real-world projects in the future.
  </p>
`,
    category: 'Projects',
    tags: ['React', 'Node.js', 'MongoDB', 'Full-Stack', 'Project'],
    author: 'Anushka Kumari Agrawal',
    createdAt: new Date().toISOString(),
    readTime: 6,
    views: 0,
    image: '/project4.png'
  },
  {
    _id: '2',
    title: 'Building My First Portfolio Website',
    slug: 'building-first-portfolio',
    excerpt: 'Step-by-step process of creating a full-stack portfolio',
    content: `
  <p>
    Building my first portfolio website was an exciting milestone in my journey as
    a B.Tech CSE student. This project was part of an internship task where I
    had to create a personal website to showcase my skills, projects, and learning
    experience in a structured way.
  </p>

  <h2>Why I Built a Portfolio</h2>
  <p>
    A portfolio allows recruiters and peers to see not just a list of skills,
    but actual work in action. It also helps organize projects, blogs, and
    personal achievements in one place.
  </p>

  <h2>Planning the Website</h2>
  <p>
    Before coding, I planned the structure of the portfolio. The main sections include:
  </p>
  <ul>
    <li>Home / Introduction</li>
    <li>About Me</li>
    <li>Skills</li>
    <li>Projects</li>
    <li>Blog</li>
    <li>Contact</li>
  </ul>

  <h2>Tech Stack Used</h2>
  <ul>
    <li><strong>Frontend:</strong> React</li>
    <li><strong>Backend:</strong> Node.js, Express</li>
    <li><strong>Styling:</strong> CSS3, responsive design</li>
    <li><strong>Version Control:</strong> Git & GitHub</li>
  </ul>

  <h2>Development Process</h2>
  <p>
    I created reusable React components for each section, making the website
    modular and easier to maintain. I focused on a clean and responsive UI
    to ensure the website works well on both desktop and mobile devices.
  </p>

  <h2>Challenges Faced</h2>
  <p>
    Since this was my first full portfolio, I faced challenges with layout design,
    responsiveness, and component organization. Deciding which projects and
    content to include also required careful consideration.
  </p>

  <h2>What I Learned</h2>
  <ul>
    <li>How to structure a React project effectively</li>
    <li>Component-based development for modularity</li>
    <li>Integrating backend logic with Node.js</li>
    <li>Responsive design and UI consistency</li>
    <li>Using GitHub for version control</li>
  </ul>

  <h2>Live Demo</h2>
  <p>
    The portfolio is live and accessible online. You can view it here:
    <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">
      My Portfolio Website
    </a>
  </p>

  <h2>Conclusion</h2>
  <p>
    Building my first portfolio was a valuable experience that improved my
    full-stack development skills and taught me how to present my work
    professionally. It also motivates me to keep improving and adding more
    projects in the future.
  </p>
`,
    category: 'Tutorial',
    tags: ['React', 'Node.js', 'Portfolio'],
    author: 'Anushka Kumari Agrawal',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    readTime: 8,
    views: 320,
    image: '/project1.png'
  },
  {
    _id: '3',
    title: 'Getting Started with Git and GitHub',
    slug: 'getting-started-git-github',
    excerpt: 'A beginner-friendly guide to version control for CSE students.',
    content: `
  <p>
    Git and GitHub are essential tools for any developer. As a B.Tech CSE student,
    I realized that learning version control early on would help me manage projects
    more efficiently and collaborate with others in the future.
  </p>

  <h2>What is Git?</h2>
  <p>
    Git is a distributed version control system that lets you track changes in your
    code, revert to previous versions, and manage multiple branches of development.
    It works locally on your computer and is essential for keeping a clean project history.
  </p>

  <h2>What is GitHub?</h2>
  <p>
    GitHub is an online platform that hosts Git repositories. It allows developers
    to share code, collaborate on projects, and contribute to open-source software.
    Using GitHub also makes it easy to showcase your projects to recruiters.
  </p>

  <h2>Getting Started with Git</h2>
  <ol>
    <li>Install Git on your system from <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">git-scm.com</a>.</li>
    <li>Set up your username and email:
      <pre><code>git config --global user.name "Your Name"
git config --global user.email "you@example.com"</code></pre>
    </li>
    <li>Initialize a new repository:
      <pre><code>git init</code></pre>
    </li>
    <li>Add files and commit changes:
      <pre><code>git add .
git commit -m "Initial commit"</code></pre>
    </li>
    <li>Check repository status and log:
      <pre><code>git status
git log</code></pre>
    </li>
  </ol>

  <h2>Using GitHub</h2>
  <ol>
    <li>Create a GitHub account at <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com</a>.</li>
    <li>Create a new repository on GitHub.</li>
    <li>Link your local repository to GitHub:
      <pre><code>git remote add origin https://github.com/username/repo.git
git branch -M main
git push -u origin main</code></pre>
    </li>
    <li>Push and pull changes regularly to keep your local and remote repositories synced.</li>
  </ol>

  <h2>Why You Should Learn Git Early</h2>
  <ul>
    <li>Keep track of your code changes and history</li>
    <li>Work on multiple projects without losing progress</li>
    <li>Collaborate with teammates efficiently</li>
    <li>Showcase your projects professionally on GitHub</li>
  </ul>

  <h2>Conclusion</h2>
  <p>
    Git and GitHub are foundational skills for every developer. Starting early in
    your CSE journey gives you confidence in managing projects, collaborating with
    others, and building a professional portfolio. Practice daily by committing
    small changes and pushing projects to GitHub — you’ll see your skills grow rapidly.
  </p>
`,
    category: 'Tutorial',
    tags: ['Git', 'GitHub', 'Version Control'],
    author: 'Anushka Kumari Agrawal',
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    readTime: 6,
    views: 280,
    image: '/Git.png'
  },
  {
  _id: '4',
  title: 'My Journey Learning Full Stack Development',
  slug: 'my-journey-learning-full-stack',
  excerpt: 'Sharing my experience as a B.Tech CSE student learning React, Node.js, and MongoDB through real projects.',
  content: `
    <p>
      As a B.Tech CSE student, my journey into full-stack web development has been
      entirely project-driven. I didn’t just read tutorials or watch videos — I
      learned by building real applications from scratch.
    </p>

    <h2>Why I Started Learning Web Development</h2>
    <p>
      In my first year, I realized that having practical web development skills
      would help me build projects that I could showcase in my portfolio, apply
      for internships, and prepare for real-world software development.
    </p>

    <h2>Learning by Doing Projects</h2>
    <p>
      Instead of following a strict course path, I focused on building projects
      that challenged me. Some of the projects I worked on include:
    </p>
    <ul>
      <li>Personal Portfolio Website</li>
      <li>Event Registration System with QR Check-In</li>
      <li>Inventory Management System</li>
      <li>Mind Muse Quiz App</li>
      <li>Pop!_OS Website Clone</li>
    </ul>
    <p>
      Each project taught me new concepts: frontend design with React, backend
      logic with Node.js, database management with MongoDB, deployment, and more.
      This hands-on approach helped me understand how all the pieces of a web
      application fit together.
    </p>

    <h2>Challenges I Faced</h2>
    <p>
      Learning through projects was not without challenges. I often struggled with
      integrating frontend and backend, handling APIs, and making responsive designs
      that work on all devices. Debugging was time-consuming but extremely valuable.
    </p>

    <h2>Lessons Learned</h2>
    <ul>
      <li>Understanding React components and state management</li>
      <li>Building REST APIs with Node.js and Express</li>
      <li>Connecting applications with MongoDB Atlas</li>
      <li>Deploying full-stack applications on Render</li>
      <li>Writing clean, modular, and reusable code</li>
      <li>Problem-solving and debugging in real scenarios</li>
    </ul>

    <h2>Advice for Other Students</h2>
    <p>
      If you want to learn web development, don’t wait to complete courses or tutorials.
      Start building projects, even small ones. Each project will teach you something
      new and give you confidence to tackle bigger applications.
    </p>

    <h2>Conclusion</h2>
    <p>
      My journey into web development has been defined by doing rather than reading.
      Each project I completed strengthened my skills and prepared me for real-world
      software development. I now feel confident in my ability to design, build, and
      deploy full-stack web applications.
    </p>
  `,
  category: 'Career',
  tags: ['Learning', 'Student Life', 'Web Development'],
  author: 'Anushka Kumari Agrawal',
  createdAt: new Date().toISOString(),
  readTime: 5,
  views: 150,
  image: '/Journey.png'
},
  {
  _id: '5',
  title: 'Inventory Management System 🛒',
  slug: 'inventory-management-system',
  excerpt: 'A modern, responsive, and fully functional Inventory Management System built with React, Material-UI, and Firebase.',
  content: `
    <p>
      The Inventory Management System (IMS) is a modern, fully functional web
      application designed to help users manage products, track inventory, and
      streamline operations efficiently. I built this project using React, Material-UI,
      and Firebase to practice real-world web development skills.
    </p>

    <h2>Why I Built This Project</h2>
    <p>
      Managing inventory manually can be time-consuming and prone to errors.
      I wanted to create a sleek, responsive, and easy-to-use system that can
      handle real-time updates and provide a professional experience for users.
    </p>

    <h2>Main Features</h2>
    <ul>
      <li><strong>User Authentication:</strong> Secure login and signup using Firebase Authentication</li>
      <li><strong>Add, Edit & Delete Products:</strong> Full CRUD functionality to manage inventory</li>
      <li><strong>Real-Time Updates:</strong> Firebase Firestore ensures instant data sync</li>
      <li><strong>Search & Filter Products:</strong> Quickly find products in the inventory</li>
      <li><strong>Responsive UI:</strong> Works perfectly on desktop, tablet, and mobile</li>
      <li><strong>Logout Option:</strong> Securely sign out when done</li>
    </ul>

    <h2>Tech Stack</h2>
    <ul>
      <li><strong>Frontend:</strong> React, Material-UI</li>
      <li><strong>Backend / Database:</strong> Firebase Firestore, Firebase Authentication</li>
      <li><strong>Hosting:</strong> Firebase Hosting</li>
    </ul>

    <h2>Challenges Faced</h2>
    <p>
      Integrating Firebase for authentication and real-time updates was a valuable learning experience.
      Designing a clean, responsive UI that works across devices also required careful planning
      and testing.
    </p>

    <h2>Lessons Learned</h2>
    <ul>
      <li>Implementing authentication and database operations with Firebase</li>
      <li>Building responsive UI with Material-UI</li>
      <li>Handling CRUD operations efficiently</li>
      <li>Deploying a live web application on Firebase Hosting</li>
      <li>Practicing real-world web development workflows</li>
    </ul>

    <h2>Live Demo</h2>
    <p>
      You can check out the live demo here:
      <a href="https://inventorysystem-b0ea2.web.app/" target="_blank" rel="noopener noreferrer">
        Inventory Management System Live
      </a>
    </p>

    <h2>Conclusion</h2>
    <p>
      This project strengthened my practical web development skills and gave me
      hands-on experience with React, Material-UI, and Firebase. Building the IMS
      helped me understand how real-time applications work and how to manage
      user-friendly web interfaces.
    </p>
  `,
  category: 'Web Development',
  tags: ['React', 'Firebase', 'Material-UI', 'Web Development'],
  author: 'Anushka Kumari Agrawal',
  createdAt: new Date(Date.now() - 345600000).toISOString(),
  readTime: 6,
  views: 0,
  image: '/project5.png'
},
  {
  _id: '6',
  title: 'Nova-AI: An AI-Powered Assistant',
  slug: 'nova-ai-assistant',
  excerpt: 'Nova-AI is an AI-powered assistant that responds intelligently to user queries using Hugging Face models and vector-based retrieval.',
  content: `
    <p>
      Nova-AI is an AI-powered assistant designed to intelligently respond to user queries,
      provide recommendations, and perform AI-driven tasks efficiently. I built this project
      to explore AI integration in web applications and practical NLP-based solutions.
    </p>

    <h2>Problem Statement</h2>
    <p>
      Interacting with AI systems can be complex and unintuitive. Nova-AI simplifies this by
      providing a user-friendly, web-based assistant that understands natural language and
      delivers accurate, context-aware responses in real-time.
    </p>

    <h2>Live Demo</h2>
    <p>
      Check out the deployed Nova-AI here:
      <a href="https://nova-ai-demo-link.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
    </p>

    <h2>Tech Stack</h2>
    <ul>
      <li><strong>Programming Language:</strong> Python</li>
      <li><strong>Backend Framework:</strong> Flask</li>
      <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
      <li><strong>AI:</strong> Hugging Face API for natural language processing</li>
      <li><strong>Vector-Based Search:</strong> LangChain, FAISS for efficient retrieval</li>
      <li>Other libraries: numpy, requests, python-dotenv, gunicorn, etc.</li>
    </ul>

    <h2>Key Features</h2>
    <ul>
      <li>Natural Language Query Handling – Ask questions and get AI-powered responses</li>
      <li>Mode Toggle – Switch between light and dark themes</li>
      <li>Voice Input – Speak to the assistant and receive responses</li>
      <li>Export Chats – Export conversations as TXT or PDF</li>
      <li>Vector-Based Search – Fast, context-aware information retrieval</li>
      <li>User-Friendly Web Interface – Clean and responsive design</li>
      <li>Extensible & Modular – Easily add new AI models or features</li>
    </ul>

    <h2>Screenshots / Demo</h2>
    <ul>
      <li>Home Page</li>
      <li>Chat Interface</li>
      <li>Dark Mode & Voice Input</li>
    </ul>

    <h2>Notes</h2>
    <ul>
      <li>.env contains sensitive API keys and is excluded from the repository</li>
      <li>The project can be further enhanced with multi-language support, advanced AI models, and additional personalization features</li>
    </ul>

    <h2>Conclusion</h2>
    <p>
      Nova-AI demonstrates how modern AI models can be integrated into a web-based assistant
      to provide intuitive, real-time, context-aware responses. This project helped me gain
      experience in AI integration, vector-based retrieval, and building a responsive web UI
      for AI-powered applications.
    </p>
  `,
  category: 'AI/ML',
  tags: ['Python', 'AI', 'Flask', 'Hugging Face', 'LangChain', 'Vector Search'],
  author: 'Anushka Kumari Agrawal',
  createdAt: new Date(Date.now() - 432000000).toISOString(),
  readTime: 7,
  views: 0,
  image: '/project3.png'
}
];