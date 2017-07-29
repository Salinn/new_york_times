//React
import React from 'react';
import { shape, string, func } from 'prop-types';
//Time Format
import moment from 'moment';
import { Col, Card, CardTitle, Row, Button, Media, } from 'reactstrap';
import '../../assets/stylesheets/articles.css'
import notAvailable from '../../assets/images/not-available.jpg';

const getImage = ({ multimedia }) => {
    //http://www.nytimes.com/
    if(multimedia.length > 0 && multimedia[0].url.includes('https')){
        return multimedia[multimedia.length -1].url;
    } else if(multimedia.length > 0){
        return `http://www.nytimes.com/${multimedia[multimedia.length -1].url}`;
    }else {
        return notAvailable;
    }
};

const Article = ({ article, toggle }) => {
    const image = getImage({ multimedia: article.multimedia });
    const title = article.title ? article.title : article.headline.print_headline;
    const preview = article.abstract ? article.abstract : article.snippet;
    const author = article.byline ? article.byline : article.byline ? article.byline.original : '';
    const datePublished = moment(article.published_date ? article.published_date : article.pub_date).format('MM/DD/YYYY h:mm a');
    const articleUrl = article.url ? article.url : article.web_url;

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
                            <p>
                                { author }
                            </p>
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