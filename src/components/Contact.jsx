import React from "react";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
    return (
        <div className="contact">
            <Fade triggerOnce>
                <div className="contact_container">
                    <h1>Contact</h1>
                    <p>Contact information will be displayed here.</p>
                </div>
            </Fade>
        </div>
    );
};

export default Contact;
