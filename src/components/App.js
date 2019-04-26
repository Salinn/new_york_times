//React
import React from 'react';
import { array, func } from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
//Container
import Header from '../containers/Header';
import Articles from '../containers/Articles';
import Footer from '../containers/Footer';
import Toasts from '../containers/Toasts';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-text-field';

const App = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col xs={ 12 }>
                        <Toasts />
                        <Articles />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

App.PropTypes = {
    articles: array.isRequired,
    nextSetOfArticles: func.isRequired,
    lastSetOfArticles: func.isRequired,
    toggleFullArticle: func.isRequired,
    changeArticles: func.isRequired,
    searchInput: func.isRequired,
};

export default App;
