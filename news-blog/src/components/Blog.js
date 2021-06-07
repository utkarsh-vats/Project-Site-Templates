import React, { Component } from 'react';
import "../css/module.blog.css";

const colors = [
    "#eebc3f",
    "#e96359",
    "#82ace8",
    // "#cbbf59",
    "#98ddca",
    "#ffaaa7",
    "#ffd3b4",
    "#a58faa",
    "#ffeebb",
    "#00adb5",
    "#ff96ad"
];

export default class Blog extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.state = {
            index: this.props.index,
            color: colors[0],
        }
    }

    componentDidMount() {
        this.setStyle();
    }

    setStyle = async () => {
        await this.setState({
            color: colors[this.state.index],
        })
        document.styleSheets[0].addRule(`#blog-${this.props.index}::before`, `color: ${colors[ this.props.index % colors.length ]}`);
        document.styleSheets[0].addRule(`#image-${this.props.index}::after`, `color: ${colors[ this.props.index % colors.length ]}`);
        document.styleSheets[0].addRule(`#heading-${this.props.index}::before`, `background: ${colors[ this.props.index % colors.length ]}`);
        document.getElementById(`image-${this.props.index}`).style.order = (this.props.index % 2 === 0) ? "0" : "2";

        if(this.props.index % 2 === 0) {
            console.log(this.props.index);
            document.styleSheets[0].addRule(`#image-${this.props.index}::before`, `left: ${"2rem"}`);
            document.styleSheets[0].addRule(`#image-${this.props.index}::after`, `left: ${"0"}`);
        }
    }

    render() {
        return (
            <div className="blogs" id={`blog-${this.props.index}`} index={this.props.index + 1} c>
                <div className="image" id={`image-${this.props.index}`} author={this.props.author}>
                    <img src={this.props.image} alt={this.props.title} />
                </div>
                <div className="content-container">
                    <h2 className="heading" id={`heading-${this.props.index}`}>{this.props.heading}</h2>
                    <h6 className="author">~ {this.props.author}</h6>
                    <p className="content">{this.props.content}</p>
                    <br />
                    <a id={`anchorTag-${this.props.index}`} href={this.props.url} style={{background: colors[ this.props.index % colors.length ]}} target="_blank" rel="noreferrer">...read full article...</a>
                </div>
            </div>
        )
    }
}
