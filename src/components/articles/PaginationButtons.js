//React
import React from 'react';
import { func, number, } from 'prop-types';
//Component
import { Button, Row, Col } from 'reactstrap';
import '../../assets/stylesheets/articles.css'

const PaginationButtons = ({ nextSetOfArticles, lastSetOfArticles, pagination, totalRows }) => {
    const totalPages = Math.ceil(totalRows/pagination.articlesPerPage) === 0 ?
        1 : Math.ceil(totalRows/pagination.articlesPerPage);

    return (
        <Row>
            <Col sm={ 5 }>
                <Button block
                        color="primary"
                        onClick={ lastSetOfArticles }
                        disabled={ pagination.currentPage === 1 }>
                    Previous Page
                </Button>
            </Col>
            <Col sm={ 2 }>
                <h4 className="onPage">On page { pagination.currentPage }</h4>
            </Col>
            <Col sm={ 5 }>
                <Button block
                        color="primary"
                        onClick={ nextSetOfArticles }
                        disabled={ pagination.currentPage === totalPages }>
                    Next Page
                </Button>
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