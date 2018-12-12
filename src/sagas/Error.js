import { takeEvery, put } from 'redux-saga/effects'
import * as types from '../actions/ActionTypes'

function* errorOccured(props) {
    const {
        color = 'danger',
        error = {},
        message = 'Oops something went wrong please try again'
    } = props

    yield put({ type: types.NEW_TOAST, message, error, color })
    //send to anyltics
}

function* watchForErrors() {
    yield takeEvery(types.ERROR_OCCURERED, errorOccured)
}

export {
    watchForErrors
}