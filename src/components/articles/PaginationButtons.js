//React
import React from 'react';
import {} from 'prop-types';
//Component
import { Button, Row, Col } from 'reactstrap';
import '../../assets/stylesheets/articles.css'

const PaginationButtons = ({ nextSetOfArticles, lastSetOfArticles, pageNumber }) => {
    return (
        <Row>
            <Col sm={ 5 }>
                <Button block color="primary" onClick={ lastSetOfArticles }>Last Pages</Button>
            </Col>
            <Col sm={ 2 }>
                <h4 className="onPage">On page { pageNumber + 1 }</h4>
            </Col>
            <Col sm={ 5 }>
                <Button block color="primary" onClick={ nextSetOfArticles }>Next Pages</Button>
            </Col>
        </Row>
    );
};

PaginationButtons.PropTypes = {};

export default PaginationButtons