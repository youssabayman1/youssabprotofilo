import { useState, useEffect } from 'react'

const portfolio = {
  name: 'Youssab Ayman',
  title: 'Full Stack Developer (Next.js, Node.js)',
  role: 'Full Stack Developer (Next.js, Node.js)',
  tagline:
    'I build scalable full stack products where clean architecture meets intelligent automation.',
  intro:
    'Full Stack Developer specializing in Next.js, Node.js, and cloud-native applications. I combine strong backend engineering with modern frontend execution to deliver high-performance platforms — from secure CRM systems and client portals to AI-powered automation workflows.',
  summary:
    'Full Stack Developer specializing in Next.js, Node.js, and cloud-native applications. Expert in building secure CRM systems, client portals, and RESTful APIs with modern DevOps practices.',  
  about:
    'I turn complex business requirements into secure, scalable, and performance-driven software products. I work across backend architecture, authentication systems, API integrations, database design, and responsive frontend development. My focus is building production-ready systems for FinTech and business operations, with strong attention to maintainability, SEO, and user experience.',
  city: 'Cairo, Egypt',
  phone: '+20 155 252 6728',
  email: 'youssabaymn@gmail.com',
  github: 'https://github.com/youssabayman1',
  linkedin: 'https://www.linkedin.com/in/youssab-ayman-5ab9801a7/',
  cv: 'https://drive.google.com/file/d/1mAiOqTVIC7jna0eYCDS2cfyTfrdkfXTe/view?usp=sharing',
}

const whatIDo = [
  {
    title: 'Full Stack Development',
    description: 'Build scalable full stack applications with Next.js and Node.js, delivering high-performance web platforms',
    icon: 'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8L10,17Z',
  },
  {
    title: 'API & Backend Engineering',
    description: 'Develop secure REST APIs with authentication, authorization, and robust backend architecture',
    icon: 'M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z',
  },
  {
    title: 'Modern Dashboard Design',
    description: 'Design modern dashboards and business platforms with intuitive interfaces and data visualization',
    icon: 'M3,3H11V11H3V3M3,13H11V21H3V13M13,3H21V11H13V3M13,13H21V21H13V13Z',
  },
  {
    title: 'AI & Automation',
    description: 'Integrate AI features and automation workflows to enhance productivity and intelligent decision-making',
    icon: 'M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,17V16H9V14H13V13H10A1,1 0 0,1 9,12V9A1,1 0 0,1 10,8H14V9H16V11H12V12H15A1,1 0 0,1 16,13V16A1,1 0 0,1 15,17H11Z',
  },
]

const skills = {
  'Frontend Development': [
    'React.js',
    'Next.js',
    'JavaScript (ES6+)',
    'TypeScript',
    'HTML5 & CSS3',
    'Tailwind CSS',
    'Redux',
    'React Query',
  ],
  'Backend Development': [
    'Node.js',
    'Express.js',
    'RESTful APIs',
    'GraphQL',
    'Microservices',
    'WebSockets',
    'JWT Authentication',
    'OAuth 2.0',
  ],
  'Databases': [
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Redis',
    'Firebase',
    'Supabase',
  ],
  'DevOps & Cloud': [
    'Docker',
    'AWS (EC2, S3, Lambda)',
    'GitHub Actions',
    'CI/CD Pipelines',
    'Coolify',
    'Hostinger',
    'Vercel',
  ],
  'Tools & Technologies': [
    'Git & GitHub',
    'Postman',
    'Swagger/OpenAPI',
    'VS Code',
    'npm/yarn',
    'Webpack/Vite',
  ],
  'Data & Analytics': [
    'Power BI',
    'DAX',
    'Power Query',
    'Excel Advanced',
    'Data Modeling',
  ],
  'AI & Automation': [
    'Python',
    'RAG Systems',
    'MCP Integration',
    'API Integrations',
    'Workflow Automation',
  ],
}

const highlights = [
  {
    title: 'Enterprise CRM & Portal Development',
    description: 'Built Trading CRM and Client Portal platforms with secure workflows, role-based access control, and real-time data synchronization',
    icon: 'M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z',
    color: '#667eea',
  },
  {
    title: 'Scalable API Architecture',
    description: 'Designed and implemented scalable REST APIs with Node.js, MongoDB, Supabase, and Firebase, handling thousands of concurrent requests',
    icon: 'M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z',
    color: '#764ba2',
  },
  {
    title: 'DevOps & CI/CD Excellence',
    description: 'Implemented automated CI/CD pipelines with GitHub Actions and cloud deployments, reducing deployment time by 70% and ensuring zero-downtime releases',
    icon: 'M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M7.5,8.67L9,10.17L11.67,7.5L13.17,9L10.5,11.67L12,13.17L14.67,10.5L16.17,12L13.5,14.67L15,16.17L12.33,18.83L10.83,17.33L8.17,20L6.67,18.5L9.33,15.83L7.83,14.33L5.17,17L3.67,15.5L6.33,12.83L4.83,11.33L7.5,8.67Z',
    color: '#0d7a72',
  },
  {
    title: 'AI-Powered Solutions',
    description: 'Developed intelligent systems with RAG technology and automation workflows, improving response accuracy by 85% and operational efficiency',
    icon: 'M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z',
    color: '#ff8f3f',
  },
]

const projects = [
  {
    title: 'Client Portal System',
    summary:
      'Built a secure client portal with Next.js, Supabase authentication, Swagger API documentation, Strapi CMS, and Firebase push notifications. Integrated third-party messaging services with role management, dashboard analytics, and protected backend APIs for modern operational visibility.',
    stack: ['Next.js', 'Supabase', 'Swagger', 'Strapi', 'Firebase', 'Node.js'],
    link: '#',
  },
  {
    title: 'AI FAQ System',
    summary:
      'Developed an AI-powered question-answering platform using Python and Node.js, implementing RAG and MCP with knowledge base integration for accurate, context-aware responses.',
    stack: ['Python', 'Node.js', 'RAG', 'MCP'],
    link: '#',
  },
  {
    title: 'Tech Yard Website',
    summary:
      'Designed and implemented scalable backend architecture for Apple-focused e-commerce workflows with JWT authentication, RBAC, product catalog APIs, cart operations, and optimized indexing for high-performance search and transactions.',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'JWT'],
    link: '#',
  },
  {
    title: 'Aflamy Website',
    summary:
      'Built a movie discovery platform integrating external APIs for 10,000+ movies, with Redis-based session management reducing authentication latency by 60% and microservices handling 100+ requests per second.',
    stack: ['React', 'Node.js', 'Express', 'Redis'],
    link: '#',
  },
  {
    title: 'E-commerce Platform',
    summary:
      'Developed backend authentication, cart, and checkout workflows with optimized SQL queries for large product datasets and reliable transaction handling.',
    stack: ['Node.js', 'SQL'],
    link: '#',
  },
  {
    title: 'Educare Learning Platform',
    summary:
      'Created RESTful APIs for course and user management, implementing JWT authentication and role-based access control for secure educational workflows.',
    stack: ['Node.js', 'MongoDB', 'JWT', 'RBAC'],
    link: '#',
  },
  {
    title: 'Auto Parts System',
    summary:
      'Built scalable REST APIs and optimized MySQL queries, reducing backend latency by 25% and improving operational performance.',
    stack: ['Node.js', 'Express', 'MySQL'],
    link: '#',
  },
  {
    title: 'Max App',
    summary:
      'Created a desktop application using MVC architecture with C# and SQL Server to manage employee and product data effectively.',
    stack: ['C#', 'MVC', 'SQL Server'],
    link: '#',
  },
  {
    title: 'Supplier Quality Dashboard',
    summary:
      'Built a Power BI quality dashboard using Power Query and DAX to analyze defects, delivery speed, and supplier efficiency from multiple data sources.',
    stack: ['Power BI', 'DAX', 'Power Query'],
    link: '#',
  },
  {
    title: 'Power BI Dashboards',
    summary:
      'Delivered 5+ interactive dashboards used by 100+ employees and automated reporting pipelines, reducing monthly reporting effort by 80%.',
    stack: ['Power BI', 'Excel', 'Data Modeling'],
    link: '#',
  },
]

function App() {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState('email')
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  // Scroll Reveal Animation with Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px', // Trigger slightly before element enters viewport
      threshold: 0.15, // Trigger when 15% of element is visible
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          // Keep observing for smooth re-entry if user scrolls back up
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all elements with reveal class
    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((el) => observer.observe(el))

    // Cleanup on unmount
    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const handleCopy = async () => {
    try {
      const textToCopy = activeTab === 'email' ? portfolio.email : portfolio.phone
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setCopied(false)
  }

  const handleScrollDown = () => {
    const summarySection = document.getElementById('summary')
    if (summarySection) {
      summarySection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="container">
      <nav className="nav-header">
        <div className="nav-container">
          <a href="#home" className="nav-logo">YA</a>
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#summary" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={theme === 'dark'}
                onChange={toggleTheme}
                aria-label="Toggle theme"
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </nav>
      
      <main className="page">
        <header id="home" className="hero main-card reveal">
        <h1>{portfolio.name}</h1>
        <p className="role">{portfolio.title}</p>
        <p className="hero-intro">{portfolio.intro}</p>
        
        <div className="hero-actions-section">
          <a 
            href={portfolio.cv} 
            target="_blank" 
            rel="noreferrer"
            className="cv-button"
            aria-label="Download CV"
          >
            <svg viewBox="0 0 24 24" className="cv-icon" aria-hidden="true">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M10,19L12,15H9V10H15V15L13,19H10Z" />
            </svg>
            <span className="cv-text">Download CV</span>
            <svg viewBox="0 0 24 24" className="cv-arrow" aria-hidden="true">
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </a>
        
        <div className="hero-contact-row">
          <div className="hero-social-card" aria-label="Social links card">
            <a
              className="social-link"
              href={portfolio.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 17.34V9.73H5.81V17.34H8.34ZM7.08 8.69A1.47 1.47 0 1 0 7.08 5.75A1.47 1.47 0 0 0 7.08 8.69ZM18.19 17.34V13.18C18.19 10.95 17 9.56 14.97 9.56C14 9.56 13.35 10.1 13.08 10.6V9.73H10.56V17.34H13.08V13.57C13.08 12.58 13.27 11.61 14.5 11.61C15.71 11.61 15.73 12.74 15.73 13.63V17.34H18.19Z" />
              </svg>
              <span className="linkedin-label">LinkedIn</span>
            </a>
            <a
              className="social-link"
              href={portfolio.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" />
              </svg>
              <span className="linkedin-label">GitHub</span>
            </a>
          </div>

          <div className="contact-widget" aria-label="Contact copy control">
            <div className="contact-tabs">
              <button
                type="button"
                className={`contact-tab ${activeTab === 'email' ? 'active' : ''}`}
                onClick={() => handleTabChange('email')}
              >
                Email
              </button>
              <button
                type="button"
                className={`contact-tab ${activeTab === 'phone' ? 'active' : ''}`}
                onClick={() => handleTabChange('phone')}
              >
                Phone
              </button>
            </div>
            <div className="input-wrapper">
              {activeTab === 'email' ? (
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20 5A2 2 0 0 1 22 7V17A2 2 0 0 1 20 19H4A2 2 0 0 1 2 17V7A2 2 0 0 1 4 5H20ZM20 8.24L12 13.57L4 8.24V17H20V8.24Z" />
                </svg>
              ) : (
                <div className="icon-group">
                  <svg
                    className="icon-flag"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    title="Egypt"
                  >
                    <rect width="24" height="8" y="0" fill="#CE1126"/>
                    <rect width="24" height="8" y="8" fill="#FFFFFF"/>
                    <rect width="24" height="8" y="16" fill="#000000"/>
                    <g transform="translate(12, 12)">
                      <path d="M-2,-2 L2,-2 L2,2 L-2,2 Z" fill="#D4AF37" opacity="0.9"/>
                      <circle cx="0" cy="0" r="1.2" fill="none" stroke="#D4AF37" stroke-width="0.4"/>
                    </g>
                  </svg>
                  <svg
                    className="icon icon-small"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    title="Phone"
                  >
                    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" />
                  </svg>
                  <svg
                    className="icon icon-small"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    title="WhatsApp"
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
                  </svg>
                </div>
              )}
              <input
                className="input"
                value={activeTab === 'email' ? portfolio.email : portfolio.phone}
                readOnly
                aria-label={activeTab === 'email' ? 'Email' : 'Phone'}
              />
              <button type="button" className="Subscribe-btn" onClick={handleCopy}>
                <span className="arrow">➜</span>
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </div>
        </div>
        
        <button 
          className="scroll-indicator" 
          onClick={handleScrollDown}
          aria-label="Scroll down to content"
        >
          <svg viewBox="0 0 24 24" className="scroll-arrow">
            <path d="M7.41 8.58L12 13.17L16.59 8.58L18 10L12 16L6 10L7.41 8.58Z" />
          </svg>
        </button>
      </header>

      <section id="summary" className="panel reveal reveal-delay-1">
        <div className="summary-header">
          <h2>Professional Summary</h2>
          <div className="summary-badge">
            <svg viewBox="0 0 24 24" className="summary-icon" aria-hidden="true">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,17V16H9V14H13V13H10A1,1 0 0,1 9,12V9A1,1 0 0,1 10,8H14V9H16V11H12V12H15A1,1 0 0,1 16,13V16A1,1 0 0,1 15,17H11Z" />
            </svg>
            <span>Full Stack Expert</span>
          </div>
        </div>
        
        <div className="summary-content">
          <div className="summary-main">
            <p className="summary-text">{portfolio.summary}</p>
          </div>
          
          <div className="summary-highlights">
            <div className="summary-stat">
              <svg viewBox="0 0 24 24" className="stat-icon" aria-hidden="true">
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M7,13H17V11H7" />
              </svg>
              <div className="stat-content">
                <span className="stat-title">Specialization</span>
                <span className="stat-value">Next.js & Node.js</span>
              </div>
            </div>
            
            <div className="summary-stat">
              <svg viewBox="0 0 24 24" className="stat-icon" aria-hidden="true">
                <path d="M12,15C7.58,15 4,16.79 4,19V21H20V19C20,16.79 16.42,15 12,15M8,9A4,4 0 0,0 12,13A4,4 0 0,0 16,9M11.5,2C11.2,2 11,2.21 11,2.5V5.5H10V3C10,3 7.75,3.86 7.75,6.75C7.75,6.75 7,6.89 7,8H17C16.95,6.89 16.25,6.75 16.25,6.75C16.25,3.86 14,3 14,3V5.5H13V2.5C13,2.21 12.81,2 12.5,2H11.5Z" />
              </svg>
              <div className="stat-content">
                <span className="stat-title">Expertise</span>
                <span className="stat-value">CRM & Cloud Systems</span>
              </div>
            </div>
            
            <div className="summary-stat">
              <svg viewBox="0 0 24 24" className="stat-icon" aria-hidden="true">
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z" />
              </svg>
              <div className="stat-content">
                <span className="stat-title">Focus</span>
                <span className="stat-value">DevOps & Security</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-i-do" className="panel reveal reveal-delay-2">
        <h2>What I Do</h2>
        <div className="what-i-do-grid">
          {whatIDo.map((item) => (
            <div key={item.title} className="what-i-do-card">
              <div className="what-i-do-icon-wrapper">
                <svg viewBox="0 0 24 24" className="what-i-do-icon" aria-hidden="true">
                  <path d={item.icon} />
                </svg>
              </div>
              <div className="what-i-do-content">
                <h3 className="what-i-do-title">{item.title}</h3>
                <p className="what-i-do-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="panel reveal reveal-delay-2">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h3 className="skill-category-title">{category}</h3>
              <ul className="skill-tags">
                {skillList.map((skill) => (
                  <li key={skill} className="skill-tag">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="highlights" className="panel reveal reveal-delay-3">
        <h2>Professional Highlights</h2>
        <div className="highlights-grid">
          {highlights.map((item) => (
            <div key={item.title} className="highlight-card">
              <div className="highlight-icon-wrapper" style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)` }}>
                <svg viewBox="0 0 24 24" className="highlight-icon" aria-hidden="true">
                  <path d={item.icon} />
                </svg>
              </div>
              <div className="highlight-content">
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-description">{item.description}</p>
              </div>
              <div className="highlight-badge">
                <svg viewBox="0 0 24 24" className="badge-icon" aria-hidden="true">
                  <path d="M12,2L15.09,8.26L22,9.27L17,14.14L18.18,21.02L12,17.77L5.82,21.02L7,14.14L2,9.27L8.91,8.26L12,2Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="panel reveal reveal-delay-3">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
    </div>
  )
}

export default App
