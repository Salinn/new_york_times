//Actions
import { CREATE_TOAST, REMOVE_TOAST } from '../actions/ActionTypes';
//Initial Data
import initialState from '../store/initialState';

export default (state = initialState.toasts, action) => {
    switch (action.type) {
        case CREATE_TOAST:
            return state.concat(action.toast)
        case REMOVE_TOAST:
            return state.filter(toast => toast.id != action.id)
        default:
            return state;
    }
}