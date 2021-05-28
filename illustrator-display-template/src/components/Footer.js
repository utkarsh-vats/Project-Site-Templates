import React, { Component } from "react";
import "../css/module.footer.css";

const pinterestURL = "https://www.pinterest.cl/";
const instagramURL = "https://www.instagram.com/krpritish18/";
const twitterURL = "https://twitter.com/Pks1998Kumar";
const linkedinURL = "https://www.linkedin.com/in/pritish-kumar-15a67b180/";

export default class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <div className="socials">
                    <a href={pinterestURL} className="link"><i class="fab fa-pinterest"></i></a>
                    <a href={instagramURL} className="link"><i class="fab fa-instagram"></i></a>
                    <a href={twitterURL} className="link"><i class="fab fa-twitter"></i></a>
                    <a href={linkedinURL} className="link"><i class="fab fa-linkedin"></i></a>
                </div>
                <p className="text"><span>*</span> by Utkarsh Vats. Created with React.</p>
            </div>
        );
    }
}