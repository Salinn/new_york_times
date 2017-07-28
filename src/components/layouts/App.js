//React
import React from 'react';
//Container
import Header from './Header';
import Articles from '../../components/articles/Articles';
import Footer from './Footer';
import { Container, Row, Col } from 'reactstrap';

const App = ({ articles, nextSetOfArticles, lastSetOfArticles, toggleFullArticle, onUserInput, changeArticles }) => {
    return (
        <div>
            <Header changeArticles={ changeArticles } />
            <Container>
                <Row>
                    <Col xs={ 12 }>
                        <Articles articles={ articles }
                                  nextSetOfArticles={ nextSetOfArticles }
                                  lastSetOfArticles={ lastSetOfArticles }
                                  toggleFullArticle={ toggleFullArticle }
                                  onUserInput={ onUserInput } />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default App;
