//Redux
import { combineReducers } from 'redux';
//Reducers
import meta from './MetaReducer';
import page from './PagesReducer';
import sections from './SectionReducer';
import stories from './StoryReducer';
import toasts from './ToastReducer'

const rootReducer = combineReducers({
    meta,
    page,
    sections,
    stories,
    toasts,
});

export default rootReducer;