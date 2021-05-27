import React, { Component } from "react";
import "../css/module.header.css";

export default class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="heading">
                    <div className="text-1">our new site is</div>
                    <div className="text-2">coming soon</div>
                    <div className="text-1">stay tuned!</div>
                </div>
                <div className="scroll-down"><i className="arrow down"></i></div>
                <div className="canvas" id="canvas"></div>
            </div>
        );
    }
}