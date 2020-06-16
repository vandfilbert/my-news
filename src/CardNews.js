import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        let curretNews = this;
        fetch("https://gnews.io/api/v3/search?q=example&token=7d7c2e9b8036ad7d2b82faf47d600dca")
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('There is a problem. Status Code: ' + response.status);
                        return;
                    }
                    response.json().then(d => {
                        //console.log(d.articles);
                        curretNews.setState({
                            articles: d.articles
                        });
                    });
                }).catch(function (err) {
                    console.log('Fetch Error: ', err);
                });
    }
    render() {
        //console.log(this.state);
        return (
            <div>
                <div className="container card-title-news">
                    <h3>Soft News Headlines</h3>
                    <hr className="my-4"></hr>
                </div>
                <div className="container news">
                    {this.state.articles.map((item) =>
                        <div className="card shadow p-3 mb-5 bg-white rounded">
                            <CardImg top width="100" src={item.image} alt="Soft News" />
                            <CardBody>
                                <CardTitle><h5>{item.title}</h5></CardTitle>
                                <CardSubtitle><b>Author: {item.author}</b></CardSubtitle>
                                <CardText>{item.description}</CardText>
                                <a className="btn btn-primary" href={item.url}>Read More</a>
                            </CardBody>
                        </div>
                    )}
                </div>
            </div>
        );
    }
};

export default News;