//Redux
import { combineReducers } from 'redux';
//Reducers
import article from './ArticleReducer';

const rootReducer = combineReducers({
    article,
});

export default rootReducer;