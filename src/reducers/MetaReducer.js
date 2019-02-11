//Actions
import { 
    FETCH_ARTICLES_STARTED,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILED 
} from '../actions/ActionTypes';
//Initial Data
import initialState from '../store/initialState';

export default (state = initialState.meta, action) => {
    switch (action.type) {
        case FETCH_ARTICLES_STARTED:
            return { ...state, isLoading: true };
        case FETCH_ARTICLES_SUCCESS:
            return { ...state, isLoading: false };
        case FETCH_ARTICLES_FAILED:
            return { ...state, isLoading: false };
        default:
            return state;
    }
}