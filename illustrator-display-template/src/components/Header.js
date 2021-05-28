import React, { Component } from 'react';
import "../css/module.header.css";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeComponent: 0,
        }
    }

    componentDidMount() {
        this.changeActiveComponent();
        this.switchPage();
    }

    changeActiveComponent = () => {
        let links = document.querySelector("#header > .links").childNodes;
        for(let i = 0; i < links.length; i++) {
            links[i].addEventListener("click", (event) => {
                this.setState({
                    activeComponent: i,
                });
                this.switchPage();
            });
        }
    }

    switchPage = () => {
        let links = document.querySelector("#header > .links").childNodes;
        let pages = document.querySelector("#pages").childNodes;

        for(let i = 0; i < links.length; i++) {
            let isInactive = (i === this.state.activeComponent) ? false : true;
            pages[i].classList.toggle('hidden', isInactive);
            links[i].classList.toggle('highlight', !isInactive);
        }
    }

    scrollUp = () => {
        document.getElementById("header").scrollIntoView({ behavior: "smooth" });
    }

    render() {
        return(
            <div className="header" id="header">
                <div className="heading">Pritish Kumar</div>
                <div className="links">
                    <div className="link">Home</div>
                    <div className="link">About</div>
                    <div className="link">Contact</div>
                </div>
                <div className="scroll-up" onClick={this.scrollUp}>
                    <div className="arrow up"></div>
                </div>
            </div>
        );
    }
}