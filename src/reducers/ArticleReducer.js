//Actions
import * as types from '../actions/ActionTypes';
//Initial Data
import initialState from './initialState';

export default function ArticleReducer(state = initialState.search, action) {
    switch (action.type) {
        default:
            return { ...state };
    }
}