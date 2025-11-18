import "./App.css";
import { Fade, Slide } from "react-awesome-reveal";
import { useState } from "react";
import ProjectModal from "./components/ProjectModal";
import ParticlesBackground from "./components/ParticlesBackground";
import coversyImage from "./assets/coversy.png";
import portfolioImage from "./assets/portfolio.png";
import frostlineImage from "./assets/1.png";
import odinImage from "./assets/odin.png";
import heliosImage from "./assets/helios.png"; 


function App() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Project data with detailed information
    const projects = [
        {
            id: 1,
            title: "Coversy",
            description:
                "Full-stack application for instructor shift scheduling, shift exchange, and payroll management system.",
            fullDescription:
                " Coversy is a comprehensive full-stack application designed to streamline instructor shift scheduling, shift exchanges, and payroll management. Built with React for the frontend and Node.js with Express for the backend, it features a user-friendly interface that allows instructors to easily manage their shifts, request exchanges, and track their earnings. The application uses MongoDB for data storage and JWT for secure authentication. The responsive design ensures a seamless experience across devices.",
            image: coversyImage,
            technologies: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "SCSS",
                "Redux",
                "AWS S3",
            ],
            links: {
                live: "https://coversy.vercel.app/",
                github: "https://github.com/drewxs/coversy",
            },
        },
        {
            id: 2,
            title: "Frostline Solution App",
            description:
                "An app that help user to get the details of their orders, track details of their orders, and the details of the devices.",
            fullDescription:
                "Frostline Solution App is a mobile application designed to help users manage their orders and track device details. Built with Flutter, it provides a smooth and intuitive user experience. The app allows users to view their order history, track the status of current orders, and access detailed information about their devices. It features a clean design, easy navigation, and real-time updates on order status. The backend is powered by Python, ensuring robust data management and security.",
            image: frostlineImage,
            technologies: [
                "Flutter",
                "iOS",
                "Python",
                "Xcode",
                "Dart",
                "Firebase",
                "TestFlight",
            ],
            links: {
                live: "https://testflight.apple.com/join/BFBXV3hz",
            },
        },
        {
            id: 3,
            title: "Odin AI",
            description:
                "Intelligent conversational assistant for natural medicine education with local LLM deployment and 100% safety compliance.",
            fullDescription:
                "Odin AI is an intelligent conversational assistant designed for natural medicine education, ensuring 100% safety compliance and professional boundaries. Built with Python and leveraging CUDA for performance, it features local LLM deployment for conversational experiences without external APIs. The system achieved 100% success rate across comprehensive natural medicine test suites and includes an intelligent auto-tuning system for optimal response quality. Features robust error handling with topic-specific fallback responses and an extensive testing framework with automated quality assessment. The user experience is focused on engagement and education while maintaining ethical guidelines for health information delivery.",
            image: odinImage,
            technologies: ["Python", "JSON", "CUDA", "LLM", "NLP"],
            links: {
                github: "https://github.com/Tomnguyen2604/Odin_AI", 
            },
        },
        {
            id: 4,
            title: "Helios",
            description:
                "Full-stack real-time financial dashboard with AI-powered market insights using fine-tuned GPT-2 model.",
            fullDescription:
                "Helios is a comprehensive full-stack real-time financial dashboard featuring a React frontend and FastAPI backend. The application provides live stock tracking with 3-second auto-refresh and interactive Chart.js visualizations for multi-stock trend analysis. It features a fine-tuned GPT-2 model trained on financial datasets using Hugging Face Transformers and PyTorch, implementing a context-aware AI chat assistant with optimized generation parameters for intelligent market insights. The system integrates yfinance API for real-time market data retrieval, custom React hooks for efficient state management, and a responsive UI with SCSS featuring dark theme, gradient effects, and smooth animations. Includes a smart alert system with categorized notifications, professional modal interfaces for stock selection with search functionality, and optimized performance through lazy loading and debounced operations. Architected with component-based structure, separation of concerns, comprehensive error handling, and CORS-enabled REST API endpoints.",
            image: heliosImage,
            technologies: [
                "React",
                "Vite",
                "SCSS",
                "Chart.js",
                "FastAPI",
                "PyTorch",
                "GPT-2",
                "yFinance",
            ],
            links: {
                github: "https://github.com/Tomnguyen2604/helios-app",
            },
        },
        {
            id: 5,
            title: "Portfolio Website",
            description: "Minimalist portfolio showcasing development work",
            fullDescription:
                "A clean, minimalist portfolio website built with React and modern CSS. Features smooth scroll animations, dark mode design, responsive layout, and optimized performance. Showcases projects with detailed modals, contact integration, and professional presentation of skills and experience.",
            image: portfolioImage,
            technologies: ["React", "CSS3", "Vite", "React Awesome Reveal"],
            links: {
                live: "https://website-orpin-two-63.vercel.app/",
            },
        },
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setIsModalOpen(false);
    };
    return (
        <div className="app">
            {/* Particles Background */}
            <ParticlesBackground />

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <Fade direction="up" triggerOnce duration={1000}>
                        <div className="hero-text">
                            <h1>Hoa Nguyen</h1>
                            <p className="hero-subtitle">
                                Full Stack Developer
                            </p>
                            <p className="hero-description">
                                Passionate about creating digital experiences
                                that combine clean design with powerful
                                functionality.
                            </p>
                        </div>
                    </Fade>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <div className="container">
                    <div className="section-grid">
                        <Fade
                            direction="left"
                            triggerOnce
                            duration={800}
                            delay={200}
                        >
                            <div className="grid-item">
                                <h2>About</h2>
                                <p>
                                    I'm a software developer with a passion for
                                    creating meaningful digital experiences. I
                                    specialize in modern web technologies and
                                    love solving complex problems with elegant
                                    solutions.
                                </p>
                            </div>
                        </Fade>
                        <Fade
                            direction="right"
                            triggerOnce
                            duration={800}
                            delay={400}
                        >
                            <div className="grid-item">
                                <h3>Skills</h3>
                                <div className="skills-list">
                                    <span>React</span>
                                    <span>JavaScript</span>
                                    <span>TypeScript</span>
                                    <span>Node.js</span>
                                    <span>Python</span>
                                    <span>CSS</span>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects-section">
                <div className="container">
                    <Fade direction="up" triggerOnce duration={800}>
                        <h2>Selected Projects</h2>
                    </Fade>
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <Fade
                                key={project.id}
                                direction="up"
                                triggerOnce
                                duration={600}
                                delay={100 * (index + 1)}
                            >
                                <div
                                    className="project-card clickable"
                                    onClick={() => openModal(project)}
                                >
                                    <div className="project-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-tech">
                                        {project.technologies
                                            .slice(0, 2)
                                            .map((tech, techIndex) => (
                                                <span key={techIndex}>
                                                    {tech}
                                                </span>
                                            ))}
                                    </div>
                                    <div className="project-cta">
                                        <span>Click to view details</span>
                                    </div>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
                <div className="container">
                    <Fade direction="up" triggerOnce duration={800}>
                        <div className="contact-content">
                            <h2>Let's Work Together</h2>
                            <p>
                                I'm always interested in new opportunities and
                                challenging projects. Let's create something
                                great.
                            </p>
                            <div className="contact-links">
                                <a href="mailto:tomnguyen2604@gmail.com">Email</a>
                                <a
                                    href="https://www.linkedin.com/in/giahoanguyen/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com/tomnguyen2604"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </div>
    );
}
export default App;
