import React, { Component } from "react";
import "../css/module.projects.css";

export default class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <div className="heading">
                    <h1>Clients &</h1>
                    <h1 style={{fontWeight: 600}}>Collaborations</h1>
                </div>
                <div className="project-content">
                    <div className="description">
                        Lorem ipsum dolor sit amet consectetur. Voluptas eos omnis accusantium doloribus, sapiente odio. Nesciunt doloremque itaque optio. Officiis, impedit.
                    </div>
                    <div className="project-list"></div>
                </div>
            </div>
        );
    }
}