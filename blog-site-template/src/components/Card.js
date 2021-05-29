import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../css/module.card.css";

export default class Card extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="card">
                <li className="card-item">
                    <Link className="card-item-link" to={this.props.path}>
                        <figure className="card-item-pic-wrap" data-category={this.props.label}>
                            <img src={this.props.src} alt="Travel Location" className="card-item-img" />
                        </figure>
                        <div className="card-item-info">
                            <h5 className="card-item-text">{this.props.text}</h5>
                        </div>
                    </Link>
                </li>
            </div>
        )
    }
}
