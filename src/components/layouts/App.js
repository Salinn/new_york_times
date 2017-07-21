//React
import React, { Component } from 'react';
//Container
import ArticleScreen from '../../containers/ArticleScreen';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ArticleScreen />
                <Footer/>
            </div>
        );
    }
}

export default App;
