import React from "react";
import "../App.css";

class Contact extends React.Component {
    render() {
        return (

            <div className="aboutBody container-fluid">
                <div>
                    <h1 className="projectHead">Points of Contact:</h1>
                    <div className="contact">
                        <a href="https://www.linkedin.com/in/evanyoung4/">•LinkedIn: linkedin.com/in/evanyoung4/</a>
                        <a href="https://github.com/EYoung75">•GitHub: github.com/EYoung75</a>
                        <a href="mailto:Young.EvanJ@gmail.com">•Email: Young.EvanJ@gmail.com</a>
                        <a href="blank">•Phone: (720)224-6718</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;