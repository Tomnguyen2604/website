import { Fade } from "react-awesome-reveal";

const Expericance = () => {
    const tech_stack = [
        "Java",
        "JavaScript",
        "Python",
        "React.js",
        "Node.js",
        "MySQL",
        "MongoDB",
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
                            <li key={item}>{item}</li>
                        </Fade>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default Expericance;
