//React
import React from 'react';
import { shape, string, func, object } from 'prop-types';
//Time Format
import moment from 'moment';
import { Col, Card, Row, Button, Media, } from 'reactstrap';
//Assets
import '../../assets/stylesheets/articles.css'
import notAvailable from '../../assets/images/not-available.jpg';

const getImage = ({ multimedia }) => {
    if(multimedia.length > 0){
        return `http://www.nytimes.com/${multimedia[0].url}`;
    }else {
        return notAvailable;
    }
};

const Article = ({ article, toggle }) => {
    const image = getImage({ multimedia: article.multimedia });
    const title = article.headline.main;
    const preview = article.snippet;
    const author = article.byline ? article.byline.original : '';
    const datePublished = moment(article.pub_date).format('MM/DD/YYYY h:mm a');
    const articleUrl = article.web_url;

    return  (
        <Col xs={{ size: 12 }}>
            <Row>
                <Card block className="articleCard">
                    <Media>
                        <Media left href="#">
                            <Media object className="img-fluid mediaImage" src={ image } alt={notAvailable} />
                        </Media>
                        <Media body className="mediaBody">
                            <Media heading>
                                { title }
                            </Media>
                            <p>{ preview }</p>
                            <p>{ author }</p>
                            <p>
                                <i>
                                    { datePublished }
                                </i>
                            </p>
                            <Button onClick={ () => toggle(articleUrl) } block>Read More</Button>
                        </Media>
                    </Media>
                </Card>
            </Row>
        </Col>
    );
};

Article.PropTypes = {
    article: shape({
        headline: shape({
            main: string.isRequired,
        }).isRequired,
        pub_date: string.isRequired,
        snippet: string.isRequired,
        web_url: string.isRequired,
        byline: object.isRequired,
        multimedia: object.isRequired,
    }),
    toggle: func.isRequired
};

export default Article