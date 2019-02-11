//React
import React from 'react';
import { func, number, } from 'prop-types';
//Component
import { Button, Row, Col } from 'reactstrap';
import '../../assets/stylesheets/articles.css'

const PaginationButtons = (props) => {
    const {
        lastSetOfArticles,
        nextSetOfArticles,
        pagination: {
            current,
            max,
            min
        }
    } = props

    const DISABLE_PREVIOUS = current === min
    const DISABLE_NEXT = current === max
    const pageNumber = current + 1

    return (
        <Row>
            <Col sm={ 5 }>
                <Button block
                        color="primary"
                        onClick={ lastSetOfArticles }
                        disabled={ DISABLE_PREVIOUS }>
                    Previous Page
                </Button>
            </Col>
            <Col sm={ 2 }>
                <h4 className="onPage">On page { pageNumber }</h4>
            </Col>
            <Col sm={ 5 }>
                <Button block
                        color="primary"
                        onClick={ nextSetOfArticles }
                        disabled={ DISABLE_NEXT }>
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