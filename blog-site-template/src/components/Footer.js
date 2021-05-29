import React, { Component } from 'react';
import Button from "./Button";
import "../css/module.footer.css";
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <section className="footer-subscription">
                    <p className="footer-subscription-heading">
                        Join the Adventure newsletter to recieve our best vacation deals
                    </p>
                    <p className="footer-subscription-text">
                        You can unsubscribe at any time.
                    </p>
                    <div className="input-area">
                        <form>
                            <input type="email" name="email" placeholder="username@example.com" className="footer-input" />
                            <Button buttonStyle="btn--outline">Subscribe</Button>
                        </form>
                    </div>
                </section>
                <div className="footer-links">
                    <div className="footer-link-wrapper">
                        <div className="footer-link-items">
                            <h2>About Us</h2>
                            <Link to="sign-up">How it Works</Link>
                            <Link to="sign-up">Testimonials</Link>
                            <Link to="sign-up">Careers</Link>
                            <Link to="sign-up">Investors</Link>
                            <Link to="sign-up">Terms of Services</Link>
                        </div>
                        <div className="footer-link-items">
                            <h2>About Us</h2>
                            <Link to="sign-up">How it Works</Link>
                            <Link to="sign-up">Testimonials</Link>
                            <Link to="sign-up">Careers</Link>
                            <Link to="sign-up">Investors</Link>
                            <Link to="sign-up">Terms of Services</Link>
                        </div>
                    </div>
                    <div className="footer-link-wrapper">
                        <div className="footer-link-items">
                            <h2>About Us</h2>
                            <Link to="sign-up">How it Works</Link>
                            <Link to="sign-up">Testimonials</Link>
                            <Link to="sign-up">Careers</Link>
                            <Link to="sign-up">Investors</Link>
                            <Link to="sign-up">Terms of Services</Link>
                        </div>
                        <div className="footer-link-items">
                            <h2>About Us</h2>
                            <Link to="sign-up">How it Works</Link>
                            <Link to="sign-up">Testimonials</Link>
                            <Link to="sign-up">Careers</Link>
                            <Link to="sign-up">Investors</Link>
                            <Link to="sign-up">Terms of Services</Link>
                        </div>
                    </div>
                </div>
                <section className="social-media">
                    <div className="social-media-wrap">
                        <div className="footer-logo">
                            <Link to="/" className="social-logo">
                                UTKARSH <i className="fab fa-typo3"></i>
                            </Link>
                        </div>
                        <small className="website-rights">Created with React.</small>
                        <div className="social-icons">
                            <Link className="social-icon-link" to="/" target="_blank" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link className="social-icon-link" to="/" target="_blank" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link className="social-icon-link" to="/" target="_blank" aria-label="Twitter">
                                <i className="fab fa-twitter"></i>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
