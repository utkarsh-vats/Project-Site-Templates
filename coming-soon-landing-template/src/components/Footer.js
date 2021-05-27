import React, { Component } from "react";
import "../css/module.footer.css";

export default class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <p className="text-1">by Utkarsh</p>
                <div className="scroll-up"><i className="arrow up"></i></div>
                <p className="text-2">Created with React JS</p>
            </div>
        );
    }
}