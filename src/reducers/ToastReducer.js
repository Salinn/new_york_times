//Actions
import * as types from '../actions/ActionTypes';
//Initial Data
import initialState from '../store/initialState';

export default (state = initialState.toasts, action) => {
    switch (action.type) {
        case types.CREATE_TOAST_MESSAGE:
            return [ ...state, action.toast];
        case types.REMOVE_TOAST_MESSAGE:
            return state.filter(toast => toast.id === action.id)
        default:
            return state;
    }
}