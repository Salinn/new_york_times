import _ from 'lodash';
import {
    CREATE_TOAST,
    REMOVE_TOAST
} from './ActionTypes';

export const createToast = props => dispatch => {
    const {
        message = 'Send me a message!',
        duration = 5000,
        color = 'info'
    } = props

    const id = _.uniqueId()

    const toast = {
        id,
        color,
        message
    }

    dispatch({ type: CREATE_TOAST, toast })

    setTimeout(
        () => dispatch(removeToast({ id })), 
        duration
    )
}

export const removeToast = ({ id }) => ({ type: REMOVE_TOAST, id })