import "./App.css";
import Home from "./components/Home";
import { Fade } from "react-awesome-reveal";

function App() {
    return (
        <div className="app">
            <Fade triggerOnce>
                <div className="section_container">
                    <Home />
                </div>
            </Fade>
        </div>
    );
}
export default App;
