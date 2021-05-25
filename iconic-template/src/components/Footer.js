import React, { Component } from "react";
import "../css/module.footer.css";

export default class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <div className="subscribe-form">
                <h1 className="text-1">I Sometimes Send Newsletters</h1>
                    <form className="form">
                        <div className="label">Email Address <span className="highlight">*</span></div>
                        <input 
                            type="text"
                            name="email"
                            id="email-subscribe"
                            placeholder="username@example.com"
                        ></input>
                        <button className="subscribe-btn">Subscribe Now</button>
                    </form>
                    <br/>
                    <p className="text-2">© 2021 by Utkarsh Vats. Created using React</p>
                </div>
            </div>
        )
    }
}