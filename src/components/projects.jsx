import React from "react";
import "../App.css";

class Projects extends React.Component {
    render() {
        return (
            <div>
                <div className="aboutBody"></div>
                <div>
                    <h1 className="aboutHead">Projects:</h1>
                    <ul className="projectContent">
                        <li>g102 "Yearbook"</li>
                        <li>React Bookstore</li>
                        <li>React Inbox</li>
                        <li>g102 class database</li>
                        <li>React Shopping Cart</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Projects;