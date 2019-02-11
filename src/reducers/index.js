//Redux
import { combineReducers } from 'redux';
//Reducers
import meta from './MetaReducer';
import page from './PageReducer';
import sections from './SectionReducer';
import stories from './StoryReducer';

const rootReducer = combineReducers({
    meta,
    page,
    sections,
    stories,
});

export default rootReducer;