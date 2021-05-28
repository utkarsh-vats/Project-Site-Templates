import React, { Component } from "react";
import "../css/module.card.css";

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.id = props.id;
        this.url = props.url;
        
        this.state = {
            likes: props.likes,
            isLiked: props.isLiked,
        }
    }

    componentDidMount() {
        this.toggleLike();
    }

    toggleLike() {
        let image = document.getElementById(`image_${this.id}`);
        image.childNodes[0].addEventListener('click', (event) => {
            let liked = !this.state.isLiked;
            let likeChange = (this.state.isLiked) ? this.state.likes - 1 : this.state.likes + 1;
            this.setState({
                likes: likeChange,
                isLiked: liked
            });
            event.currentTarget.classList.toggle('liked-btn', this.state.isLiked);
        });
    }

    render() {
        return(
            <div className="card">
                <div className="overflow">
                    <img src={this.url} alt={this.url} />
                    <div className="overlay">
                        <div className="like" id={`image_${this.id}`}>
                            <button className="like-btn"><span>{this.state.likes}</span></button>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}