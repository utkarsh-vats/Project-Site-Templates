import React, { Component } from "react";
import { scrollUp } from "./scroll";
import "../css/module.footer.css";

export default class Footer extends Component {
    render() {
        return(
            <div className="footer" id="footer">
                <p className="text-1">by Utkarsh</p>
                <div 
                    className="scroll-up"
                    onClick={scrollUp}
                >
                    <i className="arrow up"></i>
                </div>
                <p className="text-2">Created with React JS</p>
            </div>
        );
    }
}