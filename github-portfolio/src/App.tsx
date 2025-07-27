import { Helmet } from 'react-helmet';
import './styles/App.css';

const workHistory = [
  {
    company: "TechCorp Solutions",
    role: "Lead Fullstack Developer",
    years: "2021 - Present",
    highlights: [
      "Architected scalable microservices on AWS. >netCore",
      "Mentored 8+ engineers and led code reviews.",
      "Integrated CI/CD and DevOps best practices."
    ]
  },
  {
    company: "Innovatech Labs",
    role: "Senior Software Engineer",
    years: "2017 - 2021",
    highlights: [
      "Built real-time analytics dashboards in React/Redux.",
      "Migrated legacy systems to Node.js and TypeScript.",
      "Championed automated testing and code quality."
    ]
  },
  {
    company: "WebStart Inc.",
    role: "Fullstack Developer",
    years: "2013 - 2017",
    highlights: [
      "Developed REST APIs and SPAs for fintech clients.",
      "Optimized SQL/NoSQL databases for performance."
    ]
  }
];

const education = [
  {
    degree: "B.Tech, Information Technology",
    institution: "Anna University",
    year: "2011 - 2014"
  },
  {
    degree: "Diploma, Computer Engineering",
    institution: "Directorate of Technical Board, Tamil Nadu",
    year: "2009 - 2011"
  },
];

const currentProject = {
  name: "Fleet Management System",
  desc: "Building a WPF application that adminstrating the containers and its location with activities."
  // link: "https://github.com/yourusername/ai-devops-assistant"
};

const learning = [
  "AI/ML (LLMs, Prompt Engineering)", "C#-12", "DotNetCore 9"
];

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>VENKATESH | Developer Portfolio</title>
        <meta name="description" content="Venkat's portfolio - 12+ years Fullstack Developer (React, Node.js, AWS, DevOps). Work history, projects, skills, resume, and more." />
        <meta name="keywords" content="Venkat, Fullstack Developer, React, Node.js, AWS, DevOps, Portfolio, Resume, TypeScript, Senior Developer" />
        <meta name="author" content="Venkat" />
      </Helmet>
      <header className="header">
        <h1> </h1>
        <p className="subtitle"></p>
      </header>
      <main>
        <section className="profile-section">
          <div className="profile-card">
            <img
              className="avatar"
              src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
              alt="Venkat"
            />
            <h2>VENKATESH A</h2>
            <p>
              Experienced in architecting and delivering robust, scalable solutions for startups and enterprises. 
              Strong focus on clean code, automation, and continuous learning.
            </p>
            {/* <ul className="about-list">
              <li><strong>Email:</strong> venkatlapc@email.com</li>
              <li><strong>Location:</strong> Chennai and Bangalore, India</li>
              <li><strong>Practicing:</strong> AI + .Net with Prompt Engineering</li>
            </ul> */}
            <div className="header-links">
              <a href="https://www.linkedin.com/in/venkatesh-a-67b92483" target="_blank" rel="noopener noreferrer" className="linkedin-btn">LinkedIn</a>
              <a href="/Venkat_Resume.pdf" download className="resume-btn">Download Resume</a>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Current Project</h2>
          <div className="project-highlight">
            <div className="project-title">{currentProject.name}</div>
            <div className="project-desc">{currentProject.desc}</div>
            {/* <a className="project-link" href={currentProject.link} target="_blank" rel="noopener noreferrer">View on GitHub</a> */}
          </div>
        </section>

        {/* <section className="section">
          <h2>Work History</h2>
          <ul className="timeline">
            {workHistory.map((job, idx) => (
              <li key={idx} className="timeline-item">
                <div className="timeline-title">{job.role} @ {job.company}</div>
                <div className="timeline-years">{job.years}</div>
                <ul className="timeline-highlights">
                  {job.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </li>
            ))}
          </ul>
        </section> */}

        <section className="section">
          <h2>Education</h2>
          <ul className="education-list">
            {education.map((edu, idx) => (
              <li key={idx}>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-inst">{edu.institution}</div>
                <div className="edu-year">{edu.year}</div>
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2>GitHub Projects</h2>
          <ul className="projects-list">
            <li className="project-card">
              <div className="project-title">MAUI</div>
              <div className="project-desc">MAUI - Application to process the published files. </div>
              <a className="project-link" href="https://github.com/Enginnervenkat/MAUI_Repo.git" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </li>
            <li className="project-card">
              <div className="project-title">Design Pattern</div>
              <div className="project-desc">Design Pattern  repo for understanding the design pattern. Implemented Factory method.</div>
              <a className="project-link" href="https://github.com/Enginnervenkat/DesignPattern.git" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </li>
          </ul>
        </section>

        <section className="section">
          <h2>Past Projects</h2>
          <ul className="projects-list">
            <li className="project-card">
              <div className="project-title">WEBEX - ERP</div>
              <div className="project-desc">WEBEX - ERP for ERP project for commercial purpose and overall analysis, raw material into 
final product. </div>
              {/* <a className="project-link" href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">View on GitHub</a> */}
            </li>
            <li className="project-card">
              <div className="project-title">Mobile Attendance</div>
              <div className="project-desc">Mobile Attendance to maintain the employee attendance when entering the regional 
Geo-Fencing arena.</div>
              {/* <a className="project-link" href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">View on GitHub</a> */}
            </li>
            <li className="project-card">
              <div className="project-title">School Bus Track</div>
              <div className="project-desc">School Bus Track for tracking the school buses which means gives the bus location and 
estimated arrival time to home/school. Once reached school/home can get notification. Can get 
history of the notification and events.</div>
              {/* <a className="project-link" href="https://github.com/yourusername/project3" target="_blank" rel="noopener noreferrer">View on GitHub</a> */}
            </li>
          </ul>
        </section>
            
        <section className="section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li className="skill-badge">JavaScript</li>
          <li className="skill-badge">TypeScript</li>
          <li className="skill-badge">React</li>
          <li className="skill-badge">DotNetCore</li>
          <li className="skill-badge">MAUI</li>
          <li className="skill-badge">Sql</li>
          <li className="skill-badge">WPF</li>
          <li className="skill-badge">Micro Services</li>
          <li className="skill-badge">OpenAi-Turbo</li>
          <li className="skill-badge">REST Api</li>
          <li className="skill-badge">C#</li>
          <li className="skill-badge">Node.js</li>
          <li className="skill-badge">GraphQL</li>
          <li className="skill-badge">MongoDB</li>
          <li className="skill-badge">PostgreSQL</li>
          <li className="skill-badge">Mentoring</li>
        </ul>
        </section>
            
        <section className="section">
          <h2>Practicing</h2>
          <ul className="skills-list">
            {learning.map((item, idx) => (
              <li key={idx} className="skill-badge">{item}</li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="footer">
        © 2025 VENKAT | Developer Portfolio
      </footer>
    </div>
  );
}

export default App;
