//Redux
import { combineReducers } from 'redux';
//Reducers
import articles from './ArticleReducer';
import meta from './MetaReducer';
import toasts from './ToastReducer';

const rootReducer = combineReducers({
    articles,
    meta,
    toasts
});

export default rootReducer;