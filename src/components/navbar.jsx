import React from "react";
import "../App.css";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home.jsx";
import About from "./about.jsx";
import Projects from "./projects.jsx";
import Contact from "./contact.jsx";
import Photos from "./photos.jsx";
import Resume from "./resume.jsx";
import {
  FaEnvelopeOpenText,
  FaGithub,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";

const Navbar = props => {
  return (
    <Router>
      <div>
        <nav className="nav container">
          <li className="navLink">
            <Link to="/">{"<EJY/>"}</Link>
          </li>
          <li className="navLink">
            <Link to="/about">About</Link>
          </li>
          <li className="navLink">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="navLink">
            <Link to="/photo-gallery">Photo Gallery</Link>
          </li>
          <li className="navLink">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="navlink" id="resume">
            <Link to="/resume">Resume</Link>
          </li>
        </nav>
        <div className="hamContainer">
          <label className="hamburger" onClick={props.toggleMenu}>
            &#9776;
          </label>
          <h1 className="amaticBrand">{"<EJY/>"}</h1>
          {props.menu ? (
            <div className="menu">
              <li className="mobileLink">
                <Link to="/">{"<EJY/>"}</Link>
              </li>
              <li className="mobileLink">
                <Link to="/about">About</Link>
              </li>
              <li className="mobileLink">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="mobileLink">
                <Link to="/photo-gallery">Photo Gallery</Link>
              </li>
              <li className="mobileLink">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="mobileLink" id="resume">
                <Link to="/resume">Resume</Link>
              </li>
            </div>
          ) : (
            ""
          )}
        </div>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/photo-gallery" component={Photos} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
};

export default Navbar;
