import React from "react";
import "../App.css"
import { Link, BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./home.jsx";
import About from "./about.jsx";
import Projects from "./projects.jsx";
import Contact from "./contact.jsx";
import Photos from "./photos";



class Navbar extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <nav className="nav">
                        <li><Link to="/">{"<EJY/>"}</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/photo-gallery">Photo Gallery</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </nav>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/photo-gallery" component={Photos}></Route>
                    <Route path="/contact" component={Contact}/>
                </div>
            </Router>
        )
    }
}

export default Navbar;