import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

function App() {
    const [section, setSection] = useState("0");
    return (
        <div className="app">
            <div className="left_container">
                <Navbar setSection={setSection} />
            </div>
            <Fade triggerOnce>
                <div className="section_container">
                    {section === "0" && <Home />}
                    {section === "1" && <About />}
                    {section === "2" && <Experience />}
                    {section === "3" && <Projects />}
                    {section === "4" && <Contact />}
                </div>
            </Fade>
            <Footer />
        </div>
    );
}
export default App;
