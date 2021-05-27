import React, { Component } from "react";
import "../css/module.navbar.css";

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
                    <a href={process.env.FACEBOOK_URL}><i class="fab fa-facebook-f"></i></a>
                    <a href={process.env.FACEBOOK_URL}><i class="fab fa-twitter"></i></a>
                    <a href={process.env.FACEBOOK_URL}><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        );
    }
}