import React, { Component } from 'react';
import Header from './components/Header';
import BlogContainer from './components/BlogContainer';
import Footer from './components/Footer';
import "./App.css";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <BlogContainer newsPerPage="10"/>
                <Footer />
            </div>
        )
    }
}
