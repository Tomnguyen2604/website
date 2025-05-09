import { Fade } from "react-awesome-reveal";

const About = () => {
    return (
        <Fade triggerOnce>
            <div className="about_container">
                <div className="about_text">
                    <h1>About Me</h1>
                    <p>
                        I am a passionate software developer with a strong
                        foundation in web development and a keen interest in
                        learning new technologies. I enjoy solving complex
                        problems and creating efficient solutions.
                    </p>
                </div>
            </div>
        </Fade>
    );
};
export default About;
