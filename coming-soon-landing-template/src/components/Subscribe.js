import React, { Component } from "react";
import "../css/module.subscribe.css";

export default class Subscribe extends Component {
    render() {
        return(
            <div className="wrap" id="subscribe-form">
                <div className="about">
                    <h1 className="title">About Us</h1>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eius dolore eum qui error delectus quidem id beatae nisi dicta ullam aperiam commodi deleniti non, necessitatibus animi magni ducimus porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur modi porro atque totam architecto ratione.</p>
                </div>
                <div className="subscribe">
                    <h2 className="heading">Subscribe to be the first to know about out launch.</h2>
                    <div className="form">
                        <p className="label">Email *</p>
                        <div className="input">
                            <input type="email" placeholder="username@example.com*"/>
                            <button>Subscribe Now</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}