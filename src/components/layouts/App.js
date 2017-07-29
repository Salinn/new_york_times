//React
import React from 'react';
import { array, func } from 'prop-types';
//Container
import Header from './Header';
import Articles from '../../components/articles/Articles';
import Footer from './Footer';
import { Container, Row, Col } from 'reactstrap';

const App = ({ articles, nextSetOfArticles, lastSetOfArticles, toggleFullArticle, changeArticles, searchInput }) => {
    return (
        <div>
            <Header changeArticles={ changeArticles } currentPage={ articles.currentPage } searchInput={ searchInput } />
            <Container>
                <Row>
                    <Col xs={ 12 }>
                        <Articles articles={ articles }
                                  nextSetOfArticles={ nextSetOfArticles }
                                  lastSetOfArticles={ lastSetOfArticles }
                                  toggleFullArticle={ toggleFullArticle } />
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
