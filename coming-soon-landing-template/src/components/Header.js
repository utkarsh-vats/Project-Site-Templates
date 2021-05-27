import React, { Component } from "react";
import "../css/module.header.css";
import { scrollDown } from "./scroll";

const twoPI = Math.PI * 2;
const width = 700;
const height = 700;

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }
    componentDidMount() {
        this.showClock();
        setInterval(this.showClock, 1000);
    }
    showClock = () => {
        let canvas = this.canvasRef.current;
        let context = canvas.getContext('2d');
        let handLength = width / 2;
        let date = new Date();
        let sec = date.getSeconds();

        context.clearRect(0, 0, width, height);

        // clock marks
        for(let i = 0; i < 12; i++) {
            let angle = (i - 3) * (twoPI) / 12;
            context.lineWidth = 2;
            
            context.beginPath();
            let x1 = (width / 2) + Math.cos(angle) * (handLength);
            let y1 = (height / 2) + Math.sin(angle) * (handLength);
            let x2 = (width / 2) + Math.cos(angle) * (handLength - handLength / 7);
            let y2 = (height / 2) + Math.sin(angle) * (handLength - handLength / 7);
        
            context.moveTo(x1, y1);
            context.lineTo(x2, y2);
            context.strokeStyle = "#fff";
            context.stroke();
        }

        // minute hand
        let minuteAngle = twoPI / 3;
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(width / 2, height / 2);
        context.lineTo(
            (width / 2 - Math.cos(minuteAngle) * (handLength - (handLength / 2))), 
            (height / 2 - Math.sin(minuteAngle) * (handLength - (handLength / 2)))
        );
        context.stroke();

        // second hand
        let secondAngle = (twoPI * 5 * (sec / 60));
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(width / 2, height / 2);
        context.lineTo(
            (width / 2 - Math.cos(secondAngle) * (handLength - (handLength / 4))), 
            (height / 2 - Math.sin(secondAngle) * (handLength - (handLength / 4)))
        );
        context.stroke();

    }
    render() {
        return(
            <div className="header" id="header">
                <div className="heading">
                    <div className="text-1">our new site is</div>
                    <div className="text-2">coming soon</div>
                    <div className="text-1">stay tuned!</div>
                </div>
                <div className="scroll-down" onClick={scrollDown}><i className="arrow down"></i></div>
                <canvas ref={this.canvasRef} className="canvas" width={width} height={height}></canvas>
            </div>
        );
    }
}