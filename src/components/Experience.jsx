import { Fade } from "react-awesome-reveal";

const Expericance = () => {
    const tech_stack = [
        { name: "Java", logo: "/logos/java.png" },
        { name: "JavaScript", logo: "/logos/javascript.png" },
        { name: "Python", logo: "/logos/python.png" },
        { name: "React.js", logo: "/logos/react.png" },
        { name: "Node.js", logo: "/logos/node.png" },
        { name: "MySQL", logo: "/logos/mysql.png" },
        { name: "MongoDB", logo: "/logos/mongodb.png" },
    ];
    return (
        <div className="experience-container">
            <Fade triggerOnce duration={2000}>
                <div className="section-header">
                    <h1>/experience</h1>
                </div>
            </Fade>
            <div className="skills-container">
                <ul className="tech-stack">
                    {tech_stack.map((item, i) => (
                        <Fade key={i} triggerOnce duration={2000} delay={i * 5}>
                            <li
                                key={item.name}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                }}
                            >
                                <img
                                    src={item.logo}
                                    alt={item.name + " logo"}
                                    style={{ width: "28px", height: "28px" }}
                                />
                                {item.name}
                            </li>
                        </Fade>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default Expericance;
