//React
import React from 'react';
import { func, number, } from 'prop-types';
//Component
import { Button, Row, Col } from 'reactstrap';
import '../../assets/stylesheets/articles.css'

const PaginationButtons = ({ nextSetOfArticles, lastSetOfArticles, pageNumber }) => {
    return (
        <Row>
            <Col sm={ 5 }>
                <Button block color="primary" onClick={ lastSetOfArticles }>Previous Page</Button>
            </Col>
            <Col sm={ 2 }>
                <h4 className="onPage">On page { pageNumber + 1 }</h4>
            </Col>
            <Col sm={ 5 }>
                <Button block color="primary" onClick={ nextSetOfArticles }>Next Page</Button>
            </Col>
        </Row>
    );
};

PaginationButtons.PropTypes = {
    nextSetOfArticles: func.isRequired,
    lastSetOfArticles: func.isRequired,
    pageNumber: number.isRequired,
};

export default PaginationButtons