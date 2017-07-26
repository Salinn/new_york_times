//React
import React, { Component } from 'react';
//Container
import ArticleScreen from '../../containers/ArticleScreen';
import Footer from './Footer';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={ 12 }>
                        <ArticleScreen />
                    </Col>
                    <Col xs={ 12 }>
                        <Footer/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
