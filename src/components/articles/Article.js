//React
import React from 'react';
import {} from 'prop-types';
//Time Format
import moment from 'moment';
import { Col, Card, CardTitle, CardText, Button, } from 'reactstrap';

const Article = ({ article, toggle }) => {
    return  (
        <Col xs="12" sm="6">
            <Card block>
                <CardTitle>{ article.headline.print_headline }</CardTitle>
                <i>{ moment(article.pub_date).format('MM/DD/YYYY h:mm a') }</i>
                <CardText>{ article.snippet }</CardText>
                <Button onClick={ () => toggle(article.web_url) } >Read More</Button>
            </Card>
        </Col>
    );
};

Article.PropTypes = {};

export default Article