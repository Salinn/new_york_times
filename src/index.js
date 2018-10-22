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
import * as types from './actions/ActionTypes';

const store = configureStore();
store.dispatch({ type: types.FIND_ARTICLES });

ReactDOM.render(
    <Provider store={store} >
        <ArticleScreen />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
