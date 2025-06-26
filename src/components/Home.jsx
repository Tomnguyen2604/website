import axios from "axios";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const Home = () => {
    const [screen, setScreen] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreen(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="home">
            <Fade triggerOnce>
                <div className="home_container">
                    <h1>Hello, I'm Hoa Nguyen</h1>
                    <h2>Software Developer</h2>
                    <p>Welcome to my portfolio website</p>
                    <a
                        href="https://drive.google.com/file/d/1sQ3dpnXTIYwQZvBtT5Y1TeJu08TDrKET/view?usp=sharing"
                        download
                    >
                        <button>Download Resume</button>
                    </a>
                </div>
            </Fade>
        </div>
    );
};

export default Home;
