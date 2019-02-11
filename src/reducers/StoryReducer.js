//Actions
import { FETCH_ARTICLES_SUCCESS } from '../actions/ActionTypes';
//Initial Data
import initialState from '../store/initialState';

export default (state = initialState.stories, action) => {
    switch (action.type) {
        case FETCH_ARTICLES_SUCCESS:
            return action.stories;
        default:
            return state;
    }
}