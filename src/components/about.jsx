import React from "react";
import "../App.css";

class About extends React.Component {
    render() {
        return (
            <div>
                <div className="aboutBody">
                </div>
                <div>
                    <h1 className="aboutHead">About Me:</h1>
                    <p className="aboutContent">I am a Software Engineer/ Full-Stack Web Developer and a recent graduate of Galvanize's Web Development Immersive, class g102.
                    Prior to making the transition to this exciting new career I have worked various odd jobs ranging from deck-handing out of Juneau, Alaska to serving in the United States Navy.
                    My primary motives for pursuing a career in software development have been the challenges and mental stimulation that developing software creates and the endless possibilites to better
                    every day processess in the world around me. In my free time I enjoy escaping to the great outdoors or bettering myself through mediums like exercise, playing guitar or learning a new skill.
                </p>
                </div>
            </div>
        )
    }
}

export default About;