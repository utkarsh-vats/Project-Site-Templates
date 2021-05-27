import React, { Component } from "react";
import "../css/module.navbar.css";

require('dotenv').config();

const lnURL = "https://www.google.com/";
const gitURL = "https://github.com/utkarsh-vats";
const instaURL = "https://www.instagram.com/utkarsh_vats2000/";

export default class Navbar extends Component {
    render() {
        return(
            <div className="navbar">
                <div className="logo">
                    <div className="square"></div>
                    <div className="logo-text">Utkarsh.</div>
                </div>
                <div className="links">
                    <p className="link">Home</p>
                    <p className="link">Subscribe</p>
                </div>
                <div className="socials">
                    <a href={lnURL}><i class="fab fa-linkedin-in"></i></a>
                    <a href={gitURL}><i class="fab fa-github"></i></a>
                    <a href={instaURL}><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        );
    }
}