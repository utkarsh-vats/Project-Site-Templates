import React, { Component } from 'react';
import "../css/button.css";
import { Link } from 'react-router-dom';

const STYLES = [
    'btn--primary',
    'btn--outline',
];

const SIZES = [
    'btn--medium',
    'btn--large',
]

export default class Button extends Component {
    //  props: children, type, onClick, buttonStyle, buttonSize 
    constructor(props) {
        super(props);
        this.state = {
            currentButtonStyle: STYLES[0],
            currentButtonSize: SIZES[0],
        }
    }

    componentDidMount() {
        this.checkButtonStyle();
        this.checkButtonSize();
    }

    checkButtonStyle = () => {
        let newStyle = STYLES.includes(this.props.buttonStyle) ? this.props.buttonStyle : STYLES[0];
        this.setState({
            currentButtonStyle: newStyle,
        });
    }

    checkButtonSize = () => {
        let newSize = SIZES.includes(this.props.buttonSize) ? this.props.buttonSize : SIZES[0];
        this.setState({
            currentButtonSize: newSize,
        });
    }

    render() {
        return (
            <div className="button">
                <Link to="/sign-up" className="btn--mobile">
                    <button
                        className={`btn ${this.state.currentButtonStyle} ${this.state.currentButtonSize}`}
                        onClick={this.props.onClick}
                        type={this.props.type}
                    >
                        {this.props.children}
                    </button>
                </Link>
            </div>
        )
    }
}
