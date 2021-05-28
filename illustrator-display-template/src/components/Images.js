import React, { Component } from "react";
import Card from "./Card";
import IMAGE_DATA from "../imagesData";
import "../css/module.images.css";
import Masonry from "react-masonry-css";

export default class Images extends Component {
    breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
    }
    render() {
        return(
            <div className="images-wrap">
                <div className="image-cover">
                    <Masonry
                        breakpointCols={this.breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {IMAGE_DATA.map((img) => 
                            <Card key={img.id} 
                                id={img.id}
                                url={img.url} 
                                likes={img.likes} 
                                isLiked={img.isLiked}
                            />
                        )}
                    </Masonry>
                </div>
            </div>
        );
    }
}