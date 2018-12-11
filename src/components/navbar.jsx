import React from "react";
import "../App.css";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./home.jsx";
import About from "./about.jsx";
import Projects from "./projects.jsx";
import Contact from "./contact.jsx";
import Photos from "./photos.jsx";
import Resume from "./resume.jsx";



const Navbar = () => {
    return (
        <Router>
            <div>
                <nav className="nav container">
                    <li className="navLink"><Link to="/">{"<EJY/>"}</Link></li>
                    <li className="navLink"><Link to="/about">About</Link></li>
                    <li className="navLink"><Link to="/projects">Projects</Link></li>
                    <li className="navLink"><Link to="/photo-gallery">Photo Gallery</Link></li>
                    <li className="navlink"><Link to="/resume">Resume</Link></li>
                    <li className="navLink"><Link to="/contact">Contact</Link></li>
                </nav>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/photo-gallery" component={Photos}></Route>
                <Route path="/resume" component={Resume}></Route>
                <Route path="/contact" component={Contact} />
            </div>
        </Router>
    )
}

export default Navbar;