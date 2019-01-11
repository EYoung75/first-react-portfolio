import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar.jsx";

class App extends Component {
  constructor(){
    super()
    this.state = {
      menu: false
    }
  }

  toggleMenu = () => {
    this.setState({
      menu: !this.state.menu
    })
  }
  render() {
    return (
      <div className="App">
        <Navbar {...this.state} toggleMenu={this.toggleMenu}/>
      </div>
    );
  }
}

export default App;
