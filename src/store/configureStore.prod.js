//Redux
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import initialState from './initialState';

const saga = createSagaMiddleware();
const middleware = [thunk, saga]
export default function configureStore() {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware),
    )

    saga.run(rootSaga)
    
    return store
}