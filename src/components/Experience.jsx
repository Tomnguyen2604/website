import { Fade } from "react-awesome-reveal";
import "../styles/Experience.css";

const tech_stack = [
    { name: "Java", exp: 2 },
    { name: "JavaScript", exp: 2 },
    { name: "Python", exp: 2 },
    { name: "React.js", exp: 3 },
    { name: "Node.js", exp: 3 },
    { name: "MySQL", exp: 2 },
    { name: "MongoDB", exp: 2 },
    { name: "CSS", exp: 3 },
    { name: "SASS", exp: 3 },
    { name: "Redux", exp: 3 },
    { name: "AWS S3", exp: 1 },
];

const Expericance = () => {
    return (
        <div className="experience-container">
            <Fade triggerOnce duration={2000}>
                <div className="section-header">
                    <h1>Experience</h1>
                </div>
            </Fade>
            <div className="skills-container">
                <ul className="tech-stack">
                    {tech_stack.map((item, i) => (
                        <Fade key={i} triggerOnce duration={2000} delay={i * 5}>
                            <li key={item.name} className="exp-language">
                                <div className="exp-language-title">
                                    {item.name}
                                </div>
                                <div className="exp-dropdown">
                                    <div className="exp-label">EXP</div>
                                    <div className="exp-bar-bg">
                                        <div
                                            className="exp-bar-fill"
                                            style={{
                                                width: `${
                                                    (item.exp / 5) * 100
                                                }%`,
                                            }}
                                        ></div>
                                    </div>
                                    <div className="exp-value">
                                        {item.exp} / 5
                                    </div>
                                </div>
                            </li>
                        </Fade>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default Expericance;
