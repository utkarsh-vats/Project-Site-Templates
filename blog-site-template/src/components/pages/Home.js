import React, { Component } from 'react';
import "../../App.css";
import Header from "../Header";
import CardContainer from '../CardContainer';
import Footer from '../Footer';

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header />
                <CardContainer />
                <Footer />
            </div>
        )
    }
}
