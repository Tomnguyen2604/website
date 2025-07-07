import "./App.css";
import { Fade, Slide } from "react-awesome-reveal";
import { useState } from "react";
import ProjectModal from "./components/ProjectModal";
import ParticlesBackground from "./components/ParticlesBackground";

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
            image: "/src/assets/coversy.png",
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
            image: "/src/assets/1.png",
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
            title: "Portfolio Website",
            description: "Minimalist portfolio showcasing development work",
            fullDescription:
                "A clean, minimalist portfolio website built with React and modern CSS. Features smooth scroll animations, dark mode design, responsive layout, and optimized performance. Showcases projects with detailed modals, contact integration, and professional presentation of skills and experience.",
            image: "https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Portfolio+Website",
            technologies: ["React", "CSS3", "Vite", "React Awesome Reveal"],
            links: {
                live: "https://your-portfolio.com",
                github: "https://github.com/yourusername/portfolio",
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
                                <a href="mailto:hoa@example.com">Email</a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com"
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
