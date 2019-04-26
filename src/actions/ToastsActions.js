//Loads Action Types
import {
    CREATE_TOAST,
    REMOVE_TOAST
} from './ActionTypes';
//Article API
import * as ArticleAPI from '../utils/api/ArticleAPI';
import _ from 'lodash';

export const createToast = (props) => dispatch => {
    const {
        message = 'SEND A MESSAGE!!!!',
        color = 'info',
        duration = 5000
    } = props

    const toast = {
        id: _.uniqueId(),
        message,
        color
    }

    dispatch({ type: CREATE_TOAST, toast })

    setTimeout(
        () => dispatch(removeToast({ id: toast.id })),
        duration
    )
};

export const removeToast = ({ id }) => ({ type: REMOVE_TOAST, id })

