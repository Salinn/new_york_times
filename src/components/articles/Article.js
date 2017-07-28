//React
import React from 'react';
import { shape, string, func } from 'prop-types';
//Time Format
import moment from 'moment';
import { Col, Card, CardTitle, Row, Button, Media, } from 'reactstrap';
import '../../assets/stylesheets/articles.css'
import notAvailable from '../../assets/images/not-available.jpg';

const getImage = ({ article }) => {
    return article && article.multimedia.length > 0 ? article.multimedia[1].url : notAvailable;
};

const Article = ({ article, toggle }) => {
    return  (
        <Col xs={{ size: 12 }}>
            <Row>
                <Card block className="articleCard">
                    <Media>
                        <Media left href="#">
                            <Media object className="img-fluid mediaImage" src={ getImage({ article }) } alt={notAvailable} />
                        </Media>
                        <Media body className="mediaBody">
                            <Media heading>
                                { article.title }
                            </Media>
                            <p>{ article.abstract }</p>
                            <p>
                                { article.byline }
                                <i>
                                    { moment(article.published_date).format('MM/DD/YYYY h:mm a') }
                                </i>
                            </p>
                            <Button onClick={ () => toggle(article.url) } block>Read More</Button>
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
        snippet: string.isRequired
    }).isRequired,
    toggle: func.isRequired
};

export default Article

//article.byline.original
// <CardTitle>{ article.headline.main }</CardTitle>
// <i>{ moment(article.pub_date).format('MM/DD/YYYY h:mm a') }</i>
// <CardText>{ article.snippet }</CardText>
// <Button onClick={ () => toggle(article.web_url) } >Read More</Button>