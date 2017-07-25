//React
import React, { Component } from 'react';
//Container
import ArticleScreen from '../../containers/ArticleScreen';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div>
                <ArticleScreen />
                <Footer/>
            </div>
        );
    }
}

export default App;
