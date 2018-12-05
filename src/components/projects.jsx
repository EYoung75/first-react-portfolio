import React from "react";
import "../App.css";

class Projects extends React.Component {
    render() {
        return (
            <div className="aboutBody container-fluid">
                <h1 className="projectHead">Projects:</h1>
                <div className="projectContent">
                    <div className="projectLinks">
                        <a href="https://g102.herokuapp.com/">•g102 "Yearbook"</a>
                        <a href="https://github.com/EYoung75/react-bookstore">•React Bookstore</a>
                        <a href="https://github.com/EYoung75/react-inbox">•React Inbox</a>
                        <a href="https://github.com/EYoung75/g102">•g102 class database</a>
                    </div>
                    <div className="projectLinks">
                        <a href="https://github.com/EYoung75/react-shopping-cart">•React Shopping Cart</a>
                        <a href="https://github.com/EYoung75/pixel-art">•Pixel Art</a>
                        <a href="https://github.com/EYoung75/react-quote-generator">•React "Not-so-inspirational" quote generator</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;