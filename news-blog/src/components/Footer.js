import React, { Component } from 'react';
import "../css/module.footer.css";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer-wrapper">
                    <div className="website-rights">
                        <h2 className="title">NewsBlog</h2>
                        <p className="text">Copyright © 2021 NewsBlog.</p>
                    </div>
                    <div className="socials">
                        <a href="/" className="link"><i class="fab fa-facebook-f"></i></a>
                        <a href="/" className="link"><i class="fab fa-twitter"></i></a>
                        <a href="/" className="link"><i class="fab fa-instagram"></i></a>
                        <a href="/" className="link"><i class="fab fa-linkedin-in"></i></a>
                        <a href="/" className="link"><i class="fab fa-google-plus-g"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}
