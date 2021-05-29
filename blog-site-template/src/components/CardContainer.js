import React, { Component } from 'react';
import Card from './Card';
import "../css/module.card.css";
import * as img from "./images";

export default class CardContainer extends Component {
    render() {
        return (
            <div className="cards">
                <h1>Check out these EPIC Destinations</h1>
                <div className="card-container">
                    <div className="card-wrapper">
                        <ul className="card-items">
                            <Card 
                                src={img.img9}
                                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                                label="Adventure"
                                path="/services"
                            />
                            <Card 
                                src={img.img2}
                                text="Travel through the Islands of Bali in a Private Cruise"
                                label="Luxury"
                                path="/services"
                            />
                        </ul>
                        <ul className="card-items">
                            <Card 
                                src={img.img3}
                                text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                                label="Mystery"
                                path="/services"
                            />
                            <Card 
                                src={img.img4}
                                text="Experience Football on Top of the Himilayan Mountains"
                                label="Adventure"
                                path="/products"
                            />
                            <Card 
                                src={img.img8}
                                text="Ride through the Sahara Desert on a guided camel tour"
                                label="Adrenaline"
                                path="/sign-up"
                            />
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
