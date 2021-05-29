import React, { Component } from 'react';
// import bgVideo from "../media/videos/video-2.mp4";
import Button from './Button';
import "../css/module.header.css";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                {/* <video src={bgVideo} autoPlay loop muted /> */}
                <h1 className="heading">Adventure Awaits</h1>
                <p className="heading-description">What are you waiting for?</p>
                <div className="header-btns">
                    <Button 
                        className='btns' 
                        buttonStyle='btn--outline' 
                        buttonSize='btn--large'
                    >
                        GET STARTED
                    </Button>
                    <Button 
                        className='btns' 
                        buttonStyle='btn--primary' 
                        buttonSize='btn--large'
                    >
                        WATCH TRAILER <i className="far fa-play-circle"></i>
                    </Button>
                </div>
            </div>
        )
    }
}
