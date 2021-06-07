import React, { Component } from 'react';
import "../css/module.blog.css";
import Blog from './Blog';
import { key } from "../keys";

const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`;

export default class BlogContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        await fetch(url)
        .then(res => res.json())
        .then(data => this.setState({
            articles: data.articles.splice(0, this.props.newsPerPage),
        }));
        console.log(this.state.articles)
    }

    render() {
        return (
            <div className="container">
                <div className="blog-container">
                    {this.state.articles.map((article) => {
                        let id = this.state.articles.indexOf(article);
                        return (
                            <Blog 
                                key={id}
                                index={id}
                                image={(article.urlToImage) ? article.urlToImage : test}
                                heading={article.title}
                                author={article.author}
                                content={article.description}
                                url={article.url}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}
