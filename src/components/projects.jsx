import React from "react";
import "../App.css";

const Projects = () => {
    return (
        <div className="aboutBody container-fluid">
            <h1 className="projectHead">Projects:</h1>
            <div className="projectContent">
                <div className="projectLinks">
                    <a href="https://github.com/EYoung75/petSwipe-native">•PetSwipe React Native</a>
                    <a href="http://evan-omdb.surge.sh/">•React Movie Reviews</a>
                    <a href="http://g-102-eats.surge.sh/">•Galvanize Eats</a>
                    <a href="https://github.com/EYoung75/pixel-art">•Pixel Art</a>
                </div>
            </div>
        </div>
    )
}

export default Projects;