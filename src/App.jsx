import "./App.css";
import { useEffect, useState, useRef } from "react";
import profileImg from "./assets/profile.jpg";

function App() {
  /* ===== ROLE ANIMATION ===== */
  const roles = ["Full Stack Developer", "Software Engineer"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  /* ===== RESUME SCROLL & TOGGLE ===== */
  const resumeRef = useRef(null);
  const [showResume, setShowResume] = useState(false);

  const handleViewResume = () => {
    setShowResume(true);
    setTimeout(() => {
      resumeRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  /* ===== EDUCATION ANIMATION ===== */
  const eduRef = useRef(null);
  const [eduVisible, setEduVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEduVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (eduRef.current) observer.observe(eduRef.current);

    return () => observer.disconnect();
  }, []);

  /* ===== SKILLS ANIMATION ===== */
  const skillsRef = useRef(null);
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo">Swasthika P S</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li>
            <a
              href="#education"
              onClick={() => {
                setEduVisible(false);
                setTimeout(() => setEduVisible(true), 50);
              }}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => {
                setSkillsVisible(false);
                setTimeout(() => setSkillsVisible(true), 50);
              }}
            >
              Skills
            </a>
          </li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HOME */}
      <section className="home" id="home">
        <div className="home-wrapper">
          {/* LEFT TEXT */}
          <div className="home-content">
            <h1>
              Hello, I'm <span>Swasthika P S</span>
            </h1>

            <div className="role-wrapper">
              <span key={roleIndex} className="role-text">
                {roles[roleIndex]}
              </span>
            </div>

            <p>
Aspiring software engineer and full-stack developer with a passion for problem-solving and building elegant solutions. Strong foundation in Data Structures and Algorithms, with keen interest in turning ideas into functional applications.            </p>

            <div className="home-buttons">
              <button className="btn outline" onClick={handleViewResume}>
                View Resume
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="home-image">
            <img src={profileImg} alt="Swasthika P S" />
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="section" id="about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            A Computer Science student at Amrita Vishwa Vidyapeetham with strong fundamentals in Data Structures, Algorithms, DBMS, Operating Systems, and Computer Networks. I'm passionate about software development and interested in exploring web technologies to build scalable, user-centric applications.
            My academic projects have given me practical experience in problem-solving, software design, and technical implementation. I bring strong analytical thinking, attention to detail, and a collaborative mindset to every challenge.
            As a continuous learner, I'm eager to grow my technical skills and contribute to teams creating impactful software solutions.
          </p>
        </div>
      </section>

      <section
        ref={eduRef}
        id="education"
        className={`section education ${eduVisible ? "edu-show" : ""}`}
      >
        <h2>Education</h2>

        <div className="education-timeline">
          {/* Class 10 */}
          <div 
            className={`edu-card ${eduVisible ? "active" : ""}`}
            style={{ transitionDelay: '0s' }}
          >
            <span className="edu-dot"></span>
            <div className="edu-box">
              <h3>Secondary (CBSE)</h3>
              <p className="edu-year">2020 – 2021</p>
              <p>Kathir Vidyaa Mandhir</p>
              <strong>93.8%</strong>
            </div>
          </div>

          {/* Class 12 */}
          <div 
            className={`edu-card ${eduVisible ? "active" : ""}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <span className="edu-dot"></span>
            <div className="edu-box">
              <h3>Senior Secondary (CBSE)</h3>
              <p className="edu-year">2021 – 2023</p>
              <p>Sri Chaitanya Techno School</p>
              <strong>90.6%</strong>
            </div>
          </div>

          {/* College */}
          <div 
            className={`edu-card ${eduVisible ? "active" : ""}`}
            style={{ transitionDelay: '0.4s' }}
          >
            <span className="edu-dot"></span>
            <div className="edu-box">
              <h3>B.Tech – Computer Science</h3>
              <p className="edu-year">2023 – Present</p>
              <p>Amrita Vishwa Vidyapeetham</p>
              <strong>CGPA: 8.31</strong>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={skillsRef}
        id="skills"
        className={`section skills ${skillsVisible ? "skills-show" : ""}`}
      >
        <div className="container">
          <h2>Skills</h2>

          <div className="skills-grid">
            {/* C++ */}
            <div 
              className={`skill-card ${skillsVisible ? "active" : ""}`}
              style={{ transitionDelay: '0s' }}
              onClick={(e) => e.currentTarget.classList.add('clicked')}
            >
              <i className="devicon-cplusplus-plain colored"></i>
              <h3>C++</h3>
              <p>
                Strong in object-oriented programming and competitive
                problem solving.
              </p>
            </div>

            {/* Python */}
            <div 
              className={`skill-card ${skillsVisible ? "active" : ""}`}
              style={{ transitionDelay: '0.12s' }}
              onClick={(e) => e.currentTarget.classList.add('clicked')}
            >
              <i className="devicon-python-plain colored"></i>
              <h3>Python</h3>
              <p>
                Used for scripting, data handling, and algorithmic
                problem solving.
              </p>
            </div>

            {/* C */}
            <div 
              className={`skill-card ${skillsVisible ? "active" : ""}`}
              style={{ transitionDelay: '0.24s' }}
              onClick={(e) => e.currentTarget.classList.add('clicked')}
            >
              <i className="devicon-c-plain colored"></i>
              <h3>C</h3>
              <p>
                Experience in programming, problem solving and embedded
                systems development.
              </p>
            </div>

            {/* Java */}
            <div 
              className={`skill-card ${skillsVisible ? "active" : ""}`}
              style={{ transitionDelay: '0.36s' }}
              onClick={(e) => e.currentTarget.classList.add('clicked')}
            >
              <i className="devicon-java-plain colored"></i>
              <h3>Java</h3>
              <p>
                Familiar with core Java concepts including OOP principles.
              </p>
            </div>

            {/* SQL */}
            <div 
              className={`skill-card ${skillsVisible ? "active" : ""}`}
              style={{ transitionDelay: '0.48s' }}
              onClick={(e) => e.currentTarget.classList.add('clicked')}
            >
              <i className="devicon-mysql-plain colored"></i>
              <h3>SQL</h3>
              <p>
                Database querying, joins, and relational data
                management.
              </p>
            </div>

            {/* HTML */}
            <div 
              className={`skill-card ${skillsVisible ? "active" : ""}`}
              style={{ transitionDelay: '0.6s' }}
              onClick={(e) => e.currentTarget.classList.add('clicked')}
            >
              <i className="devicon-html5-plain colored"></i>
              <h3>HTML</h3>
              <p>
                Semantic markup and accessible page structuring.
              </p>
            </div>

            {/* CSS */}
            <div 
              className={`skill-card ${skillsVisible ? "active" : ""}`}
              style={{ transitionDelay: '0.72s' }}
              onClick={(e) => e.currentTarget.classList.add('clicked')}
            >
              <i className="devicon-css3-plain colored"></i>
              <h3>CSS</h3>
              <p>
                Responsive layouts, animations, and modern UI design.
              </p>
            </div>

            {/* JavaScript */}
            <div 
              className={`skill-card ${skillsVisible ? "active" : ""}`}
              style={{ transitionDelay: '0.84s' }}
              onClick={(e) => e.currentTarget.classList.add('clicked')}
            >
              <i className="devicon-javascript-plain colored"></i>
              <h3>JavaScript</h3>
              <p>
                Interactive frontend development and API integration.
              </p>
            </div>

            {/* React */}
            <div 
              className={`skill-card ${skillsVisible ? "active" : ""}`}
              style={{ transitionDelay: '0.96s' }}
              onClick={(e) => e.currentTarget.classList.add('clicked')}
            >
              <i className="devicon-react-original colored"></i>
              <h3>React</h3>
              <p>
                Component-based UI development with hooks and state
                management.
              </p>
            </div>

            {/* Node.js */}
            <div 
              className={`skill-card ${skillsVisible ? "active" : ""}`}
              style={{ transitionDelay: '1.08s' }}
              onClick={(e) => e.currentTarget.classList.add('clicked')}
            >
              <i className="devicon-nodejs-plain colored"></i>
              <h3>Node.js</h3>
              <p>
                Backend APIs and server-side application development.
              </p>
            </div>

            {/* MongoDB */}
            <div 
              className={`skill-card ${skillsVisible ? "active" : ""}`}
              style={{ transitionDelay: '1.2s' }}
              onClick={(e) => e.currentTarget.classList.add('clicked')}
            >
              <i className="devicon-mongodb-plain colored"></i>
              <h3>MongoDB</h3>
              <p>
                NoSQL database design and data modeling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="section" id="projects">
        <div className="container">
          <h2>Projects</h2>

         <div className="projects-grid">
  <div className="project-card">
    <h3>Hall Booking Portal</h3>
    <p>
      Developed a web-based booking system for college administration with automated conflict detection to prevent double bookings. Implemented role-based access control and an admin analytics dashboard for efficient management.
    </p>
    <p style={{ color: '#fff', marginTop: '1rem' }}>
    <strong>Tech Stack:</strong> JavaScript, HTML, CSS, Node.js, Express, MongoDB
  </p>
  </div>

           <div className="project-card">
  <h3>Health Monitor System</h3>
  <p>
    Developed a real-time health monitoring system using STM32F401 microcontroller. Integrated sensors to measure heart rate and body temperature, with readings displayed on an LCD screen and LED-based alert system for abnormal values.
  </p>
  <p style={{ color: '#fff', marginTop: '1rem' }}>
    <strong>Tech Stack:</strong>  C, STM32F401, Embedded Systems
  </p>
</div>
          </div>
        </div>
      </section>

      {/* ================= RESUME ================= */}
      {showResume && (
        <section ref={resumeRef} className="section resume">
          <div className="container">
            <h2>Resume</h2>

            <div className="resume-box">
              <iframe
                src="/resume.pdf"
                title="Resume"
                className="resume-frame"
              />
            </div>

            <div className="resume-actions">
              <a
                href="/resume.pdf"
                download
                className="btn primary"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>
      )}
      {/* ================= CONTACT ================= */}
<section className="section contact" id="contact">
  <div className="contact-wrapper">

    {/* LEFT INFO */}
    <div className="contact-info">
      <h2>Get In Touch</h2>
      <p className="contact-sub">
        Let’s discuss or just say hello!
      </p>

      <div className="contact-item">
  <i className="fa-solid fa-envelope contact-icon"></i>
  <div>
    <h4>Email</h4>
    <p>
      <a 
        href="mailto:swasthikaponnusamy@gmail.com"
        style={{ color: 'var(--text-secondary)' }}
      >
        swasthikaponnusamy@gmail.com
      </a>
    </p>
  </div>
</div>

      <div className="contact-item">
  <i className="fa-brands fa-github contact-icon"></i>
  <div>
    <h4>GitHub</h4>
    <p>
      <a 
        href="https://github.com/Swasthika-P-S" 
        target="_blank" 
        rel="noreferrer"
        style={{ color: 'var(--text-secondary)' }}
      >
        github.com/Swasthika-P-S
      </a>
    </p>
  </div>
</div>

      <div className="contact-item">
        <i className="fa-solid fa-phone contact-icon"></i>
        <div>
          <h4>Phone</h4>
          <p>+91 93623 56729</p>
        </div>
      </div>

      <div className="contact-item">
        <i className="fa-solid fa-location-dot contact-icon"></i>
        <div>
          <h4>Location</h4>
          <p>Coimbatore, India</p>
        </div>
      </div>

      
    </div>

    {/* RIGHT FORM */}
    <div className="contact-form">
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="text" placeholder="Subject" />
        <textarea rows="4" placeholder="Your Message"></textarea>

        <button type="submit" className="btn primary">
          Send Message
        </button>
      </form>
    </div>

  </div>
</section>

 
    </>
  );
}

export default App;