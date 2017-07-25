//React
import React from 'react';
import {} from 'prop-types';
//Time Format
import moment from 'moment';
import { Col, Card, CardTitle, CardText, Button, Media } from 'reactstrap';

const Article = ({ article, toggle }) => {
    return  (
        <Col sm="6">
            <Card block>
                <CardTitle>{ article.headline.print_headline }</CardTitle>
                <CardText>{ article.snippet }</CardText>
                { moment(article.pub_date).format('MM/DD/YYYY h:mm a') }
                <Button onClick={ () => toggle(article.web_url) } >Read More</Button>
            </Card>
        </Col>
    );
};

Article.PropTypes = {};

export default Article