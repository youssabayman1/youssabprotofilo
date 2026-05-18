import { useState } from 'react'

const portfolio = {
  name: 'Youssab Ayman',
  title: 'Full Stack Developer (Next.js, Node.js)',
  role: 'Full Stack Developer (Next.js, Node.js)',
  tagline:
    'Building scalable full stack products where clean architecture meets intelligent automation.',
  intro:
    'I am a Full Stack Developer focused on building reliable, scalable, and user-centered digital products. I combine strong backend engineering with modern frontend execution to deliver high-performance platforms, from client portals and CRMs to AI-powered systems.',
  summary:
    'Full Stack Developer specializing in Next.js, Node.js, and cloud-native applications. Expert in building secure CRM systems, client portals, and RESTful APIs with modern DevOps practices.',  
  about:
    'I turn complex business requirements into secure, scalable, and performance-driven software products. I work across backend architecture, authentication systems, API integrations, database design, and responsive frontend development. My focus is building production-ready systems for FinTech and business operations, with strong attention to maintainability, SEO, and user experience.',
  city: 'Cairo, Egypt',
  phone: '+20 155 252 6728',
  email: 'youssabaymn@gmail.com',
  github: 'https://github.com/youssabayman1',
  linkedin: 'https://www.linkedin.com/in/youssab-ayman-5ab9801a7/',
}

const whatIDo = [
  'Build scalable full stack applications with Next.js and Node.js',
  'Develop secure REST APIs with authentication and authorization',
  'Design modern dashboards and business platforms',
  'Integrate AI features and automation workflows',
]

const services = [
  'Full Stack Development',
  'API & Backend Engineering',
  'CRM & Dashboard Development',
  'AI Integration & Automation',
  'DevOps & Cloud Deployment',
]

const techStack = [
  'Node.js',
  'React.js',
  'Express.js',
  'MongoDB',
  'Firebase',
  'Supabase',
  'REST APIs',
  'Docker',
  'AWS',
  'GitHub Actions',
  'Coolify',
  'Hostinger',
  'Postman',
  'Swagger/OpenAPI',
  'Power BI',
]

const highlights = [
  'Built Trading CRM and Client Portal platforms with secure workflows',
  'Designed scalable REST APIs with Node.js, MongoDB, Supabase, and Firebase',
  'Implemented CI/CD pipelines with GitHub Actions and cloud deployments',
  'Developed AI-powered systems with RAG and automation workflows',
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

  return (
    <main className="page">
      <header className="hero main-card reveal">
        <h1>{portfolio.name}</h1>
        <p className="role">{portfolio.title}</p>
        <p className="tagline">{portfolio.tagline}</p>
        <p className="tagline">{portfolio.intro}</p>
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
      </header>

      <section className="panel reveal reveal-delay-1">
        <h2>Professional Summary</h2>
        <p>{portfolio.summary}</p>
      </section>

      <section className="panel reveal reveal-delay-2">
        <h2>What I Do</h2>
        <ul className="content-list">
          {whatIDo.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="panel reveal reveal-delay-2">
        <h2>Services</h2>
        <ul className="skill-list">
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>

      <section className="panel reveal reveal-delay-2">
        <h2>Tech Stack</h2>
        <ul className="skill-list">
          {techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>

      <section className="panel reveal reveal-delay-3">
        <h2>Professional Highlights</h2>
        <ul className="content-list">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="panel reveal reveal-delay-3">
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
  )
}

export default App
