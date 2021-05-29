import React, { Component } from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={ Home }/>
                        <Route path="/services" component={ Services }/>
                        <Route path="/products" component={ Products }/>
                        <Route path="/sign-up" component={ SignUp }/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
