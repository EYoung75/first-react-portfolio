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
                    <div className="aboutWrap">
                        <p className="aboutContent">I am a Software Engineer/ Full-Stack Web Developer and a recent graduate of Galvanize's Web Development Immersive, class g102.
                        Prior to making the transition to this exciting new career I have worked various odd jobs ranging from deck-handing out of Juneau, Alaska to serving in the United States Navy.
                        My primary motives for pursuing a career in software development have been the challenges and mental stimulation that developing software creates and the endless possibilities to better
                        every day processess in the world around me. In my free time I enjoy escaping to the great outdoors or bettering myself through mediums like exercise, playing guitar or learning a new skill.
                        </p>
                        <img className="me" src="https://lh3.googleusercontent.com/hqUmfCLWAd4LDqyfqv9DQPJCI18MfwR3NiIpU6Cc0VLFojEnCQi1PDjlX6k0y1KdMiM_mlvmc2_3cEx0fvflH2B-R17rE0MpFe_4ZDtrewj9NvxN7fjlt4x10hWxmsIAmPCp7O1rUw=w2400"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;