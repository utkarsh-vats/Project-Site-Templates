import React, { Component } from "react";
import "../css/module.navbar.css";
import { scrollDown, scrollUp } from "./scroll";

const lnURL = "https://www.google.com/";
const gitURL = "https://github.com/utkarsh-vats";
const instaURL = "https://www.instagram.com/utkarsh_vats2000/";

export default class Navbar extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('load', this.handleScroll);
    }
    componentDidUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('load', this.handleScroll);
    }
    handleScroll = (event) => {
        let links = document.querySelectorAll("div.links > p");
        if(window.pageYOffset < window.innerHeight) {
            links[0].style.opacity = 1;
            links[1].style.opacity = 0.6;
        } else {
            links[0].style.opacity = 0.6;
            links[1].style.opacity = 1;
        }
    }
    render() {
        return(
            <div className="navbar">
                <div className="logo">
                    <div className="square"></div>
                    <div className="logo-text">Utkarsh.</div>
                </div>
                <div className="links" id="links">
                    <p className="link" onClick={scrollUp}>Home</p>
                    <p className="link" onClick={scrollDown}>Subscribe</p>
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