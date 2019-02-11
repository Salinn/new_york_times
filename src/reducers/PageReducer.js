//Actions
import {
    CHANGE_PAGE,
    TOGGLE_FULL_ARTICLE,
    SET_PAGE
} from '../actions/ActionTypes';
//Initial Data
import initialState from '../store/initialState';

export default (state = initialState.page, action) => {
    switch (action.type) {
        case SET_PAGE: 
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    current: action.page
                }
            }
        case CHANGE_PAGE:
            return { 
                ...state, 
                currentPage: action.pageName,
                searchTerm: action.searchTerm
            };
        case TOGGLE_FULL_ARTICLE:
            return {
                ...state,
                fullArticle: {
                    ...state.fullArticle,
                    web_url: action.web_url,
                    isOpen: !state.fullArticle.isOpen
                }
            };
        default:
            return state;
    }
}