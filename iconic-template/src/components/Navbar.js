import React, { Component } from "react";
import "../css/module.navbar.css";

export default class Navbar extends Component {
    render() {
        return(
            <div className="navbar-wrap">
                <div className="logo">
                    <h3>I'm Utkarsh Vats.</h3>
                    <p>A <span style={{background: "#ffff00"}}>Front End Developer</span>, Writer and Tutor.</p>
                </div>
                <div className="links">
                    <div>
                        <a href="localhost:3000">Home</a>
                        <a href="localhost:3000">CV</a>
                        <a href="localhost:3000">Blog</a>
                        <a href="localhost:3000">Contact</a>
                    </div>
                    <div>
                        <a href="localhost:3000"><i className="fab fa-linkedin-in"></i></a>
                        <a href="localhost:3000"><i className="fab fa-twitter"></i></a>
                        <a href="localhost:3000"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}
