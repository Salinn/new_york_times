//React
import React from 'react';
import {} from 'prop-types';
//Component
import { Button, Row, Col } from 'reactstrap';

const PaginationButtons = ({ nextSetOfArticles, lastSetOfArticles }) => {
    return (
        <Row>
            <Col sm="6">
                <Button block color="primary" onClick={ lastSetOfArticles }>Last Pages</Button>
            </Col>
            <Col sm="6">
                <Button block color="primary" onClick={ nextSetOfArticles }>Next Pages</Button>
            </Col>
        </Row>
    );
};

PaginationButtons.PropTypes = {};

export default PaginationButtons