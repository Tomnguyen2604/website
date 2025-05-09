import axios from "axios";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
const REFRESH_TOKEN = import.meta.env.VITE_REFRESH_TOKEN;

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
                </div>
            </Fade>
        </div>
    );
};

export default Home;
