//Redux
import { combineReducers } from 'redux';
//Reducers
import articles from './ArticleReducer';
import meta from './MetaReducer';

const rootReducer = combineReducers({
    articles,
    meta
});

export default rootReducer;