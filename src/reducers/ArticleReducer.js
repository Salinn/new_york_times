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
            return {
                ...state,
                searchFields: {
                    ...state.searchFields,
                    page: { ...state.searchFields.page, value: action.page } } };
        case types.TOGGLE_FULL_ARTICLE:
            return {
                ...state,
                fullArticle: {
                    ...state.fullArticle,
                    web_url: action.web_url,
                    isOpen: !state.fullArticle.isOpen } };
        case types.INPUT_CHANGED:
            return {
                ...state,
                searchFields: {
                    ...state.searchFields,
                    [action.name]: {
                        ...state.searchFields[action.name],
                        value: action.value,
                        isError: action.isError,
                        errorMessage: action.errorMessage, } } };
        default:
            return { ...state };
    }
}