import _ from 'lodash'
import {
    CREATE_TOAST,
    REMOVE_TOAST
} from './ActionTypes';

export const createToast = (props) => (dispatch) => {
    const {
        color = 'info',
        message = '',
        duration = 5000
    } = props

    const toast = {
        id: _.uniqueId(),
        message
    }
    dispatch({ type: CREATE_TOAST, toast })

    setTimeout(() => {
        dispatch(deleteToast({ id: toast.id }))
    }, duration)
}
export const removeToast = (props) => {
    const { id } = props
    return function (dispatch) {
        dispatch(deleteToast({ id }))
    }
}
export const deleteToast = ({ id }) => {
    return { type: REMOVE_TOAST, id }
}