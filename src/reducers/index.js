//Redux
import { combineReducers } from 'redux';
//Reducers
import articles from './ArticleReducer';

const rootReducer = combineReducers({
    articles,
});

export default rootReducer;