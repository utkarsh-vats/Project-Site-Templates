import React, { Component } from "react";
import "../css/module.about.css";

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="heading">
                    <h1>This is <span style={{fontWeight: 600}}>me</span></h1>
                </div>
                <div className="about-container">
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, voluptate nam fugiat suscipit nihil velit maxime quia earum est aliquid ipsum facilis unde totam, dolorum, nemo corporis perspiciatis. Doloremque, placeat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sit dignissimos rerum sed quibusdam in quo commodi porro eum magni impedit explicabo aliquam, fuga, debitis rem illo. Porro, adipisci cumque?</p>
                        <div className="skills">
                            <div className="skill-container">
                                <div className="type-1">Content Strategy</div>
                                <div className="type-2">Writing</div>
                            </div>
                            <div className="skill-container">
                                <div className="type-3">Campaign Management</div>
                            </div>
                            <div className="skill-container">
                                <div className="type-2">Branding</div>
                                <div className="type-1">Social Media</div>
                            </div>
                            <div className="skill-container">
                                <div className="type-3">Events Content</div>
                                <div className="type-2">Fundraising</div>
                            </div>
                            <div className="skill-container">
                                <div className="type-1">Creative Initiatives</div>
                            </div>
                        </div>
                        <button>See Full CV</button>
                    </div>
                </div>
            </div>
        );
    }
}