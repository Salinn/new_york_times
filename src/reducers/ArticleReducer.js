//Actions
import * as types from '../actions/ActionTypes';
//Initial Data
import initialState from './initialState';

export default function ArticleReducer(state = initialState.articles, action) {
    switch (action.type) {
        case types.FETCH_ARTICLES_STARTED:
            return { ...state };
        case types.FETCH_ARTICLES_SUCCESS:
            return { ...state, stories: action.stories };
        case types.FETCH_ARTICLES_FAILED:
            return { ...state };
        case  types.SET_PAGE:
            return { ...state, search: { ...state.search, page: action.page } };
        default:
            return { ...state };
    }
}