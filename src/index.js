//React
import React from 'react';
import ReactDOM from 'react-dom';
//Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
//CSS
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/layouts/App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
