//Actions
import * as types from '../actions/ActionTypes';
//Initial Data
import initialState from '../store/initialState';

export default function MetaReducer(state = initialState.meta, action) {
    switch (action.type) {
        case types.SET_PAGE:
            return {
                ...state,
                paginationPage: action.page
            };
        case types.CHANGE_PAGE:
            return { 
                ...state, 
                currentPage: action.pageName 
            };
        default:
            return state;
    }
}