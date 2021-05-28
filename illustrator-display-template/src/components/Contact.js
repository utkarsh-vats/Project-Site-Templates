import React, { Component } from 'react';
import "../css/module.contact.css";

export default class Contact extends Component {
    render() {
        return(
            <div className="container">
                <div className="image">
                    <img src="" alt="" />
                </div>
                <h2 className="title">Contact</h2>
                <div className="contact-form">
                    <div className="detail">
                        <p className="text">First Name <span>*</span></p>
                        <input type="text" required/>
                    </div>
                    <div className="detail">
                        <p className="text">Last Name</p>
                        <input type="text" />
                    </div>
                    <div className="detail">
                        <p className="text">Email <span>*</span></p>
                        <input type="email" required/>
                    </div>
                    <div className="detail">
                        <p className="text">Phone</p>
                        <input type="text" />
                    </div>
                    <div className="detail">
                        <p className="text">Enter Your Message Here <span>*</span></p>
                        <textarea name="message" rows="5" required></textarea>
                    </div>
                    <button>Send</button>
                </div>
            </div>
        );
    }
}