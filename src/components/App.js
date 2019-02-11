//React
import React from 'react';
import { array, func } from 'prop-types';
//Container
import Header from '../containers/Header';
import Articles from '../containers/Articles';
import Footer from '../containers/Footer';
import { Container, Row, Col } from 'reactstrap';

const App = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col xs={ 12 }>
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
