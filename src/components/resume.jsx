import React from "react";

const Resume = () => {
    return (
        <div className="resume">
            <a href="./src/Creddle _ Resume.pdf" download><button>Download Resume</button></a>
            <iframe src="https://resume.creddle.io/embed/i1oe7do7liw"
                width="850" height="1000" seamless></iframe>
        </div>
    )
}

export default Resume;