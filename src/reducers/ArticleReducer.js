//Actions
import * as types from '../actions/ActionTypes';
//Initial Data
import initialState from '../store/initialState';

export default function ArticleReducer(state = initialState.articles, action) {
    switch (action.type) {
        case types.FETCH_ARTICLES_STARTED:
            return { ...state };
        case types.FETCH_ARTICLES_SUCCESS:
            return { ...state, stories: action.stories };
        case types.FETCH_ARTICLES_FAILED:
            return { ...state };
        case  types.SET_PAGE:
            return {
                ...state,
                searchFields: {
                    ...state.searchFields,
                    page: action.page } };
        case types.TOGGLE_FULL_ARTICLE:
            return {
                ...state,
                fullArticle: {
                    ...state.fullArticle,
                    web_url: action.web_url,
                    isOpen: !state.fullArticle.isOpen } };
        case types.CHANGE_PAGE:
            return { ...state, currentPage: action.pageName };
        default:
            return { ...state };
    }
}