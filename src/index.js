//React
import React from 'react';
import ReactDOM from 'react-dom';
//Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
//CSS
import 'bootstrap/dist/css/bootstrap.css';
import ArticleScreen from './containers/ArticleScreen';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore()

ReactDOM.render(
    <Provider store={store} >
        <ArticleScreen />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
