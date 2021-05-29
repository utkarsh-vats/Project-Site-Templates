import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "../css/module.navbar.css";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,
            button: true,
        }
    }

    componentDidMount() {
        this.showButton();
    }

    handleClick = () => {
        let clicked = (this.state.click) ? false : true;
        this.setState({
            click: clicked, 
        });
    }

    closeMobileMenu = () => {
        this.setState({
            click: false,
        })
    }

    showButton = () => {
        if(window.innerWidth <= 960) {
            this.setState({button: false,})
        } else {
            this.setState({button: true,})
        }
        window.addEventListener('resize', () => {
            if(window.innerWidth <= 960) {
                this.setState({button: false,})
            } else {
                this.setState({button: true,})
            }
        });
    }

    render() {
        return(
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={this.closeMobileMenu}>UTKARSH <i className="fab fa-typo3"></i></Link>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={this.state.click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-link" onClick={this.closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-link" onClick={this.closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link" onClick={this.closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-up" className="nav-link-mobile" onClick={this.closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {this.state.button && <Button buttonStyle="btn--outline" onClick={this.closeMobileMenu}>Sign Up</Button>}
                </div>
            </nav>
        );
    }
}