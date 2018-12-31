import React from "react";
import "../App.css";
import { FaGithub, FaLinkedin, FaEnvelopeOpenText, FaMobile } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="aboutBody container-fluid">
            <div>
                <h1 className="projectHead">Points of Contact:</h1>
                <div className="contact">
                    <a href="https://www.linkedin.com/in/evanyoung4/"><FaLinkedin/>LinkedIn: linkedin.com/in/evanyoung4/</a>
                    <a href="https://github.com/EYoung75"><FaGithub/>GitHub: github.com/EYoung75</a>
                    <a href="mailto:Young.EvanJ@gmail.com"><FaEnvelopeOpenText/>Email: Young.EvanJ@gmail.com</a>
                    <a href="blank"><FaMobile/>Phone: (720)224-6718</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;