import React, { Component } from 'react';
import "../css/module.about.css";
import coverImage from "../media/images/pritish2.jpg";

export default class About extends Component {
    render() {
        return(
            <div className="container">
                <div className="title-image">
                    <img src={coverImage} alt="" className="image" />
                </div>
                <div className="about-me">
                    <h2 className="title">About Me</h2>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit distinctio ut qui necessitatibus sint voluptate iusto, esse aperiam possimus debitis itaque suscipit fuga commodi ducimus nesciunt harum enim, deserunt temporibus?</p>
                </div>
            </div>
        );
    }
}