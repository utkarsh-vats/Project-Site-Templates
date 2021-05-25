import React, { Component } from "react";
import "../css/module.header.css";

export default class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="quote">
                    <h1>The only <span className="bold">limit</span> <span className="italic">to</span> our <span className="bold">realization</span> <span className="italic">of</span> tomorrow <span className="italic">will</span> be our <span className="bold highlight">doubts</span> <span className="italic">of</span> today.</h1>
                </div>
                <div className="header-img"></div>
            </div>
        );
    }
}
