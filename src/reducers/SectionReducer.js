//Actions
import { FETCH_ARTICLES_SUCCESS } from '../actions/ActionTypes';
//Initial Data
import initialState from '../store/initialState';

export default (state = initialState.sections, action) => {
    switch (action.type) {
        default:
            return state;
    }
}