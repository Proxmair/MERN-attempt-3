import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../style.css";
export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar">
        <Link to="/" className="logo">Proxmair Diary</Link>
        <div className="links-container">
          <Link to="/" className="links">Home</Link>
          <Link to="/contact" className="links">Contact us</Link>
          <Link to="/about" className="links">About us</Link>

        </div>
        <button className="buttonstyle">Login</button>
      </nav>
    );
  }
}
